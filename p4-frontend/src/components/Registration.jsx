import React, { useEffect, useState, useContext } from "react";
import { fetchData } from "../helpers/common";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import UserContext from "../context/user";

const Registration = (props) => {
  const userCtx = useContext(UserContext);
  const [roles, setRoles] = useState([]);
  const [role, setRole] = useState("user");
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
  const [allUsers, setAllUSers] = useState("");

  const getRoles = async () => {
    const { ok, data } = await fetchData("/auth/roles");

    if (ok) {
      setRoles([data[0].role, data[1].role]);
    } else {
      console.log(data);
    }
  };

  const handleClick = () => {
    getAllUsers();
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

  const registerUser = async () => {
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
    } else {
      console.log(data);
    }
  };

  const handleLogin = async () => {
    const { ok, data } = await fetchData("/auth/login", undefined, "POST", {
      email,
      password,
    });

    if (ok) {
      userCtx.setAccessToken(data.access);
      console.log("AccessToken:", data.access);
      // partial decoding of the jwt (only header and the payload)
      const decoded = jwt_decode(data.access);
      userCtx.setRole(decoded.role);
    } else {
      console.log(data);
    }
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
    getRoles();
  }, []);

  return (
    <div>
      <>
        All USERS:
        <br />
        <div className="row">
          <div className="col-md-4"></div>
          <input
            className="col-md-4"
            placeholder="email"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            className="col-md-4"
            placeholder="test box"
            type="text"
            value={country}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div className="col-md-4"></div>
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <input
            className="col-md-4"
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="col-md-4"></div>
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <select
            name="roles"
            id="roles"
            className="col-md-4"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="none">please select</option>
            {roles.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <div className="col-md-4"></div>
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <button className="col-md-4" type="submit" onClick={registerUser}>
            register
          </button>
          <div className="col-md-4"></div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-4"></div>
          <button
            className="col-md-4"
            type="submit"
            onClick={() => props.setShowLogin(true)}
          >
            go to login screen
          </button>
          <div className="col-md-4"></div>

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

            <Button variant="primary" type="submit" onClick={handleClick}>
              Get All Users
            </Button>

            {/* --- END OF FORM ---  */}
          </Form>
        </div>
      </>
    </div>
  );
};

export default Registration;
