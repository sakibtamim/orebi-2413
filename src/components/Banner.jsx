import React from "react";
import Container from "./Container";
import BanImg from "../assets/banimg.png";
import { FaTruck } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { PiNumberTwoBold } from "react-icons/pi";
import Slider from "react-slick";

const Banner = () => {
  let settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          top: "50%",
          left: "10%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "20px",
          color: "transparent",
          padding: "10px 0",
          borderRight: "2px white solid",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "10px",
        }}
      >
        0{i + 1}
      </div>
    ),
  };
  return (
    <>
      <section id="banner" className="border-b-[1px] border-b-[#F0F0F0]">
        <Slider {...settings}>
          <div>
            <img src={BanImg} className="w-full h-full" alt="" />
          </div>
          <div>
            <img src={BanImg} className="w-full h-full" alt="" />
          </div>
          <div>
            <img src={BanImg} className="w-full h-full" alt="" />
          </div>
          <div>
            <img src={BanImg} className="w-full h-full" alt="" />
          </div>
        </Slider>
        <Container>
          <div className="flex py-[22px]">
            <div className="w-1/3 flex items-center gap-x-[15px]">
              <div>
                <PiNumberTwoBold className="text-[20px] text-primary" />
              </div>
              <p className="text-[16px] text-fadetxt font-normal font-dmsans">
                Two years warranty
              </p>
            </div>
            <div className="w-1/3 flex items-center justify-center gap-x-[15px]">
              <div>
                <FaTruck className="text-[20px] text-primary" />
              </div>
              <p>Free shipping</p>
            </div>
            <div className="w-1/3 flex items-center justify-end gap-x-[15px]">
              <div>
                <FaArrowRotateLeft className="text-[20px] text-primary" />
              </div>
              <p>Return policy in 30 days</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Banner;
