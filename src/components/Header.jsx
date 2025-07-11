import React, { useState } from "react";
import Container from "./Container";
import Logo from "../assets/logo.png";
import { IoClose, IoMenu } from "react-icons/io5";

const Header = () => {
  let [show, setShow] = useState(false);

  return (
    <header
      className={`lg:py-[32px] pt-2 ${show ? "lg:mb-0 mb-1" : "lg:mb-0 mb-6"}`}
    >
      <Container>
        <div className="lg:flex  items-center">
          <div className="w-1/3">
            <div>
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className="lg:w-2/3 w-full">
            <ul
              className={`lg:flex lg:justify-end text-end lg:gap-x-[40px] lg:mt-0 mt-2  duration-300 ease-in-out ${
                show == true ? "bg-primary " : " mt-[-200px]"
              }`}
            >
              <li className="lg:border-none border-b-1 border-b-[#2D2D2D]">
                <a
                  className="text-[14px] lg:text-secondary text-[rgba(255,255,255,0.7)] font-normal inline-block lg:hover:text-primary hover:text-[#fff] hover:font-bold duration-200 ease-in-out capitalize lg:p-0 p-2 "
                  href=""
                >
                  Home
                </a>
              </li>
              <li className=" lg:border-none border-b-1 border-b-[#2D2D2D]">
                <a
                  className="text-[14px]  lg:text-secondary text-[rgba(255,255,255,0.7)] font-normal inline-block lg:hover:text-primary hover:text-[#fff] hover:font-bold duration-200 ease-in-out capitalize lg:p-0 p-2"
                  href=""
                >
                  Shop
                </a>
              </li>
              <li className="lg:border-none border-b-1 border-b-[#2D2D2D]">
                <a
                  className="text-[14px]  lg:text-secondary text-[rgba(255,255,255,0.7)] font-normal inline-block lg:hover:text-primary hover:text-[#fff] hover:font-bold duration-200 ease-in-out capitalize lg:p-0 p-2"
                  href=""
                >
                  About
                </a>
              </li>
              <li className="lg:border-none border-b-1 border-b-[#2D2D2D]">
                <a
                  className="text-[14px]  lg:text-secondary text-[rgba(255,255,255,0.7)] font-normal inline-block lg:hover:text-primary hover:text-[#fff] hover:font-bold duration-200 ease-in-out capitalize lg:p-0 p-2"
                  href=""
                >
                  Contacts
                </a>
              </li>
              <li>
                <a
                  className="text-[14px]  lg:text-secondary text-[rgba(255,255,255,0.7)] font-normal inline-block lg:hover:text-primary hover:text-[#fff] hover:font-bold duration-200 ease-in-out capitalize lg:p-0 p-2"
                  href=""
                >
                  Journal
                </a>
              </li>
            </ul>
          </div>
          <div
            className="lg:hidden absolute right-2 top-1"
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
