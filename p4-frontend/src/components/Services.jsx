import React, { useEffect, useRef, useState, useContext } from "react";
import { fetchData } from "../helpers/common";
import UserContext from "../context/user";

const Services = () => {
  const userCtx = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);

  // no need for a token: get is unprotected information...

  const getAllUsers = async () => {
    const { ok, data } = await fetchData("/api/users", userCtx.accessToken);
    if (ok) {
      console.log("get all users: ", data);
      console.log("accessToken:", userCtx.accessToken);
      setUsers(data);
    } else {
      console.log(data);
    }
  };

  const getAllCategories = async () => {
    const { ok, data } = await fetchData(
      "/api/categories",
      userCtx.accessToken
    );
    if (ok) {
      console.log("get all categories: ", data);
      console.log("accessToken:", userCtx.accessToken);
      setCategories(data);
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    getAllUsers();
    getAllCategories();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1 className="col-md-6">User List</h1>
      </div>

      {users.map((item) => {
        return (
          <div className="row">
            <div key={item.id} className="col-sm-3">
              {item.username}
            </div>
            <div key={item.email} className="col-sm-3">
              {item.email}
            </div>
          </div>
        );
      })}
      <br />

      {categories.map((item) => {
        return (
          <div className="row">
            <div key={item.id} className="col-sm-3">
              {item.name}
            </div>
          </div>
        );
      })}

      <br />
    </div>
  );
};

export default Services;
