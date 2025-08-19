import React from "react";
import Container from "../components/Container";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <section className="lg:pt-[124px] pt-[40px] lg:pb-[140px] pb-[40px]">
      <Container>
        <div className="pb-[127px]">
          <h2 className="text-[49px] text-primary font-dmsans font-bold pb-[12px]">
            Cart
          </h2>
          <div className="flex items-center gap-x-[8px] text-[12px] text-secondary font-normal font-dmsans">
            <Link to="/">Home</Link>
            <MdOutlineArrowForwardIos />
            <Link to="/cart">Cart</Link>
          </div>
        </div>
        <div className="flex bg-[#F5F5F3] py-[34px] px-[20px]">
          <div className="w-1/4 ">
            <h4 className="text-[16px] text-primary font-bold font-dmsans">
              Product
            </h4>
          </div>
          <div className="w-1/4 ">
            <h4 className="text-[16px] text-primary font-bold font-dmsans">
              Price
            </h4>
          </div>
          <div className="w-1/4 ">
            <h4 className="text-[16px] text-primary font-bold font-dmsans">
              Quantity
            </h4>
          </div>
          <div className="w-1/4 ">
            <h4 className="text-[16px] text-primary font-bold font-dmsans">
              Total
            </h4>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cart;
