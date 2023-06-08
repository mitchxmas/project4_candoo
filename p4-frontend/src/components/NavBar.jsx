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

  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <div>
              <img width="20" className={styles.flag} src=""></img>
              "LOGO"
            </div>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/"
            >
              Services
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
              to="/cart"
            >
              Cart
            </NavLink>
          </li>

          {!userCtx.accessToken && (
            <Button name="Login" onClick={() => setShowLoginModal(true)}>
              Login
            </Button>
          )}

          {userCtx.accessToken && (
            <Button
              name="Logout"
              onClick={() => {
                userCtx.setAccessToken("");
                userCtx.setUser("");
                userCtx.setAuthUser("");
              }}
            >
              Logout
            </Button>
          )}

          <Button name="Register" onClick={() => setShowRegisterModal(true)}>
            Register
          </Button>
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
