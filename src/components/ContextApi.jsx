import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

let ApiData = createContext();
const ContextApi = ({ children }) => {
  let [data, setData] = useState([]);
  let getData = () => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setData(response.data.products);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <ApiData.Provider value={data}>{children}</ApiData.Provider>
    </>
  );
};

export { ContextApi, ApiData };
