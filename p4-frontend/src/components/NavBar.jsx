import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { Button } from "react-bootstrap";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

const NavBar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  useEffect(() => {}, []);

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

          <button
            // className="col-sm-1"
            name="login"
            onClick={() => setShowLoginModal(true)}
          >
            Login
          </button>
          <button
            // className="col-sm-1"
            name="register"
            onClick={() => setShowRegisterModal(true)}
          >
            Register
          </button>
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
