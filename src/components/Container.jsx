import React from "react";

const Container = ({ children }) => {
  return (
    <div className={`max-w-[1536px]  mx-auto 2xl:px-0 px-2`}>{children}</div>
  );
};

export default Container;
