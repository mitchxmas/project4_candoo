import React, { useEffect, useRef, useState, useContext } from "react";
import ReactDOM from "react-dom";
import styles from "./LoginRegisterModal.module.css";
import { fetchData } from "../helpers/common";
import UserContext from "../context/user";

const OverLay = (props) => {
  // const userCtx = useContext(UserContext);
  // const [email, setEmail] = useState("admin@admin.com");
  // const [password, setPassword] = useState("password");

  // const login = async () => {
  //   const { ok, data } = await fetchData("/auth/login", undefined, "POST", {
  //     email,
  //     password,
  //   });

  //   if (ok) {
  //     userCtx.setAccessToken(data.access);
  //     console.log("AccessToken:", data.access);
  //     // partial decoding of the jwt (only header and the payload)
  //     const decoded = jwt_decode(data.access);
  //     userCtx.setRole(decoded.role);
  //   } else {
  //     console.log(data);
  //   }
  // };

  // useEffect(() => {
  //   email;
  //   password;
  // }, []);

  // 1st
  return (
    <div className={styles.backdrop}>
      {/* <div className={styles.modal}>
        <br />
        <br />
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Email</div>
          <input
            className="col-md-3"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Password</div>
          <input
            className="col-md-3"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="col-md-3"></div>
        </div>

        <br />
        <div className="row">
          <div className="col-md-3"></div>
          <button onClick={() => login()} className="col-md-3">
            login
          </button>
          <button
            onClick={() => props.setShowLoginModal(false)}
            className="col-md-3"
          >
            cancel
          </button>
          <div className="col-md-3"></div>
        </div>
      </div> */}
    </div>
  );
};

const UpdateModal = (props) => {
  return (
    <>
      {/* {ReactDOM.createPortal(
        <OverLay setShowLoginModal={props.setShowLoginModal} />,
        document.querySelector("#modal-root")
      )} */}
    </>
  );
};

export default UpdateModal;
