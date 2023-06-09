import React, { useState } from "react";
import UserContext from "./context/user";
import Header from "./components/Header";

function App() {
  const [accessToken, setAccessToken] = useState("");
  const [role, setRole] = useState("");
  const [authUser, setAuthUser] = useState("");
  const [user, setUser] = useState("");
  const [userCart, setUserCart] = useState("");
  const [countCartItems, setCountCartItems] = useState("");

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
          user,
          setUser,
          userCart,
          setUserCart,
          countCartItems,
          setCountCartItems,
        }}
      >
        <Header />
      </UserContext.Provider>
    </>
  );
}

export default App;
