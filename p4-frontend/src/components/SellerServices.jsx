import React, { useEffect, useState, useContext } from "react";
import SellerServiceTable from "./SellerServiceTable";
import UserContext from "../context/user";
import { fetchData } from "../helpers/common";
import Form from "react-bootstrap/Form";
import { Col, FormControl, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import styles from "./SellerServices.module.css";
import { FormSelect } from "react-bootstrap";

const SellerServices = () => {
  const userCtx = useContext(UserContext);
  const [sellerServices, setSellerServices] = useState("");

  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [servicePricingUnit, setServicePricingUnit] = useState("");
  const [services, setServices] = useState("");
  const [serviceSelected, setServiceSelected] = useState("");
  const [categories, setCategories] = useState("");
  const [categorySelected, setCategorySelected] = useState("");

  //   this works
  const getAllServicesFromSeller = async () => {
    console.log("this is where we are");
    const { ok, data } = await fetchData(
      "/api/services/seller",
      userCtx.accessToken,
      "POST",
      {
        seller_id: userCtx.user.id,
      }
    );
    if (ok) {
      console.log("get all services by seller: ", data);
      setSellerServices(data);
    } else {
      console.log("cannot get services by seller: ", data);

      console.log(data);
    }
  };

  const getAllCategories = async () => {
    const { ok, data } = await fetchData(
      "/api/categories",
      userCtx.accessToken,
      "GET"
    );
    if (ok) {
      console.log("get all categories: ", data);
      console.log("accessToken:", userCtx.accessToken);
      setCategories(data);
    } else {
      console.log(data);
    }
  };

  const getAllServicesInCategory = async () => {
    console.log("category selected", categorySelected);
    const { ok, data } = await fetchData(
      "/api/category/services",
      userCtx.accessToken,
      "POST",
      {
        category_id: parseInt(categorySelected),
      }
    );
    if (ok) {
      console.log("get all services: ", data);
      console.log("accessToken:", userCtx.accessToken);
      setServices(data);
    } else {
      console.log(data);
    }
  };

  //  This works
  const addSellerService = async () => {
    const { ok, data } = await fetchData(
      "/api/service/seller",
      userCtx.accessToken,
      "PUT",
      {
        name: serviceName,
        desc: serviceDescription,
        service_id: parseInt(serviceSelected),
        seller_id: userCtx.user.id,
        price: parseInt(servicePrice),
        price_type: servicePricingUnit,
      }
    );

    if (ok) {
      alert("A service has been added to your profile.");
      console.log("a service has been added to the seller :", data);
      getAllServicesFromSeller();
      setServiceName("");
      setServiceDescription("");
      setServiceSelected("");
      setServicePrice("");
      setServicePricingUnit("");
    } else {
      console.log("could not add service to seller:", data);
    }
  };

  //  This works
  const deleteSellerService = async (id) => {
    console.log("Id to delete:", id);
    const { ok, data } = await fetchData(
      "/api/service/seller",
      userCtx.accessToken,
      "DELETE",
      {
        id: id,
      }
    );

    if (ok) {
      alert("A service has been deleted from your profile.");
      console.log(
        "a service has been deleted from the seller's profile :",
        data
      );
      getAllServicesFromSeller();
    } else {
      console.log("could not delete the service from the seller:", data);
    }
  };

  const submitSellerService = (e) => {
    e.preventDefault();
    addSellerService();
    getAllServicesFromSeller();
  };

  useEffect(() => {
    setServiceSelected("");
    setCategorySelected("");
    getAllCategories();
  }, []);

  useEffect(() => {
    setServiceSelected("");
    getAllServicesInCategory();
  }, [categorySelected]);

  return (
    <div>
      <br />
      <button
        onClick={() => {
          getAllServicesFromSeller();
        }}
      >
        Do something
      </button>
      <br />
      {/* {!userCtx.user.isSeller && ( */}
      {true && (
        <>
          {/* {userCtx.authUser && userCtx.user && ( */}
          {true && (
            <div>
              <br />
              <div className="title">My Services: </div>

              {sellerServices && (
                <div>
                  {sellerServices.map((item, index) => {
                    return (
                      <SellerServiceTable
                        item={item}
                        index={index}
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        desc={item.desc}
                        price={item.price}
                        price_type={item.price_type}
                        service_id={item.service_id}
                        deleteSellerService={deleteSellerService}
                        // updateSellerService={updateSellerService}
                      />
                    );
                  })}
                </div>
              )}
              <br />
              <br />
            </div>
          )}

          {userCtx.authUser && userCtx.user && (
            <>
              <div>Add a service</div>
              <br />
              <Form>
                <Row>
                  <Col>
                    {/* // CATEGORY DROPDOWN SELECTION */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className={styles.formTitles}>
                        Category
                      </Form.Label>

                      <FormSelect
                        value={categorySelected}
                        onChange={(e) => {
                          setCategorySelected(e.target.value);
                          console.log("Target Value", e.target.value);
                        }}
                      >
                        <option value="none">please select</option>
                        {categories && (
                          <>
                            {categories.map((item, index) => (
                              <option key={index} value={item.id}>
                                {item.name}
                              </option>
                            ))}
                          </>
                        )}
                      </FormSelect>
                    </Form.Group>
                  </Col>

                  <Col>
                    {/* // SERVICE DROPDOWN SELECTION */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className={styles.formTitles}>
                        Service
                      </Form.Label>

                      <FormSelect
                        value={serviceSelected}
                        onChange={(e) => {
                          setServiceSelected(e.target.value);
                        }}
                      >
                        <option value="none">please select</option>
                        {categorySelected && services && (
                          <>
                            {services.map((item, index) => (
                              <option key={index} value={item.id}>
                                {item.name}
                              </option>
                            ))}
                          </>
                        )}
                      </FormSelect>
                    </Form.Group>
                  </Col>

                  {/* // SERVICE NAME */}
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicUserName">
                      <Form.Label className={styles.formTitles}>
                        Service Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="service name"
                        value={serviceName}
                        onChange={(e) => {
                          setServiceName(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  {/* // DESCRIPTION */}
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicUserName">
                      <Form.Label className={styles.formTitles}>
                        Description
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="service description"
                        value={serviceDescription}
                        onChange={(e) => {
                          setServiceDescription(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Col>

                  {/* // PRICE */}
                  <Col xs={3}>
                    <Form.Group className="mb-3" controlId="formBasicUserName">
                      <Form.Label className={styles.formTitles}>
                        Price
                      </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="service Price"
                        value={servicePrice}
                        onChange={(e) => {
                          setServicePrice(e.target.value);
                        }}
                      />
                    </Form.Group>
                  </Col>

                  {/* // PRICING TYPE */}
                  <Col xs={2}>
                    <Form.Group className="mb-3" controlId="formBasicUserName">
                      <Form.Label className={styles.formTitles}>
                        Pricing Unit
                      </Form.Label>
                      <Form.Select
                        type="text"
                        placeholder="Pricing Unit:"
                        value={servicePricingUnit}
                        onChange={(e) => {
                          setServicePricingUnit(e.target.value);
                        }}
                      >
                        <option default disabled value="0">
                          pricing unit:
                        </option>
                        <option value="per item">per item</option>
                        <option value="per hour">per hour</option>
                        <option value="per day">per day</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={(e) => {
                    submitSellerService(e);
                  }}
                >
                  Add
                </Button>
              </Form>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default SellerServices;
