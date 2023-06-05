import React, { useState } from "react";
import Registration from "./components/Registration";
import Login from "./components/Login";
import UserContext from "./context/user";
import Book from "./components/Book";
import Services from "./components/Services";
import BooksDisplay from "./components/BooksDisplay";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [role, setRole] = useState("user");
  const [showLogin, setShowLogin] = useState(true);
  return (
    <>
      <UserContext.Provider
        value={{ accessToken, setAccessToken, role, setRole }}
      >
        <Header />
        {/* <BooksDisplay /> */}
      </UserContext.Provider>
    </>
  );
}

export default App;
