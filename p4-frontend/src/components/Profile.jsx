import React, { useEffect, useState, useContext } from "react";
import { fetchData } from "../helpers/common";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import UserContext from "../context/user";
import PaymentMeans from "./PaymentMethods";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import styles from "./Profile.module.css";
import { FormSelect } from "react-bootstrap";
import SellerServices from "./SellerServices";

const Profile = (props) => {
  const userCtx = useContext(UserContext);
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("Singapore");
  const [country, setCountry] = useState("Singapore");
  const [isSeller, setIsSeller] = useState(false);
  const [authUserId, setAuthUserId] = useState("");
  const [paymentMeans, setPaymentMeans] = useState([]);
  const [paymentType, setPaymentType] = useState("");
  const [paymentProvider, setPaymentProvider] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [disableEditing, setDisableEditing] = useState(false);

  const checkUserDetailsAndSubmit = (e) => {
    e.preventDefault();
    if (userCtx.user.id) {
      updateUserDetails();
    } else {
      addUserDetails();
    }
    setDisableEditing(true);
  };

  const submitPaymentMeansForm = (e) => {
    e.preventDefault();
    addPaymentMeans();
  };

  const getUserDetails = async () => {
    const { ok, data } = await fetchData(
      "/api/user",
      userCtx.accessToken,
      "POST",
      {
        auth_user_id: userCtx.authUser.id,
      }
    );

    if (ok) {
      userCtx.setUser(data);
      console.log("user details:", data);

      setId(data.id);
      setFirstName(data.firstname);
      setLastName(data.lastname);
      setUserName(data.username);
      setMobile(data.mobile);
      setEmail(userCtx.authUser.email);
      setAddressLine1(data.address_line1);
      setAddressLine2(data.address_line2);
      setPostcode(data.postcode);
      setCity("Singapore");
      setCountry("Singapore");
      setIsSeller(data.is_seller);
      setAuthUserId(userCtx.authUser.id);
    } else {
      console.log("A pb occurred while retrieving the user's details", data);
    }
    return;
  };

  //  This works
  const addUserDetails = async () => {
    const { ok, data } = await fetchData(
      "/api/users",
      userCtx.accessToken,
      "PUT",
      {
        email: userCtx.authUser.email,
        auth_user_id: userCtx.authUser.id,
        role: userCtx.authUser.role,
        is_seller: isSeller,
        username: userName,
        firstname: firstName,
        lastname: lastName,
        mobile: parseInt(mobile),
        address_line1: addressLine1,
        address_line2: addressLine2,
        postcode: parseInt(postcode),
        city: city,
        country: country,
      }
    );

    if (ok) {
      alert("User details have been saved.");
      console.log("user has been created :", data);
      setEmail("");
      setUserName("");
      setFirstName("");
      setLastName("");
      setMobile("");
      setPostcode("");
      setIsSeller("");
      setAddressLine1("");
      setAddressLine2("");
      setCity("");
      setCountry("");
      setAuthUserId("");
      getUserDetails();
    } else {
      console.log("createUser:", data);
    }
  };

  // This works!
  const updateUserDetails = async () => {
    const { ok, data } = await fetchData(
      "/api/users",
      userCtx.accessToken,
      "PATCH",
      {
        id: id,
        username: userName,
        firstname: firstName,
        lastname: lastName,
        email: email,
        auth_user_id: authUserId,
        role: userCtx.authUser.role,
        is_seller: isSeller,
        mobile: parseInt(mobile),
        address_line1: addressLine1,
        address_line2: addressLine2,
        postcode: parseInt(postcode),
        city: city,
        country: country,
      }
    );

    if (ok) {
      alert("User details have been updated.");
      getUserDetails();
    } else {
      console.log(data);
    }
  };

  // This works!
  const getUsersPaymentMethods = async () => {
    const { ok, data } = await fetchData(
      "/api/user/paymentmeans",
      userCtx.accessToken,
      "POST",
      {
        buyer_id: userCtx.user.id,
      }
    );

    if (ok) {
      setPaymentMeans(data);
      console.log("payment mneans :", data);
    } else {
      console.log("We could not get the user's payment details:", data);
    }
    return;
  };

  const addPaymentMeans = async () => {
    const { ok, data } = await fetchData(
      "/api/user/paymentmeans",
      userCtx.accessToken,
      "PUT",
      {
        buyer_id: userCtx.user.id,
        type: paymentType,
        provider: paymentProvider,
        card_number: cardNumber,
        card_expiry: cardExpiry,
      }
    );

    if (ok) {
      getUsersPaymentMethods();
      setCardNumber("");
      setPaymentProvider("");
      setPaymentType("");
      setCardExpiry("");
    } else {
      console.log(
        "A problem occurred while trying to add a payment method",
        data
      );
    }
    return;
  };

  useEffect(() => {
    console.log("userCtx.authUser", userCtx.authUser);
    if (userCtx.authUser) {
      getUserDetails();
      setDisableEditing(false);
    }
    if (userCtx.user) {
      setDisableEditing(true);
    } else {
      setDisableEditing(false);
    }
  }, []);

  useEffect(() => {
    console.log("userCtx.user", userCtx.user);
    if (userCtx.authUser && !userCtx.user) {
      getUserDetails();
    }
    if (!userCtx.user && userCtx.authUser) {
      setDisableEditing(false);
    }
  }, [userCtx.authUser]);

  useEffect(() => {
    if (userCtx.authUser && userCtx.user && paymentMeans)
      getUsersPaymentMethods();
    if (userCtx.user && userCtx.authUser) {
      setDisableEditing(true);
    }
  }, [userCtx.user]);

  useEffect(() => {
    getUserDetails();
  }, [firstName]);

  return (
    <>
      <div className={styles.profile}>
        <br />
        <div className="title">User Details</div>

        {!userCtx.authUser && "Please login to access your account details"}
        {userCtx.authUser && (
          <>
            <Form>
              <Row>
                <Col>
                  {/* // IS THE USER A SELLER? */}
                  <Form.Label className={styles.formTitles}>Profile</Form.Label>
                  <Form.Group className="mb-3">
                    <Form.Check
                      disabled={disableEditing}
                      inline
                      label="I am a seller"
                      name="group1"
                      type="radio"
                      id="radio_isSeller"
                      checked={isSeller}
                      onChange={(e) => {
                        setIsSeller(!isSeller);
                      }}
                    />
                    <Form.Check
                      disabled={disableEditing}
                      inline
                      label="I am a buyer"
                      name="group1"
                      type="radio"
                      id="radio_isSeller"
                      checked={!isSeller}
                      onChange={(e) => {
                        setIsSeller(!isSeller);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  {/* // USER NAME */}
                  <Form.Group className="mb-3" controlId="formBasicUserName">
                    <Form.Label className={styles.formTitles}>
                      User name
                    </Form.Label>
                    <Form.Control
                      disabled={disableEditing}
                      type="text"
                      placeholder="Enter user name"
                      value={userName}
                      onChange={(e) => {
                        setUserName(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  {/* // FIRST NAME */}
                  <Form.Group className="mb-3" controlId="formBasicFirstName">
                    <Form.Label className={styles.formTitles}>
                      First Name
                    </Form.Label>
                    <Form.Control
                      disabled={disableEditing}
                      type="text"
                      placeholder="Enter first name"
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  {/* // LAST NAME */}
                  <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Label className={styles.formTitles}>
                      Last Name
                    </Form.Label>
                    <Form.Control
                      disabled={disableEditing}
                      type="text"
                      placeholder="Enter last name"
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  {/* // EMAIL */}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className={styles.formTitles}>
                      Email address
                    </Form.Label>
                    <Form.Control
                      disabled
                      type="email"
                      placeholder="Enter email"
                      value={userCtx.authUser.email}
                    />
                  </Form.Group>
                </Col>

                <Col>
                  {/* // MOBILE */}
                  <Form.Group className="mb-3" controlId="formBasicMobile">
                    <Form.Label className={styles.formTitles}>
                      Mobile number{" "}
                    </Form.Label>
                    <InputGroup>
                      <InputGroup.Text>+65</InputGroup.Text>
                      <Form.Control
                        disabled={disableEditing}
                        type="number"
                        placeholder="Mobile number"
                        aria-label="+65"
                        value={mobile}
                        onChange={(e) => {
                          setMobile(e.target.value);
                        }}
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                {/* // ADDRESS LINES 1 & 2 */}
                <Form.Group className="mb-3" controlId="formBasicAddressLine1">
                  <Form.Label className={styles.formTitles}>
                    Address{" "}
                  </Form.Label>
                  <Form.Control
                    disabled={disableEditing}
                    type="text"
                    placeholder="enter address line 1"
                    value={addressLine1}
                    onChange={(e) => {
                      setAddressLine1(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicAddressLine2">
                  <Form.Control
                    disabled={disableEditing}
                    type="text"
                    placeholder="enter address line 2"
                    value={addressLine2}
                    onChange={(e) => {
                      setAddressLine2(e.target.value);
                    }}
                  />
                </Form.Group>
              </Row>

              <Row>
                <Col>
                  {/* // POST CODE */}
                  <Form.Group className="mb-3" controlId="formBasicPostcode">
                    <Form.Label className={styles.formTitles}>
                      Postcode
                    </Form.Label>
                    <Form.Control
                      disabled={disableEditing}
                      type="text"
                      placeholder="Enter postcode"
                      value={postcode}
                      onChange={(e) => {
                        setPostcode(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  {/* // CITY - disabled with default value Singapore */}
                  <Form.Group className="mb-3" controlId="formBasicCity">
                    <Form.Label className={styles.formTitles}>City</Form.Label>
                    <Form.Control
                      type="text"
                      disabled
                      value={city}
                      placeholder="City"
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>

                <Col>
                  {/* // COUNTRY - disabled with default value Singapore */}
                  <Form.Group className="mb-3" controlId="formBasicCountry">
                    <Form.Label className={styles.formTitles}>
                      Country
                    </Form.Label>
                    <Form.Control
                      type="text"
                      disabled
                      placeholder="Singapore"
                      value={country}
                      onChange={(e) => {
                        setCountry(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              {disableEditing && (
                <Form.Group>
                  <Button
                    variant="primary"
                    onClick={(e) => {
                      setDisableEditing(false);
                    }}
                  >
                    Update
                  </Button>
                </Form.Group>
              )}

              {!disableEditing && (
                <Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={(e) => {
                      checkUserDetailsAndSubmit(e);
                    }}
                  >
                    Save
                  </Button>
                </Form.Group>
              )}

              {/* --- END OF USER DETAILS FORM ---  */}
            </Form>
          </>
        )}

        {!isSeller && (
          <>
            {userCtx.authUser && userCtx.user && (
              <div>
                <br />
                <div className="title">Payment Methods</div>

                {paymentMeans && (
                  <div>
                    {paymentMeans.map((item, index) => {
                      return <PaymentMeans item={item} index={index} />;
                    })}
                  </div>
                )}
              </div>
            )}

            {userCtx.authUser && userCtx.user && (
              <>
                <div>Add a payment method</div>
                <br />
                <Form>
                  <Row>
                    <Col>
                      {/* // Type */}
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className={styles.formTitles}>
                          Payment Type
                        </Form.Label>

                        <FormSelect
                          value={paymentType}
                          onChange={(e) => {
                            setPaymentType(e.target.value);
                            console.log(paymentType);
                          }}
                        >
                          <option default value="">
                            Select payment type:
                          </option>
                          <option value="Credit Card">Credit Card</option>
                          <option value="Paypal">Paypal</option>
                          <option value="NETS">NETS</option>
                          <option value="Bitcoin">Bitcoin</option>
                        </FormSelect>
                      </Form.Group>
                    </Col>

                    {paymentType === "Credit Card" && (
                      <>
                        <Col>
                          {/* // PROVIDER */}

                          <Form.Group
                            className="mb-3"
                            controlId="formBasicUserName"
                          >
                            <Form.Label className={styles.formTitles}>
                              Payment Provider
                            </Form.Label>
                            <FormSelect
                              value={paymentProvider}
                              onChange={(e) => {
                                setPaymentProvider(e.target.value);
                                console.log(paymentProvider);
                              }}
                            >
                              <option default disabled value="0">
                                Select payment provider, if applicable:
                              </option>
                              <option value="MasterCard">MasterCard</option>
                              <option value="Visa">Visa</option>
                            </FormSelect>
                          </Form.Group>
                        </Col>

                        <Col>
                          {/* // CARD NUMBER */}
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicUserName"
                          >
                            <Form.Label className={styles.formTitles}>
                              Card Number
                            </Form.Label>
                            <Form.Control
                              type="number"
                              placeholder="Card number"
                              value={cardNumber}
                              onChange={(e) => {
                                setCardNumber(e.target.value);
                              }}
                            />
                          </Form.Group>
                        </Col>

                        <Col>
                          {/* // CARD EXPIRY */}
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicUserName"
                          >
                            <Form.Label className={styles.formTitles}>
                              Card expiry
                            </Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Card expiry"
                              value={cardExpiry}
                              onChange={(e) => {
                                setCardExpiry(e.target.value);
                              }}
                            />
                          </Form.Group>
                        </Col>
                      </>
                    )}
                  </Row>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={(e) => {
                      submitPaymentMeansForm(e);
                    }}
                  >
                    Add
                  </Button>
                </Form>
              </>
            )}
          </>
        )}

        {isSeller && <SellerServices />}

        <br />
      </div>
    </>
  );
};

export default Profile;
