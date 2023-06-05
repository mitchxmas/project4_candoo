import React, { useEffect, useState, useContext } from "react";
import { fetchData } from "../helpers/common";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import UserContext from "../context/user";

const Profile = (props) => {
  const userCtx = useContext(UserContext);
  const [email, setEmail] = useState("dummy@email");
  const [password, setPassword] = useState("password");
  const [firstName, setFirstName] = useState("dummy");
  const [lastName, setLastName] = useState("DUMMY");
  const [userName, setUserName] = useState("dumbDummy");
  const [mobile, setMobile] = useState("1234567");
  const [addressLine1, setAddressLine1] = useState("my house");
  const [addressLine2, setAddressLine2] = useState("my street");
  const [postcode, setPostCode] = useState("257749");
  const [city, setCity] = useState("Singapore");
  const [country, setCountry] = useState("Singapore");
  const [isSeller, setIsSeller] = useState(false);

  const submitUserDetailsForm = () => {
    return;
  };

  const getAllUsers = async () => {
    const { ok, data } = await fetchData("/api/users", userCtx.accessToken);
    if (ok) {
      console.log("get all users: ", data);
      console.log("accessToken:", userCtx.accessToken);
      setAllUSers(data);
    } else {
      console.log(data);
    }
  };

  const registerLoginAddUSer = () => {
    registerUser();
    handleLogin();
    addUserDetails();
  };

  const addUserDetails = async () => {
    const { ok, data } = await fetchData("/api/users", undefined, "PUT", {
      email,
      password,
      role,
      isSeller,
      userName,
      firstName,
      lastName,
      mobile,
      addressLine1,
      addressLine2,
      postcode,
      city,
      country,
    });

    if (ok) {
      // setEmail("");
      // setPassword("");
      // setRole("");
      // setUserName("");
      // setFirstName("");
      // setLastName("");
      // setMobile("");
      // setPostCode("");
      // setIsSeller("");
      // setAddressLine1("");
      // setAddressLine2("");
      // setCity("");
      // setCountry("");
    } else {
      console.log("createUser:", data);
    }
  };

  useEffect(() => {
    "";
  }, []);

  return (
    <>
      {/* if the user has been registered, then show a msg
// if the user has been registered, but no user number or details: prompt to create user & provide details
// if the user has been registered and user details exist: then OK
// Registration = because AccessToken or RefreshToken exists*/}

      <div>User Details</div>
      <Form>
        {/* // EMAIL */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>

        {/* // PASSWORD */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder=" Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {/* // SELLER OR BUYER */}
        <Form.Group className="mb-3">
          <Form.Label>Profile</Form.Label>
          <Form.Check
            inline
            label="I am a buyer"
            name="group1"
            type="radio"
            id="inline-radio-1"
            onChange={(e) => {
              setIsSeller(true);
              console.log("radio1:", isSeller);
            }}
          />
          <Form.Check
            inline
            label="I am a seller"
            name="group1"
            type="radio"
            id="inline-radio-2"
            onChange={(e) => {
              setIsSeller(false);
              console.log("radio2:", isSeller);
            }}
          />
        </Form.Group>

        {/* // USER NAME */}
        <Form.Group className="mb-3" controlId="formBasicUserName">
          <Form.Label>User name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter user name"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </Form.Group>

        {/* // FIRST NAME */}
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </Form.Group>

        {/* // LAST NAME */}
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </Form.Group>

        {/* // MOBILE */}
        <Form.Group className="mb-3" controlId="formBasicMobile">
          <Form.Label>Mobile number </Form.Label>
          <InputGroup>
            <InputGroup.Text>+65</InputGroup.Text>
            <Form.Control
              type="number"
              placeholder="Mobile number"
              aria-label="+65"
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
          </InputGroup>
        </Form.Group>

        {/* // ADDRESS LINES 1 & 2 */}
        <Form.Group className="mb-3" controlId="formBasicAddressLine1">
          <Form.Label>Address </Form.Label>
          <Form.Control
            type="text"
            placeholder="enter address line 1"
            onChange={(e) => {
              setAddressLine1(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAddressLine2">
          <Form.Control
            type="text"
            placeholder="enter address line 2"
            onChange={(e) => {
              setAddressLine2(e.target.value);
            }}
          />
        </Form.Group>

        {/* // POST CODE */}
        <Form.Group className="mb-3" controlId="formBasicPostcode">
          <Form.Label>Postcode</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter postcode"
            onChange={(e) => {
              setPostCode(e.target.value);
            }}
          />
        </Form.Group>

        {/* // CITY - disabled with default value Singapore */}
        <Form.Group className="mb-3" controlId="formBasicCity">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            disabled
            placeholder="Singapore"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </Form.Group>

        {/* // COUNTRY - disabled with default value Singapore */}
        <Form.Group className="mb-3" controlId="formBasicCountry">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            disabled
            placeholder="Singapore"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={(e) => {
            registerLoginAddUSer();
          }}
        >
          Submit
        </Button>

        <Button variant="primary" type="submit" onClick={submitUserDetailsForm}>
          Get All Users
        </Button>

        {/* --- END OF FORM ---  */}
      </Form>
    </>
  );
};

export default Profile;
