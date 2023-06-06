import React, { useEffect, useState, useContext } from "react";
import UserContext from "../context/user";
import { fetchData } from "../helpers/common";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import { FormSelect } from "react-bootstrap";
import styles from "./SellerServices.module.css";

const SellerServiceTable = (props) => {
  const [showUpdateModal, setShowUpdateModal] = useState("");

  // This section is to add some styling to the displayed location rows: alternating light grey / dark grey
  let rowStyle = "";
  if (props.index % 2 == 0) {
    rowStyle = "light";
  } else if (props.index % 2 !== 0) {
    rowStyle = "dark";
  }

  return (
    <div className="row">
      <div className="col-sm-2">{props.name}</div>
      <div className="col-sm-3">{props.desc}</div>
      <div className="col-sm-1">{props.price}</div>
      <div className="col-sm-2">{props.pricingUnit}</div>

      <button
        className="col-sm-2"
        onClick={() => props.deleteSellerService(props.id)}
      >
        delete
      </button>
      <button className="col-sm-2" onClick={() => setShowUpdateModal(true)}>
        update
      </button>
    </div>
  );
};

export default SellerServiceTable;
