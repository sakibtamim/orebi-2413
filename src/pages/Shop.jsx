import React, { useState } from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { BsPlus } from "react-icons/bs";
import { IoIosClose, IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { HiSquares2X2 } from "react-icons/hi2";
import { FaHeart, FaShoppingCart, FaThList } from "react-icons/fa";
import Headphone from "../assets/Headphone.png";
import { IoGitCompare } from "react-icons/io5";
import Products from "../components/Products";

const Shop = () => {
  let [cateShow, setCateShow] = useState(false);
  let [subCateShow1, setSubCateShow1] = useState(false);
  let [subCateShow2, setSubCateShow2] = useState(false);
  let [subCateShow3, setSubCateShow3] = useState(false);
  let [subCateShow4, setSubCateShow4] = useState(false);
  let [subCateShow5, setSubCateShow5] = useState(false);
  let [colorShow, setColorShow] = useState(false);
  let [brandShow, setBrandShow] = useState(false);
  let [priceShow, setPriceShow] = useState(false);
  return (
    <section>
      <Container>
        <div className="pb-[130px]">
          <h2 className="text-[49px] text-primary font-dmsans font-bold pb-[12px]">
            Products
          </h2>
          <div className="flex items-center gap-x-[8px] text-[12px] text-secondary font-normal font-dmsans">
            <Link to="/">Home</Link>
            <MdOutlineArrowForwardIos />

            <Link to="/products">Products</Link>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[25%]">
            <div className="pb-[53px]">
              <h5
                className="text-[20px] text-primary font-bold font-dmsans pb-[35px] flex items-center justify-between"
                onClick={() => {
                  setCateShow(!cateShow);
                }}
              >
                <span>Shop by Category</span>
                {cateShow ? (
                  <span>
                    <IoMdArrowDropdown className="text-[20px]" />
                  </span>
                ) : (
                  <span>
                    <IoMdArrowDropup className="text-[20px]" />
                  </span>
                )}
              </h5>
              {cateShow && (
                <ul>
                  <li
                    onClick={() => {
                      setSubCateShow1(!subCateShow1);
                    }}
                    className="text-[16px] text-secondary font-normal font-dmsans pb-[20px] border-b-[1px] border-b-[#F0F0F0] "
                  >
                    <div className="flex justify-between items-center">
                      <span>Category 1 </span>
                      {subCateShow1 ? (
                        <div>
                          <IoIosClose className="text-[24px]" />
                        </div>
                      ) : (
                        <div>
                          <BsPlus className="text-[20px]" />
                        </div>
                      )}
                    </div>
                    {subCateShow1 && (
                      <ul className="pl-[20px]">
                        <li className="text-[16px] text-secondary font-normal font-dmsans py-[20px] border-b-[1px] border-b-[#F0F0F0]">
                          Sub Category 1
                        </li>
                        <li className="text-[16px] text-secondary font-normal font-dmsans py-[20px] border-b-[1px] border-b-[#F0F0F0]">
                          Sub Category 2
                        </li>
                        <li className="text-[16px] text-secondary font-normal font-dmsans py-[20px] border-b-[1px] border-b-[#F0F0F0]">
                          Sub Category 3
                        </li>
                        <li className="text-[16px] text-secondary font-normal font-dmsans pt-[20px] ">
                          Sub Category 4
                        </li>
                      </ul>
                    )}
                  </li>
                  <li
                    onClick={() => {
                      setSubCateShow2(!subCateShow2);
                    }}
                    className="text-[16px] text-secondary font-normal font-dmsans py-[20px] border-b-[1px] border-b-[#F0F0F0] "
                  >
                    <div className="flex justify-between items-center">
                      <span>Category 2 </span>
                      {subCateShow2 ? (
                        <div>
                          <IoIosClose className="text-[24px]" />
                        </div>
                      ) : (
                        <div>
                          <BsPlus className="text-[20px]" />
                        </div>
                      )}
                    </div>
                    {subCateShow2 && (
                      <ul className="pl-[20px]">
                        <li className="text-[16px] text-secondary font-normal font-dmsans py-[20px] border-b-[1px] border-b-[#F0F0F0]">
                          Sub Category 1
                        </li>
                        <li className="text-[16px] text-secondary font-normal font-dmsans py-[20px] border-b-[1px] border-b-[#F0F0F0]">
                          Sub Category 2
                        </li>
                        <li className="text-[16px] text-secondary font-normal font-dmsans py-[20px] border-b-[1px] border-b-[#F0F0F0]">
                          Sub Category 3
                        </li>
                        <li className="text-[16px] text-secondary font-normal font-dmsans pt-[20px] ">
                          Sub Category 4
                        </li>
                      </ul>
                    )}
                  </li>
                  <li
                    onClick={() => {
                      setSubCateShow3(!subCateShow3);
                    }}
                    className="text-[16px] text-secondary font-normal font-dmsans py-[20px] border-b-[1px] border-b-[#F0F0F0] "
                  >
                    <div className="flex justify-between items-center">
                      <span>Category 3 </span>
                      {subCateShow3 ? (
                        <div>
                          <IoIosClose className="text-[24px]" />
                        </div>
                      ) : (
                        <div>
                          <BsPlus className="text-[20px]" />
                        </div>
                      )}
                    </div>
                    {subCateShow3 && (
                      <ul className="pl-[20px]">
                        <li className="text-[16px] text-secondary font-normal font-dmsans py-[20px] border-b-[1px] border-b-[#F0F0F0]">
                          Sub Category 1
                        </li>
                        <li className="text-[16px] text-secondary font-normal font-dmsans py-[20px] border-b-[1px] border-b-[#F0F0F0]">
                          Sub Category 2
                        </li>
                        <li className="text-[16px] text-secondary font-normal font-dmsans py-[20px] border-b-[1px] border-b-[#F0F0F0]">
                          Sub Category 3
                        </li>
                        <li className="text-[16px] text-secondary font-normal font-dmsans pt-[20px] ">
                          Sub Category 4
                        </li>
                      </ul>
                    )}
                  </li>
                  <li
                    onClick={() => {
                      setSubCateShow4(!subCateShow4);
                    }}
                    className="text-[16px] text-secondary font-normal font-dmsans py-[20px] border-b-[1px] border-b-[#F0F0F0] "
                  >
                    <div className="flex justify-between items-center">
                      <span>Category 4 </span>
                      {subCateShow4 ? (
                        <div>
                          <IoIosClose className="text-[24px]" />
                        </div>
                      ) : (
                        <div>
                          <BsPlus className="text-[20px]" />
                        </div>
                      )}
                    </div>
                    {subCateShow4 && (
                      <ul className="pl-[20px]">
                        <li className="text-[16px] text-secondary font-normal font-dmsans py-[20px] border-b-[1px] border-b-[#F0F0F0]">
                          Sub Category 1
                        </li>
                        <li className="text-[16px] text-secondary font-normal font-dmsans py-[20px] border-b-[1px] border-b-[#F0F0F0]">
                          Sub Category 2
                        </li>
                        <li className="text-[16px] text-secondary font-normal font-dmsans py-[20px] border-b-[1px] border-b-[#F0F0F0]">
                          Sub Category 3
                        </li>
                        <li className="text-[16px] text-secondary font-normal font-dmsans pt-[20px] ">
                          Sub Category 4
                        </li>
                      </ul>
                    )}
                  </li>
                  <li
                    onClick={() => {
                      setSubCateShow5(!subCateShow5);
                    }}
                    className="text-[16px] text-secondary font-normal font-dmsans py-[20px] border-b-[1px] border-b-[#F0F0F0] "
                  >
                    <div className="flex justify-between items-center">
                      <span>Category 5 </span>
                      {subCateShow5 ? (
                        <div>
                          <IoIosClose className="text-[24px]" />
                        </div>
                      ) : (
                        <div>
                          <BsPlus className="text-[20px]" />
                        </div>
                      )}
                    </div>
                    {subCateShow5 && (
                      <ul className="pl-[20px]">
                        <li className="text-[16px] text-secondary font-normal font-dmsans py-[20px] border-b-[1px] border-b-[#F0F0F0]">
                          Sub Category 1
                        </li>
                        <li className="text-[16px] text-secondary font-normal font-dmsans py-[20px] border-b-[1px] border-b-[#F0F0F0]">
                          Sub Category 2
                        </li>
                        <li className="text-[16px] text-secondary font-normal font-dmsans py-[20px] border-b-[1px] border-b-[#F0F0F0]">
                          Sub Category 3
                        </li>
                        <li className="text-[16px] text-secondary font-normal font-dmsans pt-[20px] ">
                          Sub Category 4
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </div>
            <div className="pb-[53px]">
              <h5
                className="text-[20px] text-primary font-bold font-dmsans pb-[35px] flex justify-between items-center"
                onClick={() => {
                  setColorShow(!colorShow);
                }}
              >
                <span>Shop by Color</span>
                {colorShow ? (
                  <span>
                    <IoMdArrowDropdown className="text-[20px]" />
                  </span>
                ) : (
                  <span>
                    <IoMdArrowDropup className="text-[20px]" />
                  </span>
                )}
              </h5>
              {colorShow && (
                <ul>
                  <li className="flex items-center gap-x-[10px] text-[16px] text-secondary font-dmsans font-normal pb-[20px] border-b-[#F0F0F0] border-b-[1px]">
                    <div className="h-[11px] w-[11px] rounded-full bg-[#000]"></div>
                    <span>Color 1</span>
                  </li>
                  <li className="flex items-center gap-x-[10px] text-[16px] text-secondary font-dmsans font-normal py-[20px] border-b-[#F0F0F0] border-b-[1px]">
                    <div className="h-[11px] w-[11px] rounded-full bg-[#FF8686]"></div>
                    <span>Color 2</span>
                  </li>
                  <li className="flex items-center gap-x-[10px] text-[16px] text-secondary font-dmsans font-normal py-[20px] border-b-[#F0F0F0] border-b-[1px]">
                    <div className="h-[11px] w-[11px] rounded-full bg-[#7ED321]"></div>
                    <span>Color 3</span>
                  </li>
                  <li className="flex items-center gap-x-[10px] text-[16px] text-secondary font-dmsans font-normal py-[20px] border-b-[#F0F0F0] border-b-[1px]">
                    <div className="h-[11px] w-[11px] rounded-full bg-[#B6B6B6]"></div>
                    <span>Color 4</span>
                  </li>
                  <li className="flex items-center gap-x-[10px] text-[16px] text-secondary font-dmsans font-normal py-[20px] border-b-[#F0F0F0] border-b-[1px]">
                    <div className="h-[11px] w-[11px] rounded-full bg-[#15CBA5]"></div>
                    <span>Color 5</span>
                  </li>
                </ul>
              )}
            </div>
            <div className="pb-[53px]">
              <h5
                className="text-[20px] text-primary font-bold font-dmsans pb-[35px] flex justify-between items-center"
                onClick={() => {
                  setBrandShow(!brandShow);
                }}
              >
                <span>Shop by Brand</span>
                {brandShow ? (
                  <span>
                    <IoMdArrowDropdown className="text-[20px]" />
                  </span>
                ) : (
                  <span>
                    <IoMdArrowDropup className="text-[20px]" />
                  </span>
                )}
              </h5>
              {brandShow && (
                <ul>
                  <li className=" text-[16px] text-secondary font-dmsans font-normal pb-[20px] border-b-[#F0F0F0] border-b-[1px]">
                    Brand 1
                  </li>
                  <li className=" text-[16px] text-secondary font-dmsans font-normal py-[20px] border-b-[#F0F0F0] border-b-[1px]">
                    Brand 2
                  </li>
                  <li className=" text-[16px] text-secondary font-dmsans font-normal py-[20px] border-b-[#F0F0F0] border-b-[1px]">
                    Brand 3
                  </li>
                  <li className=" text-[16px] text-secondary font-dmsans font-normal py-[20px] border-b-[#F0F0F0] border-b-[1px]">
                    Brand 4
                  </li>
                  <li className=" text-[16px] text-secondary font-dmsans font-normal py-[20px] border-b-[#F0F0F0] border-b-[1px]">
                    Brand 5
                  </li>
                </ul>
              )}
            </div>
            <div className="pb-[53px]">
              <h5
                className="text-[20px] text-primary font-bold font-dmsans pb-[35px] flex justify-between items-center"
                onClick={() => {
                  setPriceShow(!priceShow);
                }}
              >
                <span>Shop by Price</span>
                {priceShow ? (
                  <span>
                    <IoMdArrowDropdown className="text-[20px]" />
                  </span>
                ) : (
                  <span>
                    <IoMdArrowDropup className="text-[20px]" />
                  </span>
                )}
              </h5>
              {priceShow && (
                <ul>
                  <li className=" text-[16px] text-secondary font-dmsans font-normal pb-[20px] border-b-[#F0F0F0] border-b-[1px]">
                    $0.00 - $9.99
                  </li>
                  <li className=" text-[16px] text-secondary font-dmsans font-normal py-[20px] border-b-[#F0F0F0] border-b-[1px]">
                    $10.00 - $19.99
                  </li>
                  <li className=" text-[16px] text-secondary font-dmsans font-normal py-[20px] border-b-[#F0F0F0] border-b-[1px]">
                    $20.00 - $29.99
                  </li>
                  <li className=" text-[16px] text-secondary font-dmsans font-normal py-[20px] border-b-[#F0F0F0] border-b-[1px]">
                    $30.00 - $39.99
                  </li>
                  <li className=" text-[16px] text-secondary font-dmsans font-normal py-[20px] border-b-[#F0F0F0] border-b-[1px]">
                    $40.00 - $69.99
                  </li>
                </ul>
              )}
            </div>
          </div>
          <div className="w-[72%]">
            <div className="flex justify-between pb-[60px]">
              <div className="1/2 flex gap-x-[20px]">
                <div className="relative w-[36px] h-[36px] border-[1px] border-[#F0F0F0] hover:bg-primary group">
                  <HiSquares2X2 className="text-[24px] text-[#737373] absolute top-[50%] left-[50%] transform-[translate(-50%,-50%)] group-hover:text-white" />
                </div>
                <div className="relative w-[36px] h-[36px] border-[1px] border-[#F0F0F0] hover:bg-primary group">
                  <FaThList className="text-[18px] text-[#737373] absolute top-[50%] left-[50%] transform-[translate(-50%,-50%)] group-hover:text-white" />
                </div>
              </div>
              <div className="1/2 flex gap-x-[40px]">
                <div>
                  <label className="text-[16px] text-secondary font-dmsans font-normal pr-[14px]">
                    Sort by:
                  </label>

                  <select className="h-[36px] w-[239px] border-[#F0F0F0] border-[1px] text-[16px] text-secondary font-dmsans font-normal outline-none">
                    <option>Default</option>
                    <option>Name(A &gt; Z)</option>
                    <option>Name(Z &gt; A)</option>
                    <option>Price(Low &gt; High)</option>
                    <option>Price(High &gt; Low)</option>
                  </select>
                </div>
                <div>
                  <label className="text-[16px] text-secondary font-dmsans font-normal pr-[14px]">
                    Show:
                  </label>
                  <select className="h-[36px] w-[139px] border-[#F0F0F0] border-[1px] text-[16px] text-secondary font-dmsans font-normal outline-none">
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                    <option>40</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between pb-[50px] gap-y-[40px]">
              <Products />
            </div>
            <div>
              <div className="pb-[140px]">
                <div classclassName="flex items-center justify-between bg-white">
                  <div className="flex flex-1 justify-between sm:hidden">
                    <a
                      href="#"
                      className="relative inline-flex items-center rounded-md border border-[#F0F0F0] bg-white px-4 py-2 text-sm font-medium text-secondary hover:bg-primary"
                    >
                      Previous
                    </a>
                    <a
                      href="#"
                      className="relative ml-3 inline-flex items-center rounded-md border border-[#F0F0F0] bg-white px-4 py-2 text-sm font-medium text-secondary hover:bg-primary"
                    >
                      Next
                    </a>
                  </div>
                  <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                      <nav
                        aria-label="Pagination"
                        className="isolate inline-flex gap-x-[15px] -space-x-px rounded-md shadow-xs"
                      >
                        <a
                          href="#"
                          className="relative inline-flex items-center rounded-l-md px-2 py-2 text-secondary ring-1 ring-[#F0F0F0] ring-inset hover:bg-primary hover:text-white "
                        >
                          <span className="sr-only">Previous</span>
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            data-slot="icon"
                            aria-hidden="true"
                            className="size-5"
                          >
                            <path
                              d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                            />
                          </svg>
                        </a>
                        {/* Current: "z-10 bg-indigo-600 text-white ", Default: "text-primary hover:text-white ring-1 ring-inset ring-[#F0F0F0]  focus:outline-offset-0"  */}
                        <a
                          href="#"
                          aria-current="page"
                          className="relative text-secondary  z-10 inline-flex items-center bg-transparent hover:text-[white] hover:bg-primary px-4 py-2 text-sm font-semibold  focus:z-20  ring-1 ring-[#F0F0F0] ring-inset"
                        >
                          1
                        </a>
                        <a
                          href="#"
                          className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-secondary hover:text-white hover:bg-primary ring-1 ring-[#F0F0F0] ring-inset  "
                        >
                          2
                        </a>
                        <a
                          href="#"
                          className="relative hidden items-center px-4 py-2 text-sm font-semibold text-secondary hover:text-[white] hover:bg-primary ring-1 ring-[#F0F0F0] ring-inset   md:inline-flex"
                        >
                          3
                        </a>
                        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-[#F0F0F0] ring-inset focus:outline-offset-0">
                          ...
                        </span>
                        <a
                          href="#"
                          className="relative hidden items-center px-4 py-2 text-sm font-semibold text-secondary hover:text-[white] hover:bg-primary ring-1 ring-[#F0F0F0] ring-inset   md:inline-flex"
                        >
                          8
                        </a>
                        <a
                          href="#"
                          className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-secondary hover:text-[white] hover:bg-primary ring-1 ring-[#F0F0F0] ring-inset  "
                        >
                          9
                        </a>
                        <a
                          href="#"
                          className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-secondary hover:text-[white] hover:bg-primary ring-1 ring-[#F0F0F0] ring-inset  "
                        >
                          10
                        </a>
                        <a
                          href="#"
                          className="relative inline-flex items-center rounded-r-md px-2 py-2 text-secondary ring-1 ring-[#F0F0F0] ring-inset  hover:text-[white] hover:bg-primary"
                        >
                          <span className="sr-only">Next</span>
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            data-slot="icon"
                            aria-hidden="true"
                            className="size-5"
                          >
                            <path
                              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </nav>
                    </div>
                    <div>
                      <p class="text-sm text-gray-700">
                        Products from <span className="font-medium">1</span> to{" "}
                        <span className="font-medium">12</span> of{" "}
                        <span className="font-medium">80</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Shop;
