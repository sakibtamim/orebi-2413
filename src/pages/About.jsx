import React from "react";
import Container from "../components/Container";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import OurBranch from "../assets/ourbranch.png";
import OurStore from "../assets/ourstore.png";

const About = () => {
  return (
    <section className="lg:pt-[124px] pt-[40px] lg:pb-[131px] pb-[40px]">
      <Container>
        <div className="lg:pb-[136px] pb-[40px]">
          <h2 className="lg:text-[49px] text-[24px] text-primary font-dmsans font-bold lg:pb-[12px] pb-[6px]">
            About
          </h2>
          <div className="flex items-center lg:gap-x-[8px] gap-x-[4px] lg:text-[12px] text-[10px] text-secondary font-normal font-dmsans">
            <Link to="/">Home</Link>
            <MdOutlineArrowForwardIos />

            <Link to="/about">About</Link>
          </div>
        </div>
        <div>
          <div className="lg:flex justify-between lg:pb-[128px] pb-[40px]">
            <div className="lg:w-[48%] w-full lg:pb-0 pb-[30px]">
              <img src={OurBranch} alt="" />
            </div>
            <div className="lg:w-[48%] w-full">
              <img src={OurStore} alt="" />
            </div>
          </div>
          <div className="lg:text-[39px] text-[18px] text-primary font-dmsans font-normal lg:pb-[118px] pb-[40px]">
            Orebi is one of the world’s leading ecommerce brands and is
            internationally recognized for celebrating the essence of classic
            Worldwide cool looking style.
          </div>
          <div className="flex justify-between flex-wrap lg:gap-0 gap-[14px]">
            <div className="lg:w-[32%] w-[48%]">
              <h3 className="text-primary lg:text-[25px] text-[18px] font-bold font-dmsans lg:pb-[11px] pb-[8px]">
                Our Vision
              </h3>
              <p className="text-secondary lg:text-[16px] text-[12px] font-normal font-dmsans">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an printer took a galley of type
                and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="lg:w-[32%] w-[48%]">
              <h3 className="text-primary lg:text-[25px] text-[18px] font-bold font-dmsans lg:pb-[11px] pb-[8px]">
                Our Story
              </h3>
              <p className="text-secondary lg:text-[16px] text-[12px] font-normal font-dmsans">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic.
              </p>
            </div>
            <div className="lg:w-[32%] w-[48%]">
              <h3 className="text-primary lg:text-[25px] text-[18px] font-bold font-dmsans lg:pb-[11px] pb-[8px]">
                Our Brands
              </h3>
              <p className="text-secondary lg:text-[16px] text-[12px] font-normal font-dmsans">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
