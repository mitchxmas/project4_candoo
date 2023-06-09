import React, { useState, useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import UserContext from "../context/user";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import Cart from "./Cart";
import Profile from "./Profile";
import { fetchData } from "../helpers/common";
import AdminDashboard from "./AdminDashboard";

const Header = () => {
  const userCtx = useContext(UserContext);

  userCtx.accessToken;
  userCtx.authUser;
  userCtx.user;
  userCtx.userCart;
  userCtx.countCartItems;

  const getUserDetails = async () => {
    const { ok, data } = await fetchData(
      "/api/user",
      userCtx.accessToken,
      "POST",
      {
        auth_user_id: userCtx.authUser.id,
      }
    );

    if (ok) {
      userCtx.setUser(data);
      console.log("user details retrieved:", data);
    } else {
      console.log("A pb occurred while retrieving the user's details", data);
    }
    return;
  };

  const getCartIncludingCartItems = async () => {
    console.log("HEADER - getCartIncludingCartItems is being called");
    const { ok, data } = await fetchData(
      "/api/cart/items",
      userCtx.accessToken,
      "POST",
      {
        buyer_id: userCtx.user.id,
      }
    );

    if (ok) {
      userCtx.setUserCart(data);
      console.log(
        " HEADER - getCartIncludingCartItems has been retrieved",
        data
      );
    } else {
      console.log("user cart cannot be retrieved", data);
    }
    return;
  };

  //  Get all cart items and set context
  const getAllCartItems = async () => {
    console.log("HEADER - getAllCartItems is what's called here");
    const { ok, data } = await fetchData(
      "/api/cart/items/only",
      userCtx.accessToken,
      "POST",
      {
        order_id: parseInt(userCtx.userCart.id),
      }
    );
    if (ok) {
      console.log(
        "HEADER - getAllCartItems, including details of the seller_services: ",
        data
      );
      userCtx.setCountCartItems(data.length);
      console.log("HEADER - getAllCartItems - Count:", data.length);
    } else {
      console.log(
        "cannot get all cart items, including details of the seller_services: ",
        data
      );

      console.log(data);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, [userCtx.authUser]);

  useEffect(() => {
    getAllCartItems();
    getCartIncludingCartItems();
  }, [userCtx.user]);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MyProfile" element={<Profile />} />
        <Route path="/MyCart" element={<Cart />} />
        <Route path="/Admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
};

export default Header;
