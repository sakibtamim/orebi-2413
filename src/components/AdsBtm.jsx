import React from "react";
import Container from "./Container";
import BottomAds from "../assets/btm_ads.png";

const AdsBtm = () => {
  return (
    <section className="lg:pb-[128px] pb-[40px]">
      <Container>
        <div>
          <img src={BottomAds} alt="" />
        </div>
      </Container>
    </section>
  );
};

export default AdsBtm;
