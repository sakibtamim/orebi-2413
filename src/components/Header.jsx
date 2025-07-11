import React, { useState } from "react";
import Container from "./Container";
import Logo from "../assets/logo.png";
import { IoClose, IoMenu } from "react-icons/io5";

const Header = () => {
  let [show, setShow] = useState(false);

  return (
    <header
      className={`2xl:py-[32px] pt-2 ${
        show ? "2xl:mb-0 mb-1" : "2xl:mb-0 mb-6"
      }`}
    >
      <Container>
        <div className="2xl:flex  items-center">
          <div className="w-1/3">
            <div>
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className="2xl:w-2/3 w-full">
            <ul
              className={`2xl:flex 2xl:justify-end text-end 2xl:gap-x-[40px] 2xl:mt-0 mt-2  duration-300 ease-in-out ${
                show == true ? "bg-primary " : " mt-[-200px]"
              }`}
            >
              <li className="2xl:border-none border-b-1 border-b-[#2D2D2D]">
                <a
                  className="text-[14px] 2xl:text-secondary text-[rgba(255,255,255,0.7)] font-normal inline-block 2xl:hover:text-primary hover:text-[#fff] hover:font-bold duration-200 ease-in-out capitalize 2xl:p-0 p-2 "
                  href=""
                >
                  Home
                </a>
              </li>
              <li className=" 2xl:border-none border-b-1 border-b-[#2D2D2D]">
                <a
                  className="text-[14px]  2xl:text-secondary text-[rgba(255,255,255,0.7)] font-normal inline-block 2xl:hover:text-primary hover:text-[#fff] hover:font-bold duration-200 ease-in-out capitalize 2xl:p-0 p-2"
                  href=""
                >
                  Shop
                </a>
              </li>
              <li className="2xl:border-none border-b-1 border-b-[#2D2D2D]">
                <a
                  className="text-[14px]  2xl:text-secondary text-[rgba(255,255,255,0.7)] font-normal inline-block 2xl:hover:text-primary hover:text-[#fff] hover:font-bold duration-200 ease-in-out capitalize 2xl:p-0 p-2"
                  href=""
                >
                  About
                </a>
              </li>
              <li className="2xl:border-none border-b-1 border-b-[#2D2D2D]">
                <a
                  className="text-[14px]  2xl:text-secondary text-[rgba(255,255,255,0.7)] font-normal inline-block 2xl:hover:text-primary hover:text-[#fff] hover:font-bold duration-200 ease-in-out capitalize 2xl:p-0 p-2"
                  href=""
                >
                  Contacts
                </a>
              </li>
              <li>
                <a
                  className="text-[14px]  2xl:text-secondary text-[rgba(255,255,255,0.7)] font-normal inline-block 2xl:hover:text-primary hover:text-[#fff] hover:font-bold duration-200 ease-in-out capitalize 2xl:p-0 p-2"
                  href=""
                >
                  Journal
                </a>
              </li>
            </ul>
          </div>
          <div
            className="2xl:hidden absolute right-2 top-1"
            onClick={() => setShow(!show)}
          >
            {show ? (
              <IoClose className="text-[26px] text-primary" />
            ) : (
              <IoMenu className="text-[26px] text-primary" />
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
