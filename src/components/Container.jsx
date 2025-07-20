import React from "react";

const Container = ({ children }) => {
  return (
    <div className={`max-w-[1536px]  mx-auto lg:px-0 px-2`}>{children}</div>
  );
};

export default Container;
