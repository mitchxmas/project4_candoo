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
        {showRegisterButton && (
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
              <Button className={styles.button} onClick={() => register()}>
                Register
              </Button>
              <Button
                variant="outline-primary"
                className={styles.button}
                onClick={() => props.setShowRegisterModal(false)}
              >
                Cancel
              </Button>
            </Stack>
          </div>
        )}

        {!showRegisterButton && (
          <div className={styles.form}>
            <br />
            <br />
            <br />
            We have sent you an email. Please verify your email to complete your
            account setup.
            <br />
            <br />
            <br />
            <Button
              onClick={() => props.setShowRegisterModal(false)}
              className="col-md-3"
            >
              Ok
            </Button>
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
