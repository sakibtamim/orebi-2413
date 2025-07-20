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
    autoplay: true,
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
      // className="absolute top-1/2 left-[10%] -translate-y-1/2 flex flex-col gap-2 z-10"
      // style={{
      //   borderRadius: "10px",
      //   padding: "10px",
      //   position: "absolute",
      //   top: "50%",
      //   left: "10%",
      //   transform: "translateY(-50%)",
      // }}
      >
        <ul
          // className="list-none m-0 p-0"
          style={{ margin: "0px" }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className="lg:w-[20px] w-[16px] text-transparent lg:py-[10px] py-[4px] border-r-[2px] border-r-[white] text-[10px] font-dmsans"
        // style={{
        //   width: "20px",
        //   color: "transparent",
        //   padding: "10px 0",
        //   borderRight: "2px white solid",
        //   fontFamily: "'DM Sans', sans-serif",
        //   fontSize: "10px",
        // }}
      >
        0{i + 1}
      </div>
    ),
  };
  return (
    <>
      <section id="banner" className="border-b-[1px] border-b-[#F0F0F0]">
        <div className="lg:px-0 px-2">
          <Slider {...settings}>
            <div>
              <img src={BanImg} className="w-full " alt="" />
            </div>
            <div>
              <img src={BanImg} className="w-full " alt="" />
            </div>
            <div>
              <img src={BanImg} className="w-full " alt="" />
            </div>
            <div>
              <img src={BanImg} className="w-full " alt="" />
            </div>
          </Slider>
        </div>
        <Container>
          <div className="flex lg:py-[22px] py-[16px]">
            <div className="w-1/3 flex items-center lg:gap-x-[10px] gap-x-[4px]">
              <div>
                <PiNumberTwoBold className="lg:text-[20px] text-[12px] text-primary" />
              </div>
              <p className="lg:text-[16px] text-[8px] text-fadetxt font-normal font-dmsans">
                Two years warranty
              </p>
            </div>
            <div className="w-1/3 flex items-center justify-center lg:gap-x-[15px] gap-x-[8px]">
              <div>
                <FaTruck className="lg:text-[20px] text-[12px] text-primary" />
              </div>
              <p className="lg:text-[16px] text-[8px] text-fadetxt font-normal font-dmsans">
                Free shipping
              </p>
            </div>
            <div className="w-1/3 flex items-center justify-end lg:gap-x-[15px] gap-x-[8px]">
              <div>
                <FaArrowRotateLeft className="lg:text-[20px] text-[12px] text-primary" />
              </div>
              <p className="lg:text-[16px] text-[8px] text-fadetxt font-normal font-dmsans">
                Return policy in 30 days
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Banner;
