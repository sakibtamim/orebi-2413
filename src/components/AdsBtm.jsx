import React from "react";
import Container from "./Container";
import BottomAds from "../assets/btm_ads.png";

const AdsBtm = () => {
  return (
    <section className="pb-[128px]">
      <Container>
        <div>
          <img src={BottomAds} alt="" />
        </div>
      </Container>
    </section>
  );
};

export default AdsBtm;
