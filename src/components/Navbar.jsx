import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import CartImg from "../assets/cartimg.png";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  let [cateShow, setCateShow] = useState(false);
  let [accountShow, setAccountShow] = useState(false);
  let [cartShow, setCartShow] = useState(false);

  let cateRef = useRef();
  let accRef = useRef();
  let cartRef = useRef();

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (cateRef.current.contains(e.target) == true) {
        setCateShow(!cateShow);
      } else {
        setCateShow(false);
      }
      if (accRef.current.contains(e.target) == true) {
        setAccountShow(!accountShow);
      } else {
        setAccountShow(false);
      }
      if (cartRef.current.contains(e.target) == true) {
        setCartShow(!cartShow);
      } else {
        setCartShow(false);
      }
    });
  }, [cateShow, accountShow, cartShow]);

  return (
    <nav className="bg-navbg lg:py-[25px] py-3">
      <Container>
        <div className="flex  items-center lg:gap-0 gap-y-5">
          <div className="lg:w-1/4 w-1/6 relative">
            <div
              className="flex items-center gap-x-[10px] cursor-pointer lg:w-[150px] w-[18px] "
              ref={cateRef}
            >
              <div>
                <HiBars3BottomLeft className="text-[18px]" />
              </div>
              <h6 className="text-[14px] text-primary font-dmsans font-normal capitalize hidden lg:block">
                Shop by Category
              </h6>
            </div>
            {cateShow && (
              <div className=" lg:w-[250px] w-[160px] absolute lg:top-[60px] top-[47px] left-0 z-50 ">
                <ul className="bg-primary">
                  <li className="relative border-b-1 border-b-[#2D2D2D] lg:pl-[20px] pl-[16px] lg:py-[16px] py-[12px] hover:text-white hover:font-bold lg:hover:pl-[30px] hover:pl-[24px] duration-300 ease-in-out group">
                    <a
                      className="lg:text-[14px] text-[12px] text-[rgba(255,255,255,0.7)] font-dmsans font-normal  "
                      href=""
                    >
                      <div className="flex justify-between items-center">
                        <span>Accesories</span>
                        <div className="pr-[20px]">
                          <MdKeyboardArrowRight />
                        </div>
                      </div>
                      <ul className="absolute top-0 left-[100%] bg-primary lg:w-[150px] w-[120px] scale-0 group-hover:scale-100">
                        <li className="border-b-1 border-b-[#2D2D2D] lg:pl-[20px] pl-[16px] lg:py-[16px] py-[12px]  hover:text-white">
                          <a href="">Accesories 1</a>
                        </li>
                        <li className="border-b-1 border-b-[#2D2D2D] lg:pl-[20px] pl-[16px] lg:py-[16px] py-[12px]  hover:text-white">
                          <a href="">Accesories 2</a>
                        </li>
                        <li className="border-b-1 border-b-[#2D2D2D] lg:pl-[20px] pl-[16px] lg:py-[16px] py-[12px]  hover:text-white">
                          <a href="">Accesories 3</a>
                        </li>
                        <li className=" lg:pl-[20px] pl-[16px] lg:py-[16px] py-[12px]  hover:text-white">
                          <a href="">Accesories 4</a>
                        </li>
                      </ul>
                    </a>
                  </li>
                  <li className="relative border-b-1 border-b-[#2D2D2D] lg:pl-[20px] pl-[16px] lg:py-[16px] py-[12px]  hover:text-white hover:font-bold lg:hover:pl-[30px] hover:pl-[24px] duration-300 ease-in-out group">
                    <a
                      href=""
                      className="lg:text-[14px] text-[12px] text-[rgba(255,255,255,0.7)] font-dmsans font-normal "
                    >
                      <div className="flex justify-between items-center">
                        <span>Furniture</span>
                        <div className="pr-[20px]">
                          <MdKeyboardArrowRight />
                        </div>
                      </div>
                      <ul className="absolute top-0 left-[100%] bg-primary lg:w-[150px] w-[120px] scale-0 group-hover:scale-100">
                        <li className="border-b-1 border-b-[#2D2D2D] lg:pl-[20px] pl-[16px] lg:py-[16px] py-[12px]  hover:text-white">
                          <a href="">Furniture 1</a>
                        </li>
                        <li className="border-b-1 border-b-[#2D2D2D] lg:pl-[20px] pl-[16px] lg:py-[16px] py-[12px]  hover:text-white">
                          <a href="">Furniture 2</a>
                        </li>
                        <li className="border-b-1 border-b-[#2D2D2D] lg:pl-[20px] pl-[16px] lg:py-[16px] py-[12px]  hover:text-white">
                          <a href="">Furniture 3</a>
                        </li>
                        <li className=" lg:pl-[20px] pl-[16px] lg:py-[16px] py-[12px]  hover:text-white">
                          <a href="">Furniture 4</a>
                        </li>
                      </ul>
                    </a>
                  </li>
                  <li className="relative group border-b-1 border-b-[#2D2D2D] lg:pl-[20px] pl-[16px] lg:py-[16px] py-[12px]  hover:text-white hover:font-bold lg:hover:pl-[30px] hover:pl-[24px] duration-300 ease-in-out">
                    <a
                      href=""
                      className="lg:text-[14px] text-[12px] text-[rgba(255,255,255,0.7)] font-dmsans font-normal "
                    >
                      <div className="flex justify-between items-center">
                        <span>Electronics</span>
                        <div className="pr-[20px]">
                          <MdKeyboardArrowRight />
                        </div>
                      </div>
                      <ul className="absolute top-0 left-[100%] bg-primary lg:w-[150px] w-[120px] scale-0 group-hover:scale-100">
                        <li className="border-b-1 border-b-[#2D2D2D] lg:pl-[20px] pl-[16px] lg:py-[16px] py-[12px]  hover:text-white">
                          <a href="">Electronics 1</a>
                        </li>
                        <li className="border-b-1 border-b-[#2D2D2D] lg:pl-[20px] pl-[16px] lg:py-[16px] py-[12px]  hover:text-white">
                          <a href="">Electronics 2</a>
                        </li>
                        <li className="border-b-1 border-b-[#2D2D2D] lg:pl-[20px] pl-[16px] lg:py-[16px] py-[12px]  hover:text-white">
                          <a href="">Electronics 3</a>
                        </li>
                        <li className=" lg:pl-[20px] pl-[16px] lg:py-[16px] py-[12px]  hover:text-white">
                          <a href="">Electronics 4</a>
                        </li>
                      </ul>
                    </a>
                  </li>
                  <li className="relative group border-b-1 border-b-[#2D2D2D] lg:pl-[20px] pl-[16px] lg:py-[16px] py-[12px]  hover:text-white hover:font-bold lg:hover:pl-[30px] hover:pl-[24px] duration-300 ease-in-out">
                    <a
                      href=""
                      className="lg:text-[14px] text-[12px] text-[rgba(255,255,255,0.7)] font-dmsans font-normal "
                    >
                      <div className="flex justify-between items-center">
                        <span>Clothes</span>
                        <div className="pr-[20px]">
                          <MdKeyboardArrowRight />
                        </div>
                      </div>
                      <ul className="absolute top-0 left-[100%] bg-primary lg:w-[150px] w-[120px] scale-0 group-hover:scale-100">
                        <li className="border-b-1 border-b-[#2D2D2D] lg:pl-[20px] pl-[16px] lg:py-[16px] py-[12px]  hover:text-white">
                          <a href="">Clothes 1</a>
                        </li>
                        <li className="border-b-1 border-b-[#2D2D2D] lg:pl-[20px] pl-[16px] lg:py-[16px] py-[12px]  hover:text-white">
                          <a href="">Clothes 2</a>
                        </li>
                        <li className="border-b-1 border-b-[#2D2D2D] lg:pl-[20px] pl-[16px] lg:py-[16px] py-[12px]  hover:text-white">
                          <a href="">Clothes 3</a>
                        </li>
                        <li className=" lg:pl-[20px] pl-[16px] lg:py-[16px] py-[12px]  hover:text-white">
                          <a href="">Clothes 4</a>
                        </li>
                      </ul>
                    </a>
                  </li>
                  <li className="relative group lg:pl-[20px] pl-[16px] lg:py-[16px] py-[12px]  hover:text-white hover:font-bold lg:hover:pl-[30px] hover:pl-[24px] duration-300 ease-in-out">
                    <a
                      href=""
                      className="lg:text-[14px] text-[12px] text-[rgba(255,255,255,0.7)] font-dmsans font-normal "
                    >
                      <div className="flex justify-between items-center">
                        <span>Bags</span>
                        <div className="pr-[20px]">
                          <MdKeyboardArrowRight />
                        </div>
                      </div>
                      <ul className="absolute top-0 left-[100%] bg-primary lg:w-[150px] w-[120px] scale-0 group-hover:scale-100">
                        <li className="border-b-1 border-b-[#2D2D2D] lg:pl-[20px] pl-[16px] lg:py-[16px] py-[12px]  hover:text-white">
                          <a href="">Bags 1</a>
                        </li>
                        <li className="border-b-1 border-b-[#2D2D2D] lg:pl-[20px] pl-[16px] lg:py-[16px] py-[12px]  hover:text-white">
                          <a href="">Bags 2</a>
                        </li>
                        <li className="border-b-1 border-b-[#2D2D2D] lg:pl-[20px] pl-[16px] lg:py-[16px] py-[12px]  hover:text-white">
                          <a href="">Bags 3</a>
                        </li>
                        <li className=" lg:pl-[20px] pl-[16px] lg:py-[16px] py-[12px]  hover:text-white">
                          <a href="">Bags 4</a>
                        </li>
                      </ul>
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="lg:w-2/4 w-3/6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Products"
                className="w-full bg-white py-[16px] px-[20px] text-input text-[14px] font-normal font-dmsans capitalize border-none outline-none rounded-sm"
              />
              <div className="absolute top-[50%] right-[20px] translate-y-[-50%]">
                <FaSearch className="lg:text-[18px] text-[14px] text-primary" />
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 w-2/6">
            <div className="flex justify-end lg:gap-x-[40px] gap-x-[10px]">
              <div
                className="flex items-center lg:gap-x-[10px] gap-x-[2px] cursor-pointer relative "
                ref={accRef}
              >
                <FaUser className="lg:text-[18px] text-[16px] text-primary" />
                <IoMdArrowDropdown className="text-primary lg:text-[20px] text-[16px] " />
                {accountShow && (
                  <div className="lg:w-[200px] w-[150px] absolute lg:top-[60px] top-[47px] right-0  transition-all duration-300 ease-in-out origin-top-right z-50">
                    <ul className="bg-white">
                      <li className="group text-center hover:bg-[#2b2b2b]">
                        <a
                          href=""
                          className="lg:text-[14px] text-[12px] text-primary inline-block font-normal lg:py-[16px] py-[12px]  group-hover:text-white group-hover:font-bold"
                        >
                          My Account
                        </a>
                      </li>
                      <li className="group text-center hover:bg-[#2b2b2b]">
                        <a
                          href=""
                          className="lg:text-[14px] text-[12px] text-primary inline-block font-normal lg:py-[16px] py-[12px] group-hover:text-white group-hover:font-bold"
                        >
                          Log Out
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="relative" ref={cartRef}>
                <FaShoppingCart className="lg:text-[18px] text-[16px] text-primary cursor-pointer" />
                {cartShow && (
                  <div className="absolute lg:top-[60px] right-0 top-[47px] lg:w-[360px] w-[240px] bg-white border-[#F0F0F0] border-[1px] z-50">
                    <div className=" lg:py-[20px] py-[10px] lg:px-0 px-[10px] bg-[#F5F5F3] flex lg:justify-around justify-between items-center">
                      <div className="">
                        <img
                          src={CartImg}
                          className="lg:w-full w-[70%] "
                          alt=""
                        />
                      </div>
                      <div className="font-bold font-dmsans lg:text-[14px] text-[12px] text-primary lg:ml-0 ml-[-16px]">
                        <h4 className="lg:pb-[12px] pb-[2px]">
                          Black Smart Watch
                        </h4>
                        <h5>$44.00</h5>
                      </div>
                      <div>
                        <RxCross2 className="lg:text-[16px] text-[14px]" />
                      </div>
                    </div>
                    <div className="lg:p-[20px] p-[10px]">
                      <h3 className="lg:text-[16px] text-[14px] text-primary font-bold font-dmsans lg:pb-[14px] pb-[8px] ">
                        <span className=" text-secondary font-normal">
                          Subtotal:{" "}
                        </span>
                        $44.00
                      </h3>
                      <ul className="flex justify-between">
                        <li className="">
                          <a
                            href=""
                            className=" inline-block lg:text-[14px] text-[12px] text-primary font-bold font-dmsans lg:py-[16px] py-[12px] lg:px-[40px] px-[20px] border-[1px] border-border hover:bg-primary hover:text-white duration-300 ease-in-out"
                          >
                            View Cart
                          </a>
                        </li>
                        <li className="">
                          <a
                            href=""
                            className=" inline-block lg:text-[14px] text-[12px] text-primary font-bold font-dmsans lg:py-[16px] py-[12px] lg:px-[40px] px-[20px] border-[1px] border-border hover:bg-primary hover:text-white duration-300 ease-in-out"
                          >
                            Checkout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
