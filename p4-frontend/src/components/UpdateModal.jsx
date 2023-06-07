import React, { useEffect, useRef, useState, useContext } from "react";
import ReactDOM from "react-dom";
import styles from "./UpdateModal.module.css";
import { fetchData } from "../helpers/common";
import UserContext from "../context/user";

const OverLay = (props) => {
  const userCtx = useContext(UserContext);

  const nameRef = useRef("");
  const descRef = useRef("");
  const priceRef = useRef("");
  const priceTypeRef = useRef("");

  // This works

  const updateSellerService = async () => {
    console.log({
      id: parseInt(props.id),
      name: nameRef.current.value,
      desc: descRef.current.value,
      price: parseInt(priceRef.current.value),
      price_type: priceTypeRef.current.value,
      service_id: parseInt(props.service_id),
    });
    const { ok, data } = await fetchData(
      "/api/service/seller",
      userCtx.accessToken,
      "PATCH",
      {
        id: parseInt(props.id),
        name: nameRef.current.value,
        desc: descRef.current.value,
        price: parseInt(priceRef.current.value),
        price_type: priceTypeRef.current.value,
        service_id: parseInt(props.service_id),
      }
    );
    console.log(data);

    if (ok) {
      props.getAllServicesFromSeller();
      props.setShowUpdateModal(false);
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    nameRef.current.value = props.name;
    descRef.current.value = props.desc;
    priceRef.current.value = props.price;
    priceTypeRef.current.value = props.price_type;
  }, []);

  // 1st
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <br />
        <br />
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Name</div>
          <input ref={nameRef} type="text" className="col-md-3" />
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Description</div>
          <input ref={descRef} type="text" className="col-md-3" />
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Price</div>
          <input ref={priceRef} type="text" className="col-md-3" />
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Price Type</div>
          <input ref={priceTypeRef} type="text" className="col-md-3" />
          <div className="col-md-3"></div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-3"></div>
          <button
            onClick={() => updateSellerService(props.id)}
            className="col-md-3"
          >
            update
          </button>
          <button
            onClick={() => props.setShowUpdateModal(false)}
            className="col-md-3"
          >
            cancel
          </button>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

const UpdateModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <OverLay
          id={props.id}
          name={props.name}
          desc={props.desc}
          price={props.price}
          price_type={props.price_type}
          service_id={props.service_id}
          setShowUpdateModal={props.setShowUpdateModal}
          getAllServicesFromSeller={props.getAllServicesFromSeller}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default UpdateModal;
