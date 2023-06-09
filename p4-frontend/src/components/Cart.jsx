import React, { useEffect, useState, useContext, useRef } from "react";
import CartTable from "./CartTable";
import UserContext from "../context/user";
import { fetchData } from "../helpers/common";
import Button from "react-bootstrap/Button";
import styles from "./Cart.module.css";
import Table from "react-bootstrap/Table";

const Cart = () => {
  const userCtx = useContext(UserContext);
  const [allCartItems, setAllCartItems] = useState([]);
  const totalGrossRef = useRef(0);
  const gstRate = 0.08;
  const totalGstRef = useRef(0);
  const totalNetRef = useRef(0);

  //  Get all cart items
  const getAllCartItems = async () => {
    console.log("CART - getAllCartItems is what's called here");
    console.log("userCtx.userCart.id", userCtx.userCart.id);
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
        "CART - got all cart items, including details of the seller_services: ",
        data
      );
      userCtx.setCountCartItems(data.length);
      setAllCartItems(data);
      console.log("array length", data.length);
    } else {
      console.log(
        "cannot get all cart items, including details of the seller_services: ",
        data
      );

      console.log(data);
    }
  };

  //  Remove an item from the cart
  const deleteCartItem = async (id) => {
    console.log("cart item Id to delete:", id);
    const { ok, data } = await fetchData(
      "/api/cart/item",
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

  // Calculation fields for total gross price, total GST tax amount and total net price
  const totalGrossPrice = allCartItems
    .map((item) => Number(item.price))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const totalGST = 0.08 * totalGrossPrice;
  const totalNetPrice = totalGrossPrice + totalGST;

  // useEffect(() => {
  //   getAllCartItems();
  // }, []);

  useEffect(() => {
    getAllCartItems();
  }, [userCtx.userCart]);

  useEffect(() => {
    if (!userCtx.user && userCtx.authUser) {
      getAllCartItems();
    }
  }, [userCtx.authUser]);

  useEffect(() => {
    getAllCartItems();
  }, [userCtx.user]);

  return (
    <div className={styles.cart}>
      <br />
      <div className="title">My Cart</div>

      {!userCtx.authUser && "Please login to access your account details"}

      {userCtx.authUser && (
        <div>
          <br />
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
                        deleteCartItem={deleteCartItem}
                      />
                    );
                  })}

                  <th></th>
                  <th>TOTAL</th>
                  <th></th>
                  <th></th>
                  <th className={styles.numbersInTable}>{totalGrossPrice}</th>
                  <th className={styles.numbersInTable}>{totalGST}</th>
                  <th className={styles.numbersInTable}>{totalNetPrice}</th>
                  <th></th>
                </tbody>
              </Table>
              <br />
              <br />
              <div className={styles.checkoutButton}>
                <Button
                  variant="primary"
                  onClick={() => props.deleteCartItem(props.id)}
                >
                  Check Out
                </Button>
              </div>
            </div>
          )}
          <br />
          <br />
        </div>
      )}
    </div>
  );
};

export default Cart;
