import React from "react";

const Temp = () => {
  const getUsers = async () => {
    const { ok, data } = await fetchData("/api/users");

    if (ok) {
      setBooks(data);
    } else {
      console.log(data);
    }
  };

  return <div>just trying</div>;
};

export default Temp;
