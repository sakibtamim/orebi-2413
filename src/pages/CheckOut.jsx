import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useSelector } from "react-redux";

const CheckOut = () => {
  const cartItems = useSelector((state) => state.cartDetails.cartItems);
  console.log(cartItems);

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
        <div className="pb-[129px] w-2/3">
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
        <div className="pb-[129px] w-2/3">
          <h2 className="text-[39px] text-primary font-dmsans font-bold pb-[42px]">
            Additional Information
          </h2>
          <div className=" flex flex-col gap-y-[10px]">
            <label
              htmlFor=""
              className="text-[16px] text-primary font-dmsans font-bold"
            >
              Other Notes (optional)
            </label>
            <textarea
              name=""
              id=""
              placeholder="Notes about your order, e.g. special notes for delivery."
              className="pb-[86px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
            ></textarea>
          </div>
        </div>
        <div className="w-2/3">
          <h2 className="text-[39px] text-primary font-dmsans font-bold pb-[42px]">
            Your Order
          </h2>
          <div className="w-[70%] border border-[#F0F0F0] mb-[60px]">
            <div className="flex border-b-1 border-b-[#F0F0F0]">
              <div className="w-1/2  border-r-1 border-r-[#F0F0F0]">
                <h4 className="py-[16px] pl-[20px] text-[16px] text-primary font-bold font-dmsans">
                  Product
                </h4>
              </div>
              <div className="w-1/2 ">
                <p className="py-[16px] pl-[20px] text-[16px] text-secondary font-normal font-dmsans">
                  Total
                </p>
              </div>
            </div>
            {cartItems.map((item) => (
              <div className="flex flex-wrap border-b-1 border-b-[#F0F0F0]">
                <div className="flex w-1/2 gap-x-[4px] py-[16px] pl-[20px]  border-r-1 border-r-[#F0F0F0]">
                  <h4 className=" text-[16px] text-primary font-bold font-dmsans">
                    {item.title}
                  </h4>
                  <div className=" text-[16px] text-primary font-bold font-dmsans">
                    x
                  </div>
                  <h4 className=" text-[16px] text-primary font-bold font-dmsans">
                    {item.cartQuantity}
                  </h4>
                </div>
                <div className="w-1/2 ">
                  <p className="py-[16px] pl-[20px] text-[16px] text-secondary font-normal font-dmsans">
                    $ {item.price * item.cartQuantity}
                  </p>
                </div>
              </div>
            ))}
            <div className="flex border-b-1 border-b-[#F0F0F0]">
              <div className="w-1/2  border-r-1 border-r-[#F0F0F0]">
                <h4 className="py-[16px] pl-[20px] text-[16px] text-primary font-bold font-dmsans">
                  Subtotal
                </h4>
              </div>
              <div className="w-1/2 ">
                <p className="py-[16px] pl-[20px] text-[16px] text-primary font-normal font-dmsans">
                  ${" "}
                  {cartItems
                    .reduce(
                      (index, item) => index + item.price * item.cartQuantity,
                      0
                    )
                    .toFixed(2)}
                </p>
              </div>
            </div>
            <div className="flex border-b-1 border-b-[#F0F0F0]">
              <div className="w-1/2  border-r-1 border-r-[#F0F0F0]">
                <h4 className="py-[16px] pl-[20px] text-[16px] text-primary font-bold font-dmsans">
                  Total
                </h4>
              </div>
              <div className="w-1/2 ">
                <p className="py-[16px] pl-[20px] text-[16px] text-primary font-normal font-dmsans">
                  ${" "}
                  {cartItems
                    .reduce(
                      (index, item) => index + item.price * item.cartQuantity,
                      0
                    )
                    .toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CheckOut;
