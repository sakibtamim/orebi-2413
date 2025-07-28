import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

let ApiData = createContext();
const ContextApi = ({ children }) => {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);
  let getData = () => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setData(response.data.products);
      setLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <ApiData.Provider value={{ data, loading }}>{children}</ApiData.Provider>
    </>
  );
};

export { ContextApi, ApiData };
