import React, { useContext, useEffect, useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ApiData } from "./ContextApi";

const Products = ({ allData, cateFilter }) => {
  let { loading } = useContext(ApiData);

  if (loading) {
    return (
      <>
        <div className="w-full h-100  flex justify-center items-center ">
          <div className=" w-16 h-16 border-6 border-primary border-t-transparent  rounded-full animate-spin"></div>
        </div>
      </>
    );
  }
  const productsToShow = cateFilter.length > 0 ? cateFilter : allData;
  return (
    <>
      <div className="flex flex-wrap justify-between pb-[50px] gap-y-[40px]">
        {productsToShow.map((item) => (
          <div key={item.id} className="w-[31%]">
            <div className="relative group">
              <Link to={`/products/${item.id}`}>
                <div className="bg-[#F9F9F9]">
                  <img src={item.thumbnail} alt="" />
                </div>
              </Link>
              <div className="absolute left-0 bottom-0 w-full bg-white scale-0 group-hover:scale-100 duration-300 ease-in-out origin-bottom-left">
                <ul className=" py-[25px] pr-[30px]">
                  <li className="flex items-center justify-end gap-x-[16px] text-secondary text-[16px] font-dmsans font-normal hover:text-primary hover:font-bold cursor-pointer">
                    <span>Add to Wish List</span>
                    <FaHeart className="text-primary " />
                  </li>
                  <li className="flex items-center justify-end gap-x-[16px] py-[20px]  text-secondary text-[16px] font-dmsans font-normal hover:text-primary hover:font-bold cursor-pointer">
                    <span>Compare</span>
                    <IoGitCompare className="text-primary " />
                  </li>
                  <li className="flex items-center justify-end gap-x-[16px]  text-secondary text-[16px] font-dmsans font-normal hover:text-primary hover:font-bold cursor-pointer">
                    <span>Add to Cart</span>
                    <FaShoppingCart className="text-primary " />
                  </li>
                </ul>
              </div>
              <div className="absolute lg:top-[20px] top-[10px] lg:left-[20px] left-[10px] lg:px-[32px] px-[14px] lg:py-[8px] py-[6px] bg-primary lg:text-[14px] text-[10px] text-white lg:font-bold font-semibold font-dmsans">
                {item.discountPercentage}%
              </div>
            </div>
            <div className="">
              <Link to={`/products/${item.id}`}>
                <div className="flex justify-between items-center pt-[24px] pb-[15px]">
                  <h3 className="lg:text-[18px] text-[14px] text-primary font-bold font-dmsans">
                    {item.title}
                  </h3>
                  <p className="lg:text-[16px] text-[12px] text-secondary font-normal font-dmsans">
                    ${item.price}
                  </p>
                </div>
                <div>
                  <p className="lg:text-[16px] text-[12px] text-secondary font-normal font-dmsans capitalize">
                    {item.category}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
