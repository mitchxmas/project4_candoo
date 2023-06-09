import React, { useEffect, useState, useContext, useRef } from "react";
import UserContext from "../context/user";
import { fetchData } from "../helpers/common";
import Button from "react-bootstrap/Button";
import styles from "./AdminDashBoard.module.css";
import Table from "react-bootstrap/Table";
import AdminUsersTable from "./AdminUsersTable";

const AdminDashboard = () => {
  const userCtx = useContext(UserContext);

  const [allUsers, setAllUsers] = useState("");

  const getAllUsers = async () => {
    const { ok, data } = await fetchData(
      "/api/users",
      userCtx.accessToken,
      "GET"
    );

    if (ok) {
      console.log("GETALLUSERS - All user details:", data);
      setAllUsers(data);
    } else {
      console.log(
        "GETALLUSERS - A pb occurred while retrieving all user's details",
        data
      );
    }
    return;
  };

  useEffect(() => {
    getAllUsers();
  }, [userCtx.authUser]);

  return (
    <div className={styles.mainContainer}>
      <br />
      <div className={styles.adminDashboard}>
        <div className="title">All users</div>

        <div>List of all users & details</div>
        <br />

        <Table striped bordered hover>
          <thead>
            <th>#</th>
            <th>Type</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Mobile</th>
          </thead>
          <tbody>
            {allUsers && (
              <>
                {allUsers.map((item, index) => {
                  console.log("isSeller?: ", item.is_seller);
                  return (
                    <AdminUsersTable
                      item={item}
                      index={index}
                      key={item.id}
                      id={item.id}
                      username={item.username}
                      firstname={item.firstname}
                      lastname={item.lastname}
                      email={item.email}
                      mobile={item.mobile}
                      is_seller={item.is_seller}
                    />
                  );
                })}
              </>
            )}
          </tbody>
        </Table>
        <br />
        <br />
      </div>
    </div>
  );
};

export default AdminDashboard;
