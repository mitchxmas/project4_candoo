import React, { useEffect, useState, useContext, useRef } from "react";
import CartTable from "./CartTable";
import UserContext from "../context/user";
import { fetchData } from "../helpers/common";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Col, FormControl, Row, Tab } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import styles from "./Cart.module.css";
import { FormSelect } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const Cart = () => {
  const userCtx = useContext(UserContext);
  const [allCartItems, setAllCartItems] = useState([]);
  const totalGrossRef = useRef(0);
  const gstRate = 0.08;
  const totalGstRef = useRef(0);
  const totalNetRef = useRef(0);

  //  This does not work yet
  const getAllCartItems = async () => {
    console.log("getAllCartItems is what's called here");
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
        "got all cart items, including details of the seller_services: ",
        data
      );
      setAllCartItems(data);
    } else {
      console.log(
        "cannot get all cart items, including details of the seller_services: ",
        data
      );

      console.log(data);
    }
  };

  //  This does not work yet
  const deleteCartItem = async (id) => {
    console.log("cart item Id to delete:", id);
    const { ok, data } = await fetchData(
      "/api/service/seller",
      userCtx.accessToken,
      "DELETE",
      {
        id: id,
      }
    );

    if (ok) {
      alert("An item has been removed from your cart.");
      console.log("An item has been removed from your cart.", data);
      getAllCartItems();
    } else {
      console.log("could not delete the item from the cart:", data);
    }
  };

  useEffect(() => {
    getAllCartItems();
  }, []);

  return (
    <div>
      {true && (
        <>
          {true && (
            <div>
              <br />
              <div className="title">Items in my cart: </div>

              {userCtx.user && (
                <div>
                  <Table striped bordered hover>
                    <thead>
                      <th>#</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Quantity</th>

                      <th>Price</th>
                      <th>GST Tax</th>
                      <th>Total</th>
                    </thead>
                    <tbody>
                      {allCartItems.map((item, index) => {
                        totalGrossRef.current += parseFloat(item.price);
                        totalGstRef.current += Number(item.price) * gstRate;
                        return (
                          <CartTable
                            item={item}
                            index={index}
                            key={item.id}
                            id={item.id}
                            quantity={item.quantity}
                            price={item.price}
                            seller_service_id={item.seller_service_id}
                            seller_services={item.seller_services}
                          />
                        );
                      })}
                      <th></th>
                      <th></th>
                      <th>TOTAL</th>
                      <th></th>
                      <th>{totalGrossRef.current}</th>
                      <th>{totalGstRef.current}</th>
                      <th>{totalNetRef.current}</th>
                    </tbody>
                  </Table>
                </div>
              )}
              <br />
              <br />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
