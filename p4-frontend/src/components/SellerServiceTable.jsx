import React, { useEffect, useState, useContext } from "react";
import UserContext from "../context/user";
import { fetchData } from "../helpers/common";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./SellerServices.module.css";
import Table from "react-bootstrap/Table";
import UpdateModal from "./UpdateModal";

const SellerServiceTable = (props) => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  return (
    <>
      {showUpdateModal && (
        <UpdateModal
          id={props.id}
          name={props.name}
          desc={props.desc}
          price={props.price}
          price_type={props.price_type}
          service_id={props.service_id}
          setShowUpdateModal={setShowUpdateModal}
          getAllServicesFromSeller={props.getAllServicesFromSeller}
        />
      )}

      <tr>
        <td>{props.index}</td>
        <td>{props.name}</td>
        <td>{props.desc}</td>
        <td>{props.price}</td>
        <td>{props.price_type}</td>
        <td>
          <Button
            variant="primary"
            onClick={() => props.deleteSellerService(props.id)}
          >
            delete
          </Button>
        </td>
        <td>
          <Button variant="primary" onClick={() => setShowUpdateModal(true)}>
            update
          </Button>
        </td>
      </tr>
    </>
  );

  {
    /* <div className="col-sm-2">{props.name}</div>
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
      </button> */
  }
};

export default SellerServiceTable;
