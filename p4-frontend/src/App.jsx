import React, { useState } from "react";
import BooksDisplay from "./components/BooksDisplay";
import Registration from "./components/Registration";
import Login from "./components/Login";
import UserContext from "./context/user";
import Temp from "./components/Temp";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [role, setRole] = useState("");
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <UserContext.Provider
        value={{ accessToken, setAccessToken, role, setRole }}
      >
        <Temp />

        <BooksDisplay />

        {accessToken.length > 0 && <BooksDisplay />}

        {accessToken.length === 0 && showLogin && (
          <Login setShowLogin={setShowLogin} />
        )}
        {accessToken.length === 0 && !showLogin && (
          <Registration setShowLogin={setShowLogin} />
        )}
      </UserContext.Provider>
    </>
  );
}

export default App;
