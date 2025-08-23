import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const CheckOut = () => {
  return (
    <section className="lg:pt-[124px] pt-[40px] lg:pb-[140px] pb-[40px]">
      <Container>
        <div className="pb-[127px]">
          <h2 className="text-[49px] text-primary font-dmsans font-bold pb-[12px]">
            Checkout
          </h2>
          <div className="flex items-center gap-x-[8px] text-[12px] text-secondary font-normal font-dmsans">
            <Link to="/">Home</Link>
            <MdOutlineArrowForwardIos />
            <Link to="/checkout">Checkout</Link>
          </div>
        </div>
        <div className="pb-[119px]">
          <p className="text-[16px] text-secondary font-normal font-dmsans">
            Have a coupon?{" "}
            <span className="text-primary">Click here to enter your code</span>
          </p>
        </div>
        <div className="pb-[129px]">
          <form action="">
            <h2 className="text-[39px] text-primary font-dmsans font-bold pb-[42px]">
              Billing Details
            </h2>
            <div className="flex justify-between pb-[24px]">
              <div className="w-[48%] flex flex-col gap-y-[10px]">
                <label
                  htmlFor=""
                  className="text-[16px] text-primary font-dmsans font-bold"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
                />
              </div>
              <div className="w-[48%] flex flex-col gap-y-[10px]">
                <label
                  htmlFor=""
                  className="text-[16px] text-primary font-dmsans font-bold"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-[10px] pb-[24px]">
              <label
                htmlFor=""
                className="text-[16px] text-primary font-dmsans font-bold"
              >
                Companye Name (optional)
              </label>
              <input
                type="text"
                placeholder="Company Name"
                required
                className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
              />
            </div>
            <div className="flex flex-col gap-y-[10px] pb-[24px]">
              <label
                htmlFor=""
                className="text-[16px] text-primary font-dmsans font-bold"
              >
                Country *
              </label>
              <select
                name=""
                id=""
                required
                className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
              >
                <option value="">Please select</option>
                <option value="Bangladesh">Bangladesh</option>
              </select>
            </div>
            <div className="flex flex-col gap-y-[10px] pb-[24px]">
              <label
                htmlFor=""
                className="text-[16px] text-primary font-dmsans font-bold"
              >
                Street Address *
              </label>
              <input
                type="text"
                placeholder="House number and street name"
                required
                className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
              />
              <input
                type="text"
                placeholder="Apartment, suite, unit etc. (optional)"
                className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
              />
            </div>
            <div className="flex flex-col gap-y-[10px] pb-[24px]">
              <label
                htmlFor=""
                className="text-[16px] text-primary font-dmsans font-bold"
              >
                Town/City *
              </label>
              <input
                type="text"
                placeholder="Town/City"
                required
                className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
              />
            </div>
            <div className="flex flex-col gap-y-[10px] pb-[24px]">
              <label
                htmlFor=""
                className="text-[16px] text-primary font-dmsans font-bold"
              >
                Post Code *
              </label>
              <input
                type="text"
                placeholder="Post Code"
                required
                className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
              />
            </div>
            <div className="flex flex-col gap-y-[10px] pb-[24px]">
              <label
                htmlFor=""
                className="text-[16px] text-primary font-dmsans font-bold"
              >
                Phone *
              </label>
              <input
                type="tel"
                placeholder="Phone"
                required
                className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
              />
            </div>
            <div className="flex flex-col gap-y-[10px] pb-[24px]">
              <label
                htmlFor=""
                className="text-[16px] text-primary font-dmsans font-bold"
              >
                Email Address *
              </label>
              <input
                type="email"
                placeholder="Email"
                required
                className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
              />
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default CheckOut;
