import React, { useState, useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import UserContext from "../context/user";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Services from "./_NotInUse_Services";
import HomePage from "./HomePage";
import Cart from "./Cart";
import Profile from "./Profile";
import { fetchData } from "../helpers/common";

const Header = () => {
  const userCtx = useContext(UserContext);

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

  const getUserCart = async () => {
    console.log("getUserCart is being called");
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
      console.log("user cart has been retrieved", data);
    } else {
      console.log("user cart cannot be retrieved", data);
    }
    return;
  };

  useEffect(() => {
    getUserDetails();
    getUserCart();
  }, []);

  useEffect(() => {
    getUserCart();
  }, [userCtx.user]);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/MyProfile" element={<Profile />} />
        <Route path="/Cart" element={<Cart></Cart>} />
      </Routes>
      <SearchBar />
    </div>
  );
};

export default Header;
