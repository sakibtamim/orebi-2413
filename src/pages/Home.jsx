import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Ads from "../components/Ads";
import NewArrivals from "../components/NewArrivals";
import BestSellers from "../components/BestSellers";
import AdsBtm from "../components/AdsBtm";
import SpecialOffers from "../components/SpecialOffers";

const Home = () => {
  return (
    <>
      <Banner />
      <Ads />
      <NewArrivals />
      <BestSellers />
      <AdsBtm />
      <SpecialOffers />
    </>
  );
};

export default Home;
