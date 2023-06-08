import React, { useEffect, useState, useContext } from "react";
import UserContext from "../context/user";
import { fetchData } from "../helpers/common";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./SellerServices.module.css";
import Table from "react-bootstrap/Table";
import UpdateModal from "./UpdateModal";

const CartTable = (props) => {
  let gstRate = 0.08;
  let gstAmount = props.quantity * props.price * gstRate;
  let calcTotal = props.quantity * props.price + gstAmount;

  return (
    <>
      <tr>
        <td>{props.index}</td>
        <td>{props.seller_services.name}</td>
        <td>{props.seller_services.desc}</td>
        <td>{props.quantity}</td>
        <td>{props.price}</td>
        <td>{gstAmount}</td>
        <td>{calcTotal}</td>
        <td>
          <Button
            variant="primary"
            onClick={() => props.deleteCartItem(props.id)}
          >
            delete
          </Button>
        </td>
      </tr>
    </>
  );
};

export default CartTable;
