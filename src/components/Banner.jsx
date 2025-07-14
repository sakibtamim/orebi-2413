import React from "react";
import Container from "./Container";
import { FaTruck } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { PiNumberTwoBold } from "react-icons/pi";

const Banner = () => {
  return (
    <>
      <section
        className={`bg-[url(/banner.png)] bg-cover w-full pt-[201px] pb-[148px]`}
      >
        <Container>
          <div>
            <div className="w-1/4">
              <h1 className="text-[49px] text-primary font-bold font-dmsans pb-[33px]">
                Final Offer
              </h1>
              <div className="flex items-center gap-x-[8px] pb-[49px]">
                <span className=" text-[16px] text-fadetxt font-normal font-dmsans">
                  Up to
                </span>
                <span className="text-[40px] font-bold text-primary font-dmsans">
                  50%
                </span>
                <span className=" text-[16px] text-fadetxt font-normal font-dmsans">
                  sale for all furniture items!
                </span>
              </div>
              <a
                href=""
                className="text-[14px] font-bold font-dmsans text-white capitalize px-[58px] py-[16px] bg-primary"
              >
                Shop now
              </a>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-[22px]">
        <Container>
          <div className="flex ">
            <div className="w-1/3 flex items-center">
              <div>
                <PiNumberTwoBold className="text-[20px]"/>
              </div>
              <p>Two years warranty</p>
            </div>
            <div className="w-1/3 flex items-center justify-center">
              <div>
                <FaTruck />
              </div>
              <p>Free shipping</p>
            </div>
            <div className="w-1/3 flex items-center justify-end">
              <div>
                <FaArrowRotateLeft />
              </div>
              <p>Return policy in 30 days</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Banner;
