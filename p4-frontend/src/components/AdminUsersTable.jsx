import React, { useEffect, useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import styles from "./AdminUsersTable.module.css";
import Table from "react-bootstrap/Table";

const AdminUsersTable = (props) => {
  const sellerBuyer = () => {
    if (props.is_seller == true) {
      ("Seller");
    } else {
      ("Buyer");
    }
    return;
  };

  return (
    <tr>
      <td>{props.index}</td>
      <td>{sellerBuyer()}</td>
      <td>{props.firstname}</td>
      <td>{props.lastname}</td>
      <td>{props.email}</td>
      <td>{props.mobile}</td>

      <td>
        <Button variant="primary" onClick={() => props.deleteUser(props.id)}>
          delete
        </Button>
      </td>
      <td>
        <Button variant="primary" onClick={() => setShowUpdateModal(true)}>
          update
        </Button>
      </td>
    </tr>
  );
};

export default AdminUsersTable;
