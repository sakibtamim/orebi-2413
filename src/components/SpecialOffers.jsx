import React, { useContext, useEffect, useState } from "react";
import Container from "./Container";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { ApiData } from "./ContextApi";

const SpecialOffers = () => {
  let { data, loading } = useContext(ApiData);

  let [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setShowLoading(true);
    }
  }, [loading]);

  const selectedIndexes = [4, 8, 12, 16];

  return (
    <section className="lg:pb-[106px] pb-[40px]">
      <Container>
        <div className="lg:pb-[48px] pb-[24px]">
          <h2 className="lg:text-[39px] text-[20px] text-primary font-bold font-dmsans">
            Special Offers
          </h2>
        </div>
        {showLoading ? (
          <div className="w-full h-50  flex justify-center items-center ">
            <div className=" w-16 h-16 border-6 border-primary border-t-transparent  rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="flex justify-between flex-wrap">
            {selectedIndexes.map((index) => {
              const item = data[index];
              if (!item) return null;
              return (
                <div key={item.id} className="lg:w-[24%] w-[48%]">
                  <div className="relative group">
                    <div className="bg-[#F9F9F9]">
                      <img src={item.thumbnail} alt="" />
                    </div>
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
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </section>
  );
};

export default SpecialOffers;
