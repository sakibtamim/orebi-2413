import React, { useState } from "react";
import Container from "./Container";
import Logo from "../assets/logo.png";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  let [show, setShow] = useState(false);

  return (
    <header
      className={`lg:py-[32px] pt-2 lg:bg-transparent lg:backdrop-blur-md lg:shadow-md ${
        show ? "lg:mb-0 mb-1 bg-white" : "lg:mb-0 mb-6 "
      } sticky top-0 z-50`}
    >
      <Container>
        <div className="lg:flex  items-center">
          <div className="w-1/3">
            <div>
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="lg:w-2/3 w-full">
            <ul
              className={`lg:flex lg:justify-end text-end lg:gap-x-[40px] lg:mt-0 mt-2  duration-300 ease-in-out ${
                show == true ? "bg-primary " : " mt-[-200px]"
              }`}
            >
              <li className="lg:border-none border-b-1 border-b-[#2D2D2D]">
                <Link
                  className=" text-[14px] lg:text-secondary text-[rgba(255,255,255,0.7)] font-bold inline-block lg:hover:text-primary hover:text-[#fff]  duration-200 ease-in-out capitalize lg:p-0 p-2 "
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className=" lg:border-none border-b-1 border-b-[#2D2D2D]">
                <Link
                  className="text-[14px]  lg:text-secondary text-[rgba(255,255,255,0.7)] font-bold inline-block lg:hover:text-primary hover:text-[#fff]  duration-200 ease-in-out capitalize lg:p-0 p-2"
                  to="/products"
                >
                  Shop
                </Link>
              </li>
              <li className="lg:border-none border-b-1 border-b-[#2D2D2D]">
                <Link
                  className="text-[14px]  lg:text-secondary text-[rgba(255,255,255,0.7)] font-bold inline-block lg:hover:text-primary hover:text-[#fff]  duration-200 ease-in-out capitalize lg:p-0 p-2"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="lg:border-none border-b-1 border-b-[#2D2D2D]">
                <Link
                  className=" text-[14px]  lg:text-secondary text-[rgba(255,255,255,0.7)] font-bold inline-block lg:hover:text-primary hover:text-[#fff]  duration-200 ease-in-out capitalize lg:p-0 p-2"
                  to="/contacts"
                >
                  Contacts
                </Link>
              </li>
              <li>
                <Link
                  className=" text-[14px]  lg:text-secondary text-[rgba(255,255,255,0.7)] font-bold inline-block lg:hover:text-primary hover:text-[#fff]  duration-200 ease-in-out capitalize lg:p-0 p-2"
                  to="/journal"
                >
                  Journal
                </Link>
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
