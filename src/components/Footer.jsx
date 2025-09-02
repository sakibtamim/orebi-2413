import React, { useContext, useEffect, useState } from "react";
import Container from "./Container";
import FooterLogo from "../assets/footerlogo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ApiData } from "./ContextApi";

const Footer = () => {
  let { data } = useContext(ApiData);
  let [category, setCategory] = useState([]);
  useEffect(() => {
    setCategory([...new Set(data.map((item) => item.category))]);
  }, [data]);

  return (
    <section className="bg-[#F5F5F3] lg:py-[55px] py-[30px] ">
      <Container>
        <div className="flex flex-wrap lg:pb-[65px] pb-[20px] ">
          <div className="lg:w-1/8 w-1/3">
            <h3 className="lg:text-[16px] text-[14px] text-primary font-dmsans font-bold uppercase lg:pb-[16px] pb-[14px]">
              MENU
            </h3>
            <ul>
              <li className="lg:text-[14px] text-[12px] text-fadetxt font-dmsans font-normal lg:pb-[6px] pb-[4px] capitalize">
                <Link to="/">Home</Link>
              </li>
              <li className="lg:text-[14px] text-[12px] text-fadetxt font-dmsans font-normal capitalize lg:pb-[6px] pb-[4px]">
                <Link to="/products">Shop</Link>
              </li>
              <li className="lg:text-[14px] text-[12px] text-fadetxt font-dmsans font-normal capitalize lg:pb-[6px] pb-[4px]">
                <Link to="/about">About</Link>
              </li>
              <li className="lg:text-[14px] text-[12px] text-fadetxt font-dmsans font-normal capitalize lg:pb-[6px] pb-[4px]">
                <Link to="/contacts">Contacts</Link>
              </li>
              <li className="lg:text-[14px] text-[12px] text-fadetxt font-dmsans font-normal capitalize ">
                <Link>Journal</Link>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/8 w-1/3">
            <h3 className="lg:text-[16px] text-[14px] text-primary font-dmsans font-bold uppercase lg:pb-[16px] pb-[14px]">
              SHOP
            </h3>
            <ul>
              {category.map((item) => (
                <li
                  key={item}
                  className="lg:text-[14px] text-[12px] text-fadetxt font-dmsans font-normal lg:pb-[6px] pb-[4px] capitalize"
                >
                  <Link to="/products">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/8 w-1/3">
            <h3 className="lg:text-[16px] text-[14px] text-primary font-dmsans font-bold uppercase lg:pb-[16px] pb-[14px]">
              HELP
            </h3>
            <ul>
              <li className="lg:text-[14px] text-[12px] text-fadetxt font-dmsans font-normal lg:pb-[6px] pb-[4px] capitalize">
                <a href="">Privacy Policy</a>
              </li>
              <li className="lg:text-[14px] text-[12px] text-fadetxt font-dmsans font-normal lg:pb-[6px] pb-[4px] capitalize">
                <a href="">Terms & Conditions</a>
              </li>
              <li className="lg:text-[14px] text-[12px] text-fadetxt font-dmsans font-normal lg:pb-[6px] pb-[4px] capitalize">
                <a href="">Special E-shop</a>
              </li>
              <li className="lg:text-[14px] text-[12px] text-fadetxt font-dmsans font-normal lg:pb-[6px] pb-[4px] capitalize">
                <a href="">Shipping</a>
              </li>
              <li className="lg:text-[14px] text-[12px] text-fadetxt font-dmsans font-normal  capitalize">
                <a href="">Secure Payments</a>
              </li>
            </ul>
          </div>
          <div className="lg:w-3/8 w-1/2 lg:mt-0 mt-[20px]">
            <h3 className="lg:text-[16px] text-[14px] text-primary font-dmsans font-bold  lg:pb-[10px] pb-[2px]">
              (052) 611-5711
            </h3>
            <h4 className="lg:text-[16px] text-[14px] text-primary font-dmsans font-bold  lg:pb-[16px] ">
              company@domain.com
            </h4>
          </div>
          <div className="lg:w-2/8 w-1/2 lg:mt-0 mt-[20px] lg:text-start text-right">
            <Link to="/">
              <img src={FooterLogo} className=" lg:block inline-block" alt="" />
            </Link>
          </div>
        </div>
        <div className="lg:flex justify-between items-center ">
          <div className="flex lg:gap-x-[26px] gap-x-[50px] lg:justify-start justify-center lg:mb-0 mb-[16px]">
            <div className="">
              <Link to="https://www.facebook.com">
                <FaFacebookF className="text-primary" />
              </Link>
            </div>
            <div className="">
              <Link to="https://www.linkedin.com">
                <FaLinkedinIn className="text-primary" />
              </Link>
            </div>
            <div className="">
              <Link to="https://www.instagram.com">
                <FaInstagram className="text-primary" />
              </Link>
            </div>
          </div>
          <div className="lg:text-[14px] text-[12px] text-fadetxt font-dmsans font-normal text-center">
            2025 Orebi Minimal eCommerce Figma Template by Adveits
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
