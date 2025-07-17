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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section {...settings}>
        <Slider>
          <div>
            <img src={BanImg} className="w-full" alt="" />
          </div>
          <div>
            <img src={BanImg} className="w-full" alt="" />
          </div>
          <div>
            <img src={BanImg} className="w-full" alt="" />
          </div>
          <div>
            <img src={BanImg} className="w-full" alt="" />
          </div>
        </Slider>
      </section>
      <section className="py-[22px]">
        <Container>
          <div className="flex ">
            <div className="w-1/3 flex items-center">
              <div>
                <PiNumberTwoBold className="text-[20px]" />
              </div>
              <p>Two years warranty</p>
            </div>
            <div className="w-1/3 flex items-center justify-center">
              <div>
                <FaTruck />
              </div>
              <p>Free shipping</p>
            </div>
            <div className="w-1/3 flex items-center justify-end">
              <div>
                <FaArrowRotateLeft />
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
