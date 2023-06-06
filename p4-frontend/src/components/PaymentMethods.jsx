import React, { useEffect, useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import styles from "./Profile.module.css";

const PaymentMethods = (props) => {
  const [paymentType, setPaymentType] = useState("Credit Card");

  return (
    <>
      <div>Payment method {props.index + 1}</div>
      <br />
      <Form>
        <Row>
          <Col>
            {/* // Type */}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className={styles.formTitles}>
                Payment Type
              </Form.Label>
              <Form.Control
                disabled
                type="email"
                placeholder="Enter email"
                value={props.item.type}
              />
            </Form.Group>
          </Col>

          {props.item.type === "Credit Card" && (
            <>
              <Col>
                {/* // PROVIDER */}
                <Form.Group className="mb-3" controlId="formBasicUserName">
                  <Form.Label className={styles.formTitles}>
                    Payment Provider
                  </Form.Label>
                  <Form.Control
                    disabled
                    type="text"
                    placeholder="Select Payment type"
                    value={props.item.provider}
                  />
                </Form.Group>
              </Col>
              <Col>
                {/* // CARD NUMBER */}
                <Form.Group className="mb-3" controlId="formBasicUserName">
                  <Form.Label className={styles.formTitles}>
                    Card Number
                  </Form.Label>
                  <Form.Control
                    disabled
                    type="text"
                    placeholder="Card number"
                    value={props.item.card_number}
                  />
                </Form.Group>
              </Col>
              <Col>
                {/* // CARD EXPIRY */}
                <Form.Group className="mb-3" controlId="formBasicUserName">
                  <Form.Label className={styles.formTitles}>
                    Card expiry
                  </Form.Label>
                  <Form.Control
                    disabled
                    type="text"
                    placeholder="Card expiry"
                    value={props.item.card_expiry}
                  />
                </Form.Group>
              </Col>
            </>
          )}
        </Row>
      </Form>
    </>
  );
};

export default PaymentMethods;
