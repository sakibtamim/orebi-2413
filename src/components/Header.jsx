import React, { useState } from "react";
import Container from "./Container";
import Logo from "../assets/logo.png";
import { IoClose, IoMenu } from "react-icons/io5";

const Header = () => {
  let [show, setShow] = useState(false);

  return (
    <header className={`2xl:py-[32px] pt-2 ${show ? "mb-0" : "2xl:mb-0 mb-5"}`}>
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
                show == true ? "bg-navbg " : " mt-[-200px]"
              }`}
            >
              <li>
                <a
                  className="text-[14px] text-secondary font-normal inline-block hover:text-primary hover:font-bold duration-200 ease-in-out capitalize 2xl:p-0 p-2"
                  href=""
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-[14px] text-secondary font-normal inline-block hover:text-primary hover:font-bold duration-200 ease-in-out capitalize 2xl:p-0 p-2"
                  href=""
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  className="text-[14px] text-secondary font-normal inline-block hover:text-primary hover:font-bold duration-200 ease-in-out capitalize 2xl:p-0 p-2"
                  href=""
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-[14px] text-secondary font-normal inline-block hover:text-primary hover:font-bold duration-200 ease-in-out capitalize 2xl:p-0 p-2"
                  href=""
                >
                  Contacts
                </a>
              </li>
              <li>
                <a
                  className="text-[14px] text-secondary font-normal inline-block hover:text-primary hover:font-bold duration-200 ease-in-out capitalize 2xl:p-0 p-2"
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
