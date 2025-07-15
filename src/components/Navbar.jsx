import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  let [cateShow, setcateShow] = useState(false);
  let [account, setAccount] = useState(false);

  let cateRef = useRef();
  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (cateRef.current.contains(e.target) == true) {
        setcateShow(!cateShow);
      } else {
        setcateShow(false);
      }
    });
  }, [cateShow]);

  return (
    <nav className="bg-navbg lg:py-[25px] py-3">
      <Container>
        <div className="flex flex-wrap items-center lg:gap-0 gap-y-5">
          <div className="lg:w-1/4 w-full relative">
            <div
              className="flex items-center gap-x-[10px] cursor-pointer w-[150px] "
              ref={cateRef}
            >
              <div>
                <HiBars3BottomLeft className="text-[18px]" />
              </div>
              <h6 className="text-[14px] text-primary font-dmsans font-normal capitalize">
                Shop by Category
              </h6>
            </div>
            {cateShow && (
              <div className=" w-[250px] absolute top-[28px] left-0 z-50 ">
                <ul className="bg-primary">
                  <li className=" border-b-1 border-b-[#2D2D2D]">
                    <a
                      className="text-[14px] text-[rgba(255,255,255,0.7)] font-dmsans font-normal px-[20px] py-[16px] inline-block hover:text-white hover:font-bold hover:pl-[30px] duration-300 ease-in-out"
                      href=""
                    >
                      Accesories
                    </a>
                  </li>
                  <li className=" border-b-1 border-b-[#2D2D2D]">
                    <a
                      href=""
                      className="text-[14px] text-[rgba(255,255,255,0.7)] font-dmsans font-normal px-[20px] py-[16px] inline-block hover:text-white hover:font-bold hover:pl-[30px] duration-300 ease-in-out"
                    >
                      Furniture
                    </a>
                  </li>
                  <li className=" border-b-1 border-b-[#2D2D2D]">
                    <a
                      href=""
                      className="text-[14px] text-[rgba(255,255,255,0.7)] font-dmsans font-normal px-[20px] py-[16px] inline-block hover:text-white hover:font-bold hover:pl-[30px] duration-300 ease-in-out"
                    >
                      Electronics
                    </a>
                  </li>
                  <li className=" border-b-1 border-b-[#2D2D2D]">
                    <a
                      href=""
                      className="text-[14px] text-[rgba(255,255,255,0.7)] font-dmsans font-normal px-[20px] py-[16px] inline-block hover:text-white hover:font-bold hover:pl-[30px] duration-300 ease-in-out"
                    >
                      Clothes
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="text-[14px] text-[rgba(255,255,255,0.7)] font-dmsans font-normal px-[20px] py-[16px] inline-block hover:text-white hover:font-bold hover:pl-[30px] duration-300 ease-in-out"
                    >
                      Bags
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="lg:w-2/4 w-1/2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Products"
                className="w-full bg-white py-[16px] px-[20px] text-input text-[14px] font-normal font-dmsans capitalize border-none outline-none rounded-sm"
              />
              <div className="absolute top-[50%] right-[20px] translate-y-[-50%]">
                <FaSearch className="text-[18px] text-primary" />
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 w-1/2">
            <div className="flex justify-end gap-x-[40px]">
              <div
                className="flex items-center gap-x-[10px] cursor-pointer relative "
                onClick={() => setAccount(!account)}
              >
                <FaUser className="text-[18px] text-primary" />
                <IoMdArrowDropdown className="text-primary text-[20px]" />
                <div
                  className={`w-[200px] absolute top-[28px] right-[0px] z-50 transition-all duration-300 ease-in-out origin-top-right ${
                    account == true
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-0 pointer-events-none"
                  }`}
                >
                  <ul className="bg-white">
                    <li className="group text-center hover:bg-[#2b2b2b]">
                      <a
                        href=""
                        className="text-[14px] text-primary inline-block font-normal py-[16px]  group-hover:text-white group-hover:font-bold"
                      >
                        My Account
                      </a>
                    </li>
                    <li className="group text-center hover:bg-[#2b2b2b]">
                      <a
                        href=""
                        className="text-[14px] text-primary inline-block font-normal py-[16px] group-hover:text-white group-hover:font-bold"
                      >
                        Log Out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <FaShoppingCart className="text-[18px] text-primary cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
