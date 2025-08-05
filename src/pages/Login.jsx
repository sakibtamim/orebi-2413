import React from "react";
import Container from "../components/Container";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="lg:pt-[124px] pt-[40px] lg:pb-[140px] pb-[40px]">
      <Container>
        <div className="pb-[130px]">
          <h2 className="text-[49px] text-primary font-dmsans font-bold pb-[12px]">
            Login
          </h2>
          <div className="flex items-center gap-x-[8px] text-[12px] text-secondary font-normal font-dmsans">
            <Link to="/">Home</Link>
            <MdOutlineArrowForwardIos />

            <Link to="/login">Login</Link>
          </div>
        </div>

        <div className="pb-[62px] border-b-[#F0F0F0] border-b-1">
          <p className="w-[45%] text-[16px] text-secondary font-dmsans font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
        </div>

        <div className="w-2/3 pt-[58px] pb-[70px]  border-b-[#F0F0F0] border-b-1">
          <h2 className="text-[39px] text-primary font-dmsans font-bold pb-[42px]">
            Returning Customer
          </h2>
          <form action="">
            <div className="flex justify-between pb-[29px]">
              <div className="flex flex-col gap-y-[10px] w-[48%]">
                <label
                  htmlFor=""
                  className="text-[16px] text-primary font-dmsans font-bold"
                >
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="company@domain.com"
                  className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
                />
              </div>
              <div className="flex flex-col gap-y-[10px] w-[48%] ">
                <label
                  htmlFor=""
                  className="text-[16px] text-primary font-dmsans font-bold"
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="******"
                  className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
                />
              </div>
            </div>
            <button className="text-[14px] text-primary font-bold font-dmsans py-[14px] px-[80px] border-1 border-border hover:bg-primary hover:text-white">
              Log in
            </button>
          </form>
        </div>

        <div className="pt-[57px] w-[45%]">
          <h2 className="text-[39px] text-primary font-dmsans font-bold pb-[38px]">
            New Customer
          </h2>
          <p className="text-[16px] text-secondary font-dmsans font-normal pb-[51px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>

          <Link
            to="/signup"
            className="text-[14px] text-primary font-bold font-dmsans py-[14px] px-[68px] border-1 border-border hover:bg-primary hover:text-white"
          >
            Continue
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Login;
