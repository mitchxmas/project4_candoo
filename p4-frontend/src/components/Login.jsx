import React, { useContext, useState } from "react";
import { fetchData } from "../helpers/common";
import jwt_decode from "jwt-decode";
import UserContext from "../context/user";

const Login = (props) => {
  const userCtx = useContext(UserContext);
  const [email, setEmail] = useState("admin@admin.com");
  const [password, setPassword] = useState("password");

  // const handleLogin = async () => {
  //   const { ok, data } = await fetchData("/auth/login", undefined, "POST", {
  //     email,
  //     password,
  //   });

  //   if (ok) {
  //     console.log("login data", data);

  //     userCtx.setAccessToken(data.access);
  //     console.log("AccessToken:", data.access);
  //     // partial decoding of the jwt (only header and the payload)
  //     const decoded = jwt_decode(data.access);
  //     userCtx.setRole(decoded.role);
  //   } else {
  //     console.log(data);
  //   }
  // };

  return (
    <div>
      <>
        <br />
        {/* <div className="row">
          <div className="col-md-4"></div>
          <input
            type="text"
            className="col-md-4"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="col-md-4"></div>
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <input
            type="password"
            className="col-md-4"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="col-md-4"></div>
        </div>
        <div className="row">
          <div className="col-md-4"></div>
          <button className="col-md-4" type="submit" onClick={handleLogin}>
            login
          </button>
          <div className="col-md-4"></div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-4"></div>
          <button
            className="col-md-4"
            type="submit"
            onClick={() => props.setShowLogin(false)}
          >
            Register with Candoo
          </button>
          <div className="col-md-4"></div>
        </div> */}
      </>
    </div>
  );
};

export default Login;
