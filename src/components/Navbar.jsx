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
        <div className="flex flex-wrap items-center lg:gap-0 gap-y-5">
          <div className="lg:w-1/4 w-full relative">
            <div
              className="flex items-center gap-x-[10px] cursor-pointer w-[150px] "
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
              <div className=" w-[250px] absolute top-[28px] left-0  ">
                <ul className="bg-primary">
                  <li className="relative border-b-1 border-b-[#2D2D2D] pl-[20px] py-[16px]  hover:text-white hover:font-bold hover:pl-[30px] duration-300 ease-in-out group">
                    <a
                      className="text-[14px] text-[rgba(255,255,255,0.7)] font-dmsans font-normal  "
                      href=""
                    >
                      <div className="flex justify-between items-center">
                        <span>Accesories</span>
                        <div className="pr-[20px]">
                          <MdKeyboardArrowRight />
                        </div>
                      </div>
                      <ul className="absolute top-0 left-[100%] bg-primary w-[150px] scale-0 group-hover:scale-100">
                        <li className="border-b-1 border-b-[#2D2D2D] pl-[20px] py-[16px]  hover:text-white">
                          <a href="">Accesories 1</a>
                        </li>
                        <li className="border-b-1 border-b-[#2D2D2D] pl-[20px] py-[16px]  hover:text-white">
                          <a href="">Accesories 2</a>
                        </li>
                        <li className="border-b-1 border-b-[#2D2D2D] pl-[20px] py-[16px]  hover:text-white">
                          <a href="">Accesories 3</a>
                        </li>
                        <li className=" pl-[20px] py-[16px]  hover:text-white">
                          <a href="">Accesories 4</a>
                        </li>
                      </ul>
                    </a>
                  </li>
                  <li className="relative border-b-1 border-b-[#2D2D2D] pl-[20px] py-[16px]  hover:text-white hover:font-bold hover:pl-[30px] duration-300 ease-in-out group">
                    <a
                      href=""
                      className="text-[14px] text-[rgba(255,255,255,0.7)] font-dmsans font-normal "
                    >
                      <div className="flex justify-between items-center">
                        <span>Furniture</span>
                        <div className="pr-[20px]">
                          <MdKeyboardArrowRight />
                        </div>
                      </div>
                      <ul className="absolute top-0 left-[100%] bg-primary w-[150px] scale-0 group-hover:scale-100">
                        <li className="border-b-1 border-b-[#2D2D2D] pl-[20px] py-[16px]  hover:text-white">
                          <a href="">Furniture 1</a>
                        </li>
                        <li className="border-b-1 border-b-[#2D2D2D] pl-[20px] py-[16px]  hover:text-white">
                          <a href="">Furniture 2</a>
                        </li>
                        <li className="border-b-1 border-b-[#2D2D2D] pl-[20px] py-[16px]  hover:text-white">
                          <a href="">Furniture 3</a>
                        </li>
                        <li className=" pl-[20px] py-[16px]  hover:text-white">
                          <a href="">Furniture 4</a>
                        </li>
                      </ul>
                    </a>
                  </li>
                  <li className="relative group border-b-1 border-b-[#2D2D2D] pl-[20px] py-[16px]  hover:text-white hover:font-bold hover:pl-[30px] duration-300 ease-in-out">
                    <a
                      href=""
                      className="text-[14px] text-[rgba(255,255,255,0.7)] font-dmsans font-normal "
                    >
                      <div className="flex justify-between items-center">
                        <span>Electronics</span>
                        <div className="pr-[20px]">
                          <MdKeyboardArrowRight />
                        </div>
                      </div>
                      <ul className="absolute top-0 left-[100%] bg-primary w-[150px] scale-0 group-hover:scale-100">
                        <li className="border-b-1 border-b-[#2D2D2D] pl-[20px] py-[16px]  hover:text-white">
                          <a href="">Electronics 1</a>
                        </li>
                        <li className="border-b-1 border-b-[#2D2D2D] pl-[20px] py-[16px]  hover:text-white">
                          <a href="">Electronics 2</a>
                        </li>
                        <li className="border-b-1 border-b-[#2D2D2D] pl-[20px] py-[16px]  hover:text-white">
                          <a href="">Electronics 3</a>
                        </li>
                        <li className=" pl-[20px] py-[16px]  hover:text-white">
                          <a href="">Electronics 4</a>
                        </li>
                      </ul>
                    </a>
                  </li>
                  <li className="relative group border-b-1 border-b-[#2D2D2D] pl-[20px] py-[16px]  hover:text-white hover:font-bold hover:pl-[30px] duration-300 ease-in-out">
                    <a
                      href=""
                      className="text-[14px] text-[rgba(255,255,255,0.7)] font-dmsans font-normal "
                    >
                      <div className="flex justify-between items-center">
                        <span>Clothes</span>
                        <div className="pr-[20px]">
                          <MdKeyboardArrowRight />
                        </div>
                      </div>
                      <ul className="absolute top-0 left-[100%] bg-primary w-[150px] scale-0 group-hover:scale-100">
                        <li className="border-b-1 border-b-[#2D2D2D] pl-[20px] py-[16px]  hover:text-white">
                          <a href="">Clothes 1</a>
                        </li>
                        <li className="border-b-1 border-b-[#2D2D2D] pl-[20px] py-[16px]  hover:text-white">
                          <a href="">Clothes 2</a>
                        </li>
                        <li className="border-b-1 border-b-[#2D2D2D] pl-[20px] py-[16px]  hover:text-white">
                          <a href="">Clothes 3</a>
                        </li>
                        <li className=" pl-[20px] py-[16px]  hover:text-white">
                          <a href="">Clothes 4</a>
                        </li>
                      </ul>
                    </a>
                  </li>
                  <li className="relative group pl-[20px] py-[16px]  hover:text-white hover:font-bold hover:pl-[30px] duration-300 ease-in-out">
                    <a
                      href=""
                      className="text-[14px] text-[rgba(255,255,255,0.7)] font-dmsans font-normal "
                    >
                      <div className="flex justify-between items-center">
                        <span>Bags</span>
                        <div className="pr-[20px]">
                          <MdKeyboardArrowRight />
                        </div>
                      </div>
                      <ul className="absolute top-0 left-[100%] bg-primary w-[150px] scale-0 group-hover:scale-100">
                        <li className="border-b-1 border-b-[#2D2D2D] pl-[20px] py-[16px]  hover:text-white">
                          <a href="">Bags 1</a>
                        </li>
                        <li className="border-b-1 border-b-[#2D2D2D] pl-[20px] py-[16px]  hover:text-white">
                          <a href="">Bags 2</a>
                        </li>
                        <li className="border-b-1 border-b-[#2D2D2D] pl-[20px] py-[16px]  hover:text-white">
                          <a href="">Bags 3</a>
                        </li>
                        <li className=" pl-[20px] py-[16px]  hover:text-white">
                          <a href="">Bags 4</a>
                        </li>
                      </ul>
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
                ref={accRef}
              >
                <FaUser className="text-[18px] text-primary" />
                <IoMdArrowDropdown className="text-primary text-[20px]" />
                {accountShow && (
                  <div className="w-[200px] absolute top-[28px] right-0  transition-all duration-300 ease-in-out origin-top-right">
                    <ul className="bg-white">
                      <li className="group text-center hover:bg-[#2b2b2b]">
                        <a
                          href=""
                          className="text-[14px] text-primary inline-block font-normal py-[16px]  group-hover:text-white group-hover:font-bold"
                        >
                          My AccountShow
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
                )}
              </div>
              <div className="relative" ref={cartRef}>
                <FaShoppingCart className="text-[18px] text-primary cursor-pointer" />
                {cartShow && (
                  <div className="absolute top-[28px] right-0 top- w-[360px] bg-white border-[#F0F0F0] border-[1px]">
                    <div className=" py-[20px] bg-[#F5F5F3] flex justify-around items-center">
                      <div className="">
                        <img src={CartImg} alt="" />
                      </div>
                      <div className="font-bold font-dmsans text-[14px] text-primary">
                        <h4 className="pb-[12px]">Black Smart Watch</h4>
                        <h5>$44.00</h5>
                      </div>
                      <div>
                        <RxCross2 />
                      </div>
                    </div>
                    <div className="p-[20px]">
                      <h3 className="text-[16px] text-primary font-bold font-dmsans pb-[14px]">
                        <span className=" text-secondary font-normal">
                          Subtotal:{" "}
                        </span>
                        $44.00
                      </h3>
                      <ul className="flex justify-between">
                        <li className="">
                          <a
                            href=""
                            className=" inline-block text-[14px] text-primary font-bold font-dmsans py-[16px] px-[40px] border-[1px] border-border hover:bg-primary hover:text-white duration-300 ease-in-out"
                          >
                            View Cart
                          </a>
                        </li>
                        <li className="">
                          <a
                            href=""
                            className=" inline-block text-[14px] text-primary font-bold font-dmsans py-[16px] px-[40px] border-[1px] border-border hover:bg-primary hover:text-white duration-300 ease-in-out"
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
