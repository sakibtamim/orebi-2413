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
        <div className="">
          <form action="">
            <h2 className="text-[39px] text-primary font-dmsans font-bold pb-[42px]">
              Billing Details
            </h2>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default CheckOut;
