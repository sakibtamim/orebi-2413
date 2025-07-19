import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Ads from "../components/Ads";
import NewArrivals from "../components/NewArrivals";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Ads />
      <NewArrivals />
    </>
  );
};

export default Home;
