import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Ads from "../components/Ads";
import NewArrivals from "../components/NewArrivals";
import BestSellers from "../components/BestSellers";
import AdsBtm from "../components/AdsBtm";
import SpecialOffers from "../components/SpecialOffers.Jsx";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <Ads />
      <NewArrivals />
      <BestSellers />
      <AdsBtm />
      <SpecialOffers />
      <Footer />
    </>
  );
};

export default Home;
