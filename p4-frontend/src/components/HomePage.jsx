import React, { useEffect, useState, useContext } from "react";
import UserContext from "../context/user";
import { fetchData } from "../helpers/common";
import styles from "./HomePage.module.css";
import { XCircleIcon } from "@heroicons/react/24/solid";

const HomePage = () => {
  const userCtx = useContext(UserContext);
  const [categories, setCategories] = useState([]);
  const [categorySelected, setCategorySelected] = useState("");

  const [services, setServices] = useState([]);
  const [serviceSelected, setServiceSelected] = useState("");
  const [serviceSellers, setServiceSellers] = useState([]);

  const getAllCategories = async () => {
    const { ok, data } = await fetchData("/api/categories");
    if (ok) {
      setCategories(data);
    } else {
      console.log(data);
    }
  };

  const getAllServicesInCategory = async () => {
    console.log("category selected", categorySelected);
    const { ok, data } = await fetchData(
      "/api/category/services",
      undefined,
      "POST",
      {
        category_id: parseInt(categorySelected.id),
      }
    );
    if (ok) {
      console.log("get all services: ", data);
      setServices(data);
    } else {
      console.log(
        "we could not retrieve the list of services in this category: ",
        data
      );
    }
  };

  const getAllServiceSellers = async () => {
    const { ok, data } = await fetchData(
      "/api/service/sellers",
      undefined,
      "POST",
      {
        service_id: serviceSelected.id,
      }
    );
    if (ok) {
      setServiceSellers(data);
      console.log("we have retrieved the service sellers", data);
    } else {
      console.log(data);
      console.log("we could not retrieved the service sellers", data);
    }
  };

  const getAllServicesIncludingSellers = async () => {
    const { ok, data } = await fetchData(
      "/api/services/sellers/all",
      undefined,
      "POST",
      {
        category_id: categorySelected.id,
      }
    );
    if (ok) {
      setServiceSellers(data);
      console.log(
        "we have retrieved all services & sellers for that category",
        data
      );
    } else {
      console.log(data);
      console.log(
        "we could not retrieved all services & sellers for that category",
        data
      );
    }
  };

  useEffect(() => {
    getAllCategories();
    getAllServiceSellers();
  }, []);

  useEffect(() => {
    if (categorySelected) {
      getAllServicesInCategory();
      getAllServicesIncludingSellers();
    }
  }, [categorySelected]);

  useEffect(() => {
    if (serviceSelected) {
      getAllServiceSellers();
    }
  }, [serviceSelected]);

  console.log(serviceSellers);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.searchBarContainer}>
        <input
          type="text"
          id="searchBar"
          placeholder="Search"
          className={styles.searchBar}
        ></input>
      </div>

      <div className={styles.serviceFiltersContainer}>
        {categorySelected && (
          <div
            className={styles.serviceFilters}
            onClick={(e) => {
              setCategorySelected("");
            }}
          >
            <div>
              {categorySelected.name}
              <XCircleIcon className={styles.XcircleIcon} />
            </div>
          </div>
        )}

        {serviceSelected && (
          <div
            className={styles.serviceFilters}
            onClick={(e) => {
              setServiceSelected("");
            }}
          >
            <div>
              {serviceSelected.name}
              <XCircleIcon className={styles.XcircleIcon} />
            </div>
          </div>
        )}
      </div>

      {/* LIST OF CATEGORIES GRID DISPLAY  */}
      <div className={styles.gridContainerCategory}>
        {!categorySelected && !serviceSelected && (
          <>
            {categories.map((item, index) => {
              return (
                <div>
                  <div
                    className={styles.categoryTile}
                    name={item.name}
                    key={`${item.name}${item.id}`}
                    id={item.id}
                    onClick={(e) => {
                      setCategorySelected(item);
                    }}
                  >
                    {item.name}
                    <img
                      className={styles.categoryImg}
                      key={`${item.name}${item.id}`}
                      id={index}
                      src={item.img}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>

      {/* LIST OF SERVICES GRID DISPLAY */}

      {!serviceSelected && (
        <div>
          <div className={styles.gridContainerServices}>
            {services.map((item, index) => {
              return (
                <div>
                  <div
                    className={styles.categoryTile}
                    key={`${item.name}${item.id}`}
                    id={index}
                    onClick={(e) => setServiceSelected(item)}
                  >
                    {item.name}
                    <img
                      className={styles.serviceImg}
                      key={`${item.name}${item.id}`}
                      id={index}
                      src={item.img}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* LIST OF ALL SERVICE SELLERS DISPLAY */}

      {categorySelected && serviceSelected && (
        <div className={styles.serviceSellersMainContainer}>
          <div className={styles.gridContainerServiceSellers}>
            {serviceSellers.map((item, index) => {
              return (
                <div>
                  <div
                    className={styles.serviceSellerTile}
                    key={`${item.name}${item.id}`}
                    id={index}
                  >
                    {item.name}
                    <img
                      className={styles.serviceSellerImg}
                      key={`${item.name}${item.id}`}
                      id={index}
                      src={item.img}
                      alt=""
                    />
                    <div className={styles.serviceSellerDesc}>
                      Description: {item.desc}
                    </div>
                    <div className={styles.serviceSellerPrice}>
                      Price: {item.price} {item.price_type}
                    </div>
                    <div></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
