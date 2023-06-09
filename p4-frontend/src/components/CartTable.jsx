import React, { useEffect, useState, useContext } from "react";
import UserContext from "../context/user";
import { fetchData } from "../helpers/common";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./Cart.module.css";
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
        <td className={styles.numbersInTable}>{props.quantity}</td>
        <td className={styles.numbersInTable}>{props.price}</td>
        <td className={styles.numbersInTable}>{gstAmount}</td>
        <td className={styles.numbersInTable}>{calcTotal}</td>
        <td className={styles.buttonInTable}>
          <Button
            variant="outline-primary"
            size="sm"
            onClick={() => props.deleteCartItem(props.id)}
          >
            Delete
          </Button>
        </td>
      </tr>
    </>
  );
};

export default CartTable;
