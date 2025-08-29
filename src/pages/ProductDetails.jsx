import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { BiMinus, BiPlus } from "react-icons/bi";

const ProductDetails = () => {
  let [count, setCount] = useState(0);
  let countUp = () => {
    setCount(count + 1);
  };
  let countDown = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  let productId = useParams();
  let [productData, setProductData] = useState({});
  let getProductDetailsData = () => {
    axios
      .get(`https://dummyjson.com/products/${productId.id}`)
      .then((response) => {
        setProductData(response.data);
      });
  };
  useEffect(() => {
    getProductDetailsData();
  }, []);

  return (
    <section className="lg:pt-[124px] pt-[40px] lg:pb-[140px] pb-[40px]">
      <Container>
        <div className="pb-[130px]">
          <h2 className="text-[49px] text-primary font-dmsans font-bold pb-[12px]">
            Products
          </h2>
          <div className="flex items-center gap-x-[8px] text-[12px] text-secondary font-normal font-dmsans">
            <Link to="/">Home</Link>
            <MdOutlineArrowForwardIos />
            <Link to="/products">Products</Link>
            <MdOutlineArrowForwardIos />
            <Link to={`/products/${productData.id}`}>{productData.title}</Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-y-[30px] pb-[66px]">
          {productData.images?.map((img, index) => (
            <div key={index} className="w-[49%] bg-[#F9F9F9]">
              <img
                src={img}
                alt={`product-${index}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
        <div className="pb-[123px] w-1/2">
          <h2 className="text-[39px] text-primary font-dmsans font-bold pb-[15px]">
            {productData.title}
          </h2>
          <div className="flex gap-x-[25px] pb-[24px]">
            <div className="text-[16px] text-[#FFD881] flex gap-x-[2px]">
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
              <IoMdStar />
            </div>
            <p className="text-[14px] text-secondary font-dmsans font-normal">
              {productData.reviews?.length} Review
            </p>
          </div>
          <div className="pb-[24px] border-b border-b-[#F0F0F0]">
            <h5 className="text-[20px] text-primary font-bold font-dmsans">
              ${productData.price}
            </h5>
          </div>
          <div className="py-[30px] ">
            <h6 className="text-[16px] text-primary font-bold font-dmsans uppercase">
              COLOR:
            </h6>
          </div>
          <div className="flex items-center gap-x-[76px] pb-[30px]">
            <h6 className="text-[16px] text-primary font-bold font-dmsans uppercase">
              SIZE:
            </h6>
            <div className="">
              <select className="pl-[20px] h-[36px] w-[139px] border-[#F0F0F0] border-[1px] text-[16px] text-secondary font-dmsans font-normal outline-none ">
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="xxl">XXl</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-x-[29px] pb-[37px] border-b border-b-[#F0F0F0]">
            <h6 className="text-[16px] text-primary font-bold font-dmsans uppercase">
              QUANTITY:
            </h6>
            <div className="">
              <div className="w-[139px] py-[8px] flex justify-around  items-center border border-[#F0F0F0]">
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
          </div>
          <div className="flex items-center gap-x-[27px] py-[24px] border-b border-b-[#F0F0F0]">
            <h6 className="text-[16px] text-primary font-bold font-dmsans uppercase">
              STATUS:
            </h6>
            <p className="text-[16px] text-secondary font-dmsans font-normal">
              {productData.availabilityStatus}
            </p>
          </div>
          <div className="flex gap-x-[20px] py-[30px] border-b border-b-[#F0F0F0]">
            <Link className="text-[14px] text-primary font-bold font-dmsans px-[44px] py-[16px] border border-primary  hover:bg-primary hover:text-white">
              Add to Wish List
            </Link>
            <Link className="text-[14px] text-primary font-bold font-dmsans px-[60px] py-[16px] border border-primary  hover:bg-primary hover:text-white">
              Add to Cart
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductDetails;
