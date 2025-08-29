import React, { useState } from "react";
import Container from "../components/Container";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import CartProduct from "../assets/cartproduct.png";
import { BiMinus, BiPlus } from "react-icons/bi";

const Cart = () => {
  let [count, setCount] = useState(1);
  let countUp = () => {
    setCount(count + 1);
  };
  let countDown = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
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
        <div className="border border-[#F0F0F0]">
          <div className="flex bg-[#F5F5F3] py-[34px] px-[20px] ">
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
          <div className="flex items-center py-[30px] px-[20px] ">
            <div className="w-1/4 flex items-center">
              <div className="pr-[40px]">
                <IoClose className="text-primary" />
              </div>
              <div className="w-[100px] h-[100px] ">
                <img src={CartProduct} alt="" />
              </div>
              <h4 className="text-[16px] text-primary font-bold font-dmsans pl-[20px]">
                Product name
              </h4>
            </div>
            <div className="w-1/4">
              <h4 className="text-[16px] text-primary font-bold font-dmsans">
                $44.00
              </h4>
            </div>
            <div className="w-1/4 ">
              <div className="w-[140px] py-[8px] flex justify-around  items-center border border-[#F0F0F0]">
                <div className="" onClick={countDown}>
                  <BiMinus className="text-secondary" />
                </div>
                <div className="text-[16px] text-secondary font-normal font-dmsans">
                  {count}
                </div>
                <div className="" onClick={countUp}>
                  <BiPlus className="text-secondary" />
                </div>
              </div>
            </div>
            <div className="w-1/4">
              <h4 className="text-[16px] text-primary font-bold font-dmsans">
                $44.00
              </h4>
            </div>
          </div>
          <div className="flex  p-[20px] border-t-1 border-t-[#F0F0F0]">
            <div className="w-1/2 flex items-center gap-x-[24px]">
              <div className="">
                <select
                  name=""
                  id=""
                  className="w-[255px] py-[10px] px-[20px] text-[14px] text-secondary font-dmsans font-normal border  border-[#F0F0F0] outline-none"
                >
                  <option value="">SIZE</option>
                  <option value="Big">Big</option>
                  <option value="Small">Small</option>
                </select>
              </div>
              <h5 className="text-[14px] text-primary font-dmsans font-bold">
                Apply coupon
              </h5>
            </div>
            <div className="w-1/2 text-end">
              <h5 className="text-[14px] text-primary font-dmsans font-bold">
                Update cart
              </h5>
            </div>
          </div>
        </div>
        <div className="pt-[54px] flex justify-end">
          <div className="w-5/12">
            <h3 className="text-[20px] text-primary text-end font-bold font-dmsans pb-[24px]">
              Cart totals
            </h3>
            <div className=" border border-[#F0F0F0] mb-[30px]">
              <div className="flex border-b-1 border-b-[#F0F0F0]">
                <div className="w-1/2  border-r-1 border-r-[#F0F0F0]">
                  <h4 className="py-[16px] pl-[20px] text-[16px] text-primary font-bold font-dmsans">
                    Subtotal
                  </h4>
                </div>
                <div className="w-1/2 ">
                  <p className="py-[16px] pl-[20px] text-[16px] text-secondary font-normal font-dmsans">
                    389.99 $
                  </p>
                </div>
              </div>
              <div className="flex ">
                <div className="w-1/2  border-r-1 border-r-[#F0F0F0]">
                  <h4 className="py-[16px] pl-[20px] text-[16px] text-primary font-bold font-dmsans">
                    Total
                  </h4>
                </div>
                <div className="w-1/2 ">
                  <p className="py-[16px] pl-[20px] text-[16px] text-primary font-normal font-dmsans">
                    389.99 $
                  </p>
                </div>
              </div>
            </div>
            <div className="text-end">
              <Link
                to="/checkout"
                className=" text-[14px] text-white font-bold font-dmsans py-[16px] px-[28px] bg-primary inline-block"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cart;
