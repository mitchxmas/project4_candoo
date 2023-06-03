import React, { useEffect, useRef, useState, useContext } from "react";
import Book from "./Book";
import { fetchData } from "../helpers/common";
import UserContext from "../context/user";

const BooksDisplay = () => {
  const userCtx = useContext(UserContext);
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);

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

  useEffect(() => {
    getAllUsers();
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
    </div>
  );
};

export default BooksDisplay;
