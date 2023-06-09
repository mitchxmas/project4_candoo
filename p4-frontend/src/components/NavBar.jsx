import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { Button } from "react-bootstrap";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import UserContext from "../context/user";

const NavBar = () => {
  const userCtx = useContext(UserContext);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  useEffect(() => {
    userCtx.countCartItems;
  }, []);

  useEffect(() => {
    userCtx.countCartItems;
  }, [userCtx.authUser]);

  useEffect(() => {
    userCtx.countCartItems;
  }, [userCtx.user]);

  return (
    <header className={styles.navbar}>
      <div>
        <img
          className={styles.logoHomePage}
          height="70px"
          src="./images/Candoo_logo.png"
        ></img>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/"
            >
              <img
                width="25"
                className={styles.homePage}
                src="./images/houseWhite.png"
              ></img>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/myprofile"
            >
              My Profile
            </NavLink>
          </li>

          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/mycart"
            >
              <img
                width="30"
                className={styles.homePage}
                src="./images/cart_icon.png"
              ></img>
              {userCtx.countCartItems > 0 && (
                <div className={styles.countCartItems}>
                  {userCtx.countCartItems}
                </div>
              )}
            </NavLink>
          </li>

          {userCtx.role == "admin" && (
            <li>
              <NavLink
                className={(navData) => (navData.isActive ? styles.active : "")}
                to="/admin"
              >
                Admin
              </NavLink>
            </li>
          )}

          <div>
            {!userCtx.accessToken && (
              <Button
                variant="primary"
                size="sm"
                className={styles.button}
                name="Login"
                onClick={() => setShowLoginModal(true)}
              >
                Login
              </Button>
            )}
            {userCtx.accessToken && (
              <Button
                variant="outline-primary"
                size="sm"
                className={styles.button}
                name="Logout"
                onClick={() => {
                  userCtx.setAccessToken("");
                  userCtx.setUser("");
                  userCtx.setAuthUser("");
                  userCtx.setUserCart("");
                  userCtx.setCountCartItems("")
                }}
              >
                Logout
              </Button>
            )}
            {!userCtx.accessToken && (
              <Button
                size="sm"
                variant="primary"
                className={styles.button}
                name="Register"
                onClick={() => setShowRegisterModal(true)}
              >
                Register
              </Button>
            )}
          </div>
        </ul>
      </nav>
      {showLoginModal && <LoginModal setShowLoginModal={setShowLoginModal} />}
      {showRegisterModal && (
        <RegisterModal setShowRegisterModal={setShowRegisterModal} />
      )}
    </header>
  );
};

export default NavBar;
