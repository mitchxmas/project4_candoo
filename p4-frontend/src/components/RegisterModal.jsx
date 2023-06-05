import React, { useEffect, useRef, useState, useContext } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { fetchData } from "../helpers/common";
import UserContext from "../context/user";
import jwt_decode from "jwt-decode";

const OverLay = (props) => {
  const userCtx = useContext(UserContext);
  const [email, setEmail] = useState("newuser1@gmail.com");
  const [password, setPassword] = useState("password");
  const [role, setRole] = useState("user");
  const [showRegisterButton, setShowRegisterButton] = useState(true);

  const register = async () => {
    const { ok, data } = await fetchData("/auth/register", undefined, "PUT", {
      email,
      password,
      role,
    });
    console.log("register data", data);

    if (ok) {
      setEmail("");
      setPassword("");
      setRole("");
      setShowRegisterButton(!showRegisterButton);
      //   props.setShowRegisterModal(false);
      console.log("User registered!!!", "role:", userCtx.role);
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    email;
    password;
    showRegisterButton;
  }, []);

  // 1st
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <br />
        <br />
        {showRegisterButton && (
          <div>
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

            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-3">Role</div>
              <input value={role} type="text" className="col-md-3" disabled />
              <div className="col-md-3"></div>
            </div>

            <br />
            <div className="row">
              <div className="col-md-3"></div>
              <button onClick={() => register()} className="col-md-3">
                Register
              </button>
              <button
                onClick={() => props.setShowRegisterModal(false)}
                className="col-md-3"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {!showRegisterButton && (
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              We have sent you an email. Please verify your email to complete
              your account setup.
            </div>
            <br />
            <br />
            <br />
            <div className="row">
              <br />
              <div className="col-md-4"></div>
              <button
                onClick={() => props.setShowRegisterModal(false)}
                className="col-md-3"
              >
                Ok
              </button>
            </div>
          </div>
        )}

        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

const LoginModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <OverLay setShowRegisterModal={props.setShowRegisterModal} />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default LoginModal;
