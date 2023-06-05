import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Services from "./Services";
import HomePage from "./HomePage";
import Cart from "./Cart";
import Profile from "./Profile";

const Header = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/MyProfile" element={<Profile />} />
        <Route path="/Cart" element={<Cart></Cart>} />
      </Routes>
      <SearchBar />
    </div>
  );
};

export default Header;
