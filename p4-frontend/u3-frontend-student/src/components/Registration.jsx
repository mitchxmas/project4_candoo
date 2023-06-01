import React, { useEffect, useState } from "react";
import { fetchData } from "../helpers/common";

const Registration = (props) => {
  const [roles, setRoles] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const getRoles = async () => {
    const { ok, data } = await fetchData("/roles");

    if (ok) {
      setRoles(data);
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    getRoles();
  }, []);

  const registerUser = async () => {
    const { ok, data } = await fetchData("/auth/register", undefined, "PUT", {
      email,
      password,
      role,
    });

    if (ok) {
      setEmail("");
      setPassword("");
      setRole("");
    } else {
      console.log(data);
    }
  };

  return (
    <div>
      <>
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
        </div>
      </>
    </div>
  );
};

export default Registration;
