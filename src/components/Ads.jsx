import React from "react";
import Container from "./Container";
import AdsImg01 from "../assets/ads01.png";
import AdsImg02 from "../assets/ads02.png";
import AdsImg03 from "../assets/ads03.png";

const Ads = () => {
  return (
    <section className="pt-[174px] pb-[128px]">
      <Container>
        <div className="flex justify-between">
          <div className="w-[49%]">
            <img src={AdsImg01} alt="" />
          </div>
          <div className="w-[49%] flex flex-col justify-between">
            <div>
              <img src={AdsImg02} alt="" />
            </div>
            <div>
              <img src={AdsImg03} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Ads;
