import React, { useState } from "react";
import Login from "./components/Login";
import UserContext from "./context/user";
import Services from "./components/Services";
import BooksDisplay from "./components/BooksDisplay";
import Header from "./components/Header";
import HomePage from "./components/HomePage";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [role, setRole] = useState("user");
  const [authUser, setAuthUser] = useState("");

  return (
    <>
      <UserContext.Provider
        value={{
          accessToken,
          setAccessToken,
          role,
          setRole,
          authUser,
          setAuthUser,
        }}
      >
        <Header />
        {/* <BooksDisplay /> */}
      </UserContext.Provider>
    </>
  );
}

export default App;
