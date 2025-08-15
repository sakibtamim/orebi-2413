import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const MyAccount = () => {
  return (
    <section className="lg:pt-[124px] pt-[40px] lg:pb-[140px] pb-[40px]">
      <Container>
        <div className="pb-[127px]">
          <h2 className="text-[49px] text-primary font-dmsans font-bold pb-[12px]">
            My Account
          </h2>
          <div className="flex items-center gap-x-[8px] text-[12px] text-secondary font-normal font-dmsans">
            <Link to="/">Home</Link>
            <MdOutlineArrowForwardIos />
            <Link to="/myaccount">My Account</Link>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[25%]">
            <ul>
              <li className="text-[16px] text-secondary font-normal font-dmsans pb-[20px] hover:text-primary hover:font-bold border-b-1 border-b-[#F0F0F0]">
                Dashboard
              </li>
              <li className="text-[16px] text-secondary font-normal font-dmsans py-[20px]  hover:text-primary hover:font-bold border-b-1 border-b-[#F0F0F0]">
                Others
              </li>
              <li className="text-[16px] text-secondary font-normal font-dmsans py-[20px]  hover:text-primary hover:font-bold border-b-1 border-b-[#F0F0F0]">
                Donwloads
              </li>
              <li className="text-[16px] text-secondary font-normal font-dmsans py-[20px]  hover:text-primary hover:font-bold border-b-1 border-b-[#F0F0F0]">
                Addresses
              </li>
              <li className="text-[16px] text-secondary font-normal font-dmsans py-[20px]  hover:text-primary hover:font-bold border-b-1 border-b-[#F0F0F0]">
                Account details
              </li>
              <li className="text-[16px] text-secondary font-normal font-dmsans py-[20px]  hover:text-primary hover:font-bold border-b-1 border-b-[#F0F0F0]">
                <Link to="/login">Logout</Link>
              </li>
            </ul>
          </div>
          <div className="w-[72%]">
            <div className="">
              <p className="text-[16px] text-secondary font-dmsans font-normal pb-[30px]">
                Hello <span className="text-primary">admin</span> (not{" "}
                <span className="text-primary">admin</span>?{" "}
                <span className="text-primary">Log out</span>)
              </p>
              <p className="w-[918px] text-[16px] text-secondary font-dmsans font-normal pb-[30px]">
                From your account dashboard you can view your{" "}
                <span className="text-primary">recent orders</span>, manage your{" "}
                <span className="text-primary">
                  shipping and billing addresses
                </span>
                , and{" "}
                <span className="text-primary">
                  edit your password and account details.
                </span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MyAccount;
