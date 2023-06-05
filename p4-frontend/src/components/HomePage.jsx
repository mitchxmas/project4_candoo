import React, { useEffect, useState, useContext } from "react";
import UserContext from "../context/user";
import { fetchData } from "../helpers/common";

const HomePage = () => {
  const userCtx = useContext(UserContext);
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);

  const getAllCategories = async () => {
    const { ok, data } = await fetchData("/api/categories");
    if (ok) {
      console.log("get all categories: ", data);
      console.log("accessToken:", userCtx.accessToken);
      setCategories(data);
    } else {
      console.log(data);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h1 className="col-md-6">Categories</h1>
      </div>

      {categories.map((item, index) => {
        return (
          <div>
            <div key={index} id={item.name} className="col-sm-3">
              {item.name}
              <img
                key={index}
                id={item.name}
                src={item.img}
                alt=""
                height="40px"
              />
            </div>
          </div>
        );
      })}

      <br />
    </div>
  );
};

export default HomePage;
