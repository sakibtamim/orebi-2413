import React, { useContext, useEffect, useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ApiData } from "./ContextApi";
import { useDispatch } from "react-redux";
import { cartTotal } from "../slice/cartSlice";
import { toast } from "react-toastify";

const Products = ({ allData, cateFilter, activeList, showAll, setShowAll }) => {
  let dispatch = useDispatch();
  let { loading } = useContext(ApiData);
  let [cateMain, letCateMain] = useState([]);

  useEffect(() => {
    let cateAll = cateFilter.slice(0, 6);
    letCateMain(cateAll);
  }, [cateFilter]);

  let hancleShowAll = () => {
    letCateMain(cateFilter);
    setShowAll(false);
  };

  let hancleShowLess = () => {
    letCateMain(cateFilter.slice(0, 6));
    setShowAll(true);
  };

  let handleCart = (item) => {
    dispatch(cartTotal(item));
    toast.success("Add to cart Successfull", {
      position: "top-center",
    });
  };

  if (loading) {
    return (
      <>
        <div className="w-full h-100  flex justify-center items-center ">
          <div className=" w-16 h-16 border-6 border-primary border-t-transparent  rounded-full animate-spin"></div>
        </div>
      </>
    );
  }

  let productsToShow = cateFilter.length > 0 ? cateMain : allData;

  return (
    <>
      <div
        className={`
          ${
            activeList === "active"
              ? "w-[100%] pb-[50px]"
              : "flex flex-wrap  pb-[50px] gap-[38px]"
          } `}
      >
        {productsToShow.map((item) => (
          <div
            key={item.id}
            className={`${
              activeList === "active"
                ? "flex justify-between items-center pb-[30px]"
                : "w-[31%]"
            }`}
          >
            <div
              className={`${
                activeList === "active"
                  ? "w-[1/3] relative group"
                  : "relative group"
              }`}
            >
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
                  <li
                    className="flex items-center justify-end gap-x-[16px]  text-secondary text-[16px] font-dmsans font-normal hover:text-primary hover:font-bold cursor-pointer"
                    onClick={() => handleCart(item)}
                  >
                    <span>Add to Cart</span>
                    <FaShoppingCart className="text-primary " />
                  </li>
                </ul>
              </div>
              <div className="absolute lg:top-[20px] top-[10px] lg:left-[20px] left-[10px] lg:px-[32px] px-[14px] lg:py-[8px] py-[6px] bg-primary lg:text-[14px] text-[10px] text-white lg:font-bold font-semibold font-dmsans">
                {item.discountPercentage}%
              </div>
            </div>
            <div className={`${activeList === "active" ? "w-[2/3] " : ""}`}>
              <Link to={`/products/${item.id}`}>
                <div
                  className={`${
                    activeList === "active"
                      ? "text-end"
                      : "flex justify-between items-center pt-[24px] pb-[15px]"
                  }`}
                >
                  <h3 className="lg:text-[18px] text-[14px] text-primary font-bold font-dmsans">
                    {item.title}
                  </h3>
                  <p className="lg:text-[16px] text-[12px] text-secondary font-normal font-dmsans">
                    ${item.price}
                  </p>
                </div>
                <div className={`${activeList === "active" ? "text-end" : ""}`}>
                  <p className="lg:text-[16px] text-[12px] text-secondary font-normal font-dmsans capitalize">
                    {item.category}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {showAll
        ? cateFilter.length > 6 && (
            <div className="pb-[16px]" onClick={hancleShowAll}>
              <h5 className="text-[16px] text-white font-dmsans font-bold capitalize py-2 px-4 bg-primary inline-block rounded hover:bg-primary/80 cursor-pointer">
                show all
              </h5>
            </div>
          )
        : cateFilter.length > 6 && (
            <div className="pb-[16px]" onClick={hancleShowLess}>
              <h5 className="text-[16px] text-white font-dmsans font-bold capitalize py-2 px-4 bg-primary inline-block rounded hover:bg-primary/80 cursor-pointer">
                show less
              </h5>
            </div>
          )}
    </>
  );
};

export default Products;
