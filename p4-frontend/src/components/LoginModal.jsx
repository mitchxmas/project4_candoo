import React, { useEffect, useRef, useState, useContext } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { fetchData } from "../helpers/common";
import UserContext from "../context/user";
import jwt_decode from "jwt-decode";

const OverLay = (props) => {
  const userCtx = useContext(UserContext);
  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState("password");

  const login = async () => {
    const { ok, data } = await fetchData("/auth/login", undefined, "POST", {
      email,
      password,
    });

    if (ok) {
      userCtx.setAccessToken(data.access);
      console.log("AccessToken:", data.access);
      // partial decoding of the jwt (only header and the payload)
      const decoded = jwt_decode(data.access);
      props.setShowLoginModal(false);
      console.log("Logged In!!!", "role:", userCtx.role);
      setEmail("");
      setPassword("");
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    email;
    password;
  }, []);

  // 1st
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <br />
        <br />
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Email</div>
          <input
            value={email}
            type="text"
            className="col-md-3"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3">Author</div>
          <input
            value={password}
            type="text"
            className="col-md-3"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="col-md-3"></div>
        </div>

        <br />
        <div className="row">
          <div className="col-md-3"></div>
          <button onClick={() => login()} className="col-md-3">
            Login
          </button>
          <button
            onClick={() => props.setShowLoginModal(false)}
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

const LoginModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <OverLay setShowLoginModal={props.setShowLoginModal} />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default LoginModal;
