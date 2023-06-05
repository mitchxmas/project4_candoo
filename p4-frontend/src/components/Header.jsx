import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";
import Services from "./Services";
import HomePage from "./HomePage";
import Book from "./Book";
import Profile from "./Profile";

const Header = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/MyProfile" element={<Profile />} />
        <Route path="/dailyweather" element={<Book></Book>} />
      </Routes>
      <SearchBar />
    </div>
  );
};

export default Header;
