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

  const [sellerServiceSelected, setSellerServiceSelected] = useState("");

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
        "we have retrieved all services & sellers for that category, getAllServicesIncludingSellers",
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

  const addCartItem = async (item) => {
    let cartItem = {
      quantity: 1,
      price: Number(item.price),
      seller_service_id: item.id,
      order_id: parseInt(userCtx.userCart.id),
    };
    console.log("addCartItem topics");
    console.log("userCtx.userCart.id:", userCtx.userCart.id);

    console.log("add cart item to cart:", cartItem);
    const { ok, data } = await fetchData(
      "/api/cart/item",
      userCtx.accessToken,
      "PUT",
      cartItem
    );
    if (ok) {
      alert("An item has been added to your cart.");
      console.log("we added the item to the cart", data);
    } else {
      console.log("we could not add item to the cart", data);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  useEffect(() => {
    if (categorySelected) {
      getAllServicesInCategory();
      getAllServicesIncludingSellers();
    }
  }, [categorySelected]);

  useEffect(() => {
    if (serviceSelected) {
      getAllServicesIncludingSellers();
    }
  }, [serviceSelected]);

  console.log(serviceSellers);

  return (
    <div className={styles.mainContainer}>
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
      {!serviceSelected && categorySelected && (
        <div>
          <div className={styles.gridContainerServices}>
            {services.map((item, index) => {
              return (
                <div>
                  <div
                    className={styles.serviceTile}
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
      {categorySelected && (
        <div className={styles.serviceSellersMainContainer}>
          <div className={styles.gridContainerServiceSellers}>
            {serviceSellers.map((item, index) => {
              return (
                <>
                  {item.seller_services.map((item2, index2) => {
                    if (
                      !serviceSelected ||
                      item2.service_id === serviceSelected.id
                    ) {
                      return (
                        <div>
                          <div className={styles.addToCart}>
                            {" "}
                            <img
                              className={styles.cartImg}
                              src={"./images/buyIcon.png"}
                              alt=""
                              width="40px"
                              id={item2.id}
                              onClick={(e) => addCartItem(item2)}
                            />
                          </div>
                          <div className={styles.serviceSellerTile}>
                            <div className={styles.serviceName}>
                              {item.name}
                            </div>
                            <div className={styles.sellerServiceName}>
                              {item2.name}
                            </div>
                            <div className={styles.serviceSellerPrice}>
                              Price: {item2.price} {item2.price_type}
                            </div>
                            <div>
                              <img
                                className={styles.serviceSellerImg}
                                src={item2.img}
                                alt=""
                              />
                            </div>

                            <div className={styles.serviceSellerDesc}>
                              {item2.desc}
                            </div>

                            <div></div>
                          </div>
                        </div>
                      );
                    }
                  })}
                </>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
