import React, { useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { fetchData } from "../helpers/common";
import UserContext from "../context/user";
import jwt_decode from "jwt-decode";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Stack } from "react-bootstrap";

const OverLay = (props) => {
  const userCtx = useContext(UserContext);
  const [email, setEmail] = useState("jane@gmail.com");
  const [password, setPassword] = useState("password");

  // This works and logs in the user based on his email and password
  const loginUser = async () => {
    const { ok, data } = await fetchData("/auth/login", undefined, "POST", {
      email,
      password,
    });

    if (ok) {
      userCtx.setAccessToken(data.access);
      // partial decoding of the jwt (only header and the payload)
      const decoded = jwt_decode(data.access);

      console.log("Logged In!!!", "check role:", decoded.authUser.role);
      userCtx.setAuthUser(decoded.authUser);
      userCtx.setRole(decoded.authUser.role);

      props.setShowLoginModal(false);
    } else {
      console.log(data);
    }
    return;
  };

  // 1st
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.form}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className={styles.formTitles}>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className={styles.formTitles}>Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
          </Form>

          <Stack className={styles.form}>
            <Button className={styles.button} onClick={() => loginUser()}>
              Login
            </Button>
            <Button
              variant="outline-primary"
              className={styles.button}
              onClick={() => props.setShowLoginModal(false)}
            >
              Cancel
            </Button>
          </Stack>
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
