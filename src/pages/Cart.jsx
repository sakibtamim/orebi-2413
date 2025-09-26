import React, { useState } from "react";
import Container from "../components/Container";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import CartProduct from "../assets/cartproduct.png";
import { BiMinus, BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { cartQuantity, removeCart } from "../slice/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartDetails.cartItems);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState("");
  const subtotal = cartItems
    .reduce((index, item) => index + item.price * item.cartQuantity, 0)
    .toFixed(2);

  const total = (subtotal - discount).toFixed(2);

  let countUp = (item) => {
    dispatch(cartQuantity({ ...item, increment: true }));
  };
  let countDown = (item) => {
    dispatch(cartQuantity({ ...item, decrement: true }));
  };
  let handleRemove = (item) => {
    dispatch(removeCart(item));
  };
  let handleDiscount = (e) => {
    setCoupon(e.target.value);
  };
  let handleApply = () => {
    if (coupon === "fdr2413") {
      setDiscount((subtotal * 0.2).toFixed(2));
    } else {
      setDiscount("");
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
            <div className="w-2/5 ">
              <h4 className="text-[16px] text-primary font-bold font-dmsans">
                Product
              </h4>
            </div>
            <div className="w-1/5 ">
              <h4 className="text-[16px] text-primary font-bold font-dmsans">
                Price
              </h4>
            </div>
            <div className="w-1/5 ">
              <h4 className="text-[16px] text-primary font-bold font-dmsans">
                Quantity
              </h4>
            </div>
            <div className="w-1/5 ">
              <h4 className="text-[16px] text-primary font-bold font-dmsans">
                Total
              </h4>
            </div>
          </div>
          {cartItems.length > 0
            ? cartItems?.map((item) => (
                <div
                  className="flex items-center py-[30px] px-[20px] "
                  key={item.id}
                >
                  <div className="w-2/5 flex items-center">
                    <div
                      className="pr-[40px] "
                      onClick={() => handleRemove(item)}
                    >
                      <IoClose className="text-primary" />
                    </div>
                    <div className="w-[100px] h-[100px] bg-[#F3F3F3] ">
                      <img src={item.thumbnail} className="w-full" alt="" />
                    </div>
                    <h4 className="text-[16px] text-primary font-bold font-dmsans pl-[20px]">
                      <Link to={`/products/${item.id}`}>{item.title}</Link>
                    </h4>
                  </div>
                  <div className="w-1/5">
                    <h4 className="text-[16px] text-primary font-bold font-dmsans">
                      ${item.price}
                    </h4>
                  </div>
                  <div className="w-1/5 ">
                    <div className="w-[140px] py-[8px] flex justify-around  items-center border border-[#F0F0F0]">
                      <div
                        className="cursor-pointer"
                        onClick={() => countDown(item)}
                      >
                        <BiMinus className="text-secondary" />
                      </div>
                      <div className="text-[16px] text-secondary font-normal font-dmsans">
                        {item.cartQuantity}
                      </div>
                      <div
                        className="cursor-pointer"
                        onClick={() => countUp(item)}
                      >
                        <BiPlus className="text-secondary" />
                      </div>
                    </div>
                  </div>
                  <div className="w-1/5">
                    <h4 className="text-[16px] text-primary font-bold font-dmsans">
                      ${(item.price * item.cartQuantity).toFixed(2)}
                    </h4>
                  </div>
                </div>
              ))
            : "no Data found"}

          <div className="flex gap-x-[40px]  p-[20px] border-t-1 border-t-[#F0F0F0]">
            <div className="flex items-center gap-x-[24px]">
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
            </div>

            <div className="flex items-center gap-x-[16px]">
              <input
                type="text"
                className="w-[255px] text-[14px] text-secondary font-dmsans font-normal py-[8px] px-[20px] border-[#F0F0F0] border-2 outline-none "
                onChange={handleDiscount}
              />
              <h5
                className="text-[14px] text-primary font-dmsans font-bold cursor-pointer"
                onClick={handleApply}
              >
                Apply coupon
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
                    $ {subtotal}
                  </p>
                </div>
              </div>
              <div className="flex border-b-1 border-b-[#F0F0F0]">
                <div className="w-1/2  border-r-1 border-r-[#F0F0F0]">
                  <h4 className="py-[16px] pl-[20px] text-[16px] text-primary font-bold font-dmsans">
                    Discount
                  </h4>
                </div>
                <div className="w-1/2 ">
                  <p className="py-[16px] pl-[20px] text-[16px] text-secondary font-normal font-dmsans">
                    $ {discount}
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
                    $ {total}
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
