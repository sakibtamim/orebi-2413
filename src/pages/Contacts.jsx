import React from "react";
import Container from "../components/Container";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import Map from "../assets/map.png";

const Contacts = () => {
  return (
    <section className="lg:pt-[124px] lg:pb-[140px] pt-[40px] pb-[40px]">
      <Container>
        <div className="lg:pb-[125px] pb-[40px]">
          <h2 className="lg:text-[49px] text-[24px] text-primary font-dmsans font-bold lg:pb-[12px] pb-[6px]">
            Contacts
          </h2>
          <div className="flex items-center lg:gap-x-[8px] gap-x-[4px] lg:text-[12px] text-[10px] text-secondary font-normal font-dmsans">
            <Link to="/">Home</Link>
            <MdOutlineArrowForwardIos />

            <Link to="/contacts">Contacts</Link>
          </div>
        </div>
        <div className="lg:w-1/2 w-full lg:pb-[140px] pb-[40px]">
          <form action="">
            <h3 className="w-full lg:text-[39px] text-[24px] text-primary font-bold font-dmsans lg:pb-[42px] pb-[24px]">
              Fill up a Form
            </h3>
            <label
              className="block lg:text-[16px] text-[14px] text-primary font-dmsans font-bold lg:pb-[10px] pb-[8px]"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full lg:text-[14px] text-[12px] text-secondary font-dmsans font-normal lg:pb-[16px] pb-[14px] lg:mb-[24px] mb-[20px] outline-none border-b-[1px] border-b-[#F0F0F0]"
              placeholder="Your name here"
              type="text"
              id="name"
            />
            <label
              className="block lg:text-[16px] text-[14px] text-primary font-dmsans font-bold lg:pb-[10px] pb-[8px]"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full lg:text-[14px] text-[12px] text-secondary font-dmsans font-normal lg:pb-[16px] pb-[14px] lg:mb-[24px] mb-[20px] outline-none border-b-[1px] border-b-[#F0F0F0]"
              placeholder="Your email here"
              type="email"
              name=""
              id="email"
            />
            <label
              className="block lg:text-[16px] text-[14px] text-primary font-dmsans font-bold lg:pb-[10px] pb-[8px]"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="w-full lg:text-[14px] text-[12px] text-secondary font-dmsans font-normal lg:pb-[86px] pb-[50px] lg:mb-[30px] mb-[24px] outline-none border-b-[1px] border-b-[#F0F0F0]"
              placeholder="Your email here"
              name=""
              id="message"
            ></textarea>
            <button className="lg:px-[85px] px-[40px] lg:py-[16px] py-[10px] lg:text-[14px] text-[12px] text-white font-bold font-dmsans bg-primary">
              Post
            </button>
          </form>
        </div>
        <div>
          <img src={Map} alt="" />
        </div>
      </Container>
    </section>
  );
};

export default Contacts;
