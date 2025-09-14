import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { BiMinus, BiPlus } from "react-icons/bi";
import { FaMinus, FaPlus } from "react-icons/fa";
import ProductRatings from "../components/ProductRatings";
import { useDispatch } from "react-redux";
import { cartTotal } from "../slice/cartSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();

  let [count, setCount] = useState(1);
  let [color, setColor] = useState(null);
  let [showShipping, setShowShipping] = useState(false);
  let [showDetails, setShowDetails] = useState(false);
  let [showReview, setShowReview] = useState(false);
  let [showDescription, setShowDescription] = useState(true);

  let colors = [
    "rgba(0,0,0,0.19)",
    "#FF8686",
    "rgba(125,211,33,0.19)",
    "rgba(182,182,182,0.19)",
    "rgba(21,203,164,0.19)",
  ];

  let countUp = () => {
    setCount(count + 1);
  };
  let countDown = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  let { id } = useParams();

  let [productData, setProductData] = useState({});
  let [productLoading, setProductLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
      setProductData(response.data);
      setProductLoading(false);
    });
  }, [id]);

  const handleCart = () => {
    console.log("ami");
    dispatch(cartTotal(productData));
  };

  if (productLoading) {
    return (
      <>
        <div className="w-full h-100  flex justify-center items-center ">
          <div className=" w-16 h-16 border-6 border-primary border-t-transparent  rounded-full animate-spin"></div>
        </div>
      </>
    );
  }

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
          <div className="flex items-center gap-x-[25px] pb-[24px]">
            <div className="text-[16px] text-[#FFD881] ">
              <ProductRatings rating={productData.rating} />
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
          <div className=" flex items-center gap-x-[53px] py-[30px] ">
            <h6 className="text-[16px] text-primary font-bold font-dmsans uppercase">
              COLOR:
            </h6>
            <div className="flex items-center gap-x-[15px]">
              {colors.map((clr, index) => (
                <div
                  key={index}
                  onClick={() => setColor(clr)}
                  className={`${
                    color === clr ? "w-[28px] h-[28px]" : "w-[20px] h-[20px]"
                  } rounded-full`}
                  style={{ background: clr }}
                ></div>
              ))}
            </div>
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
            <div className="text-[14px] text-primary font-bold font-dmsans px-[44px] py-[16px] border border-primary  hover:bg-primary hover:text-white cursor-pointer">
              Add to Wish List
            </div>
            <div
              onClick={handleCart}
              className="text-[14px] text-primary font-bold font-dmsans px-[60px] py-[16px] border border-primary  hover:bg-primary hover:text-white cursor-pointer"
            >
              Add to Cart
            </div>
          </div>
          <div
            onClick={() => setShowDetails(!showDetails)}
            className="flex justify-between items-center py-[24px] cursor-pointer"
          >
            <h6 className="text-[16px] text-primary font-bold font-dmsans uppercase">
              FEATURES & DETAILS
            </h6>
            <div className="text-primary text-[14px]">
              {showDetails ? (
                <span>
                  <FaMinus />
                </span>
              ) : (
                <span>
                  <FaPlus />
                </span>
              )}
            </div>
          </div>
          {showDetails && (
            <div className="border-t border-t-[#F0F0F0]">
              <div className="py-[24px] flex gap-x-[20px]">
                <h6 className="text-[16px] text-primary font-bold font-dmsans uppercase">
                  category:
                </h6>
                <p className=" text-[16px] text-secondary font-dmsans font-normal capitalize">
                  {productData.category}
                </p>
              </div>
              <div className="pb-[24px] flex gap-x-[20px]">
                <h6 className="text-[16px] text-primary font-bold font-dmsans uppercase">
                  brand:
                </h6>
                <p className=" text-[16px] text-secondary font-dmsans font-normal capitalize">
                  {productData.brand}
                </p>
              </div>
              <div className="pb-[24px] flex gap-x-[20px]">
                <h6 className="text-[16px] text-primary font-bold font-dmsans uppercase">
                  weight:
                </h6>
                <p className=" text-[16px] text-secondary font-dmsans font-normal capitalize">
                  {productData.weight}
                </p>
              </div>
              <div className="pb-[24px] flex gap-x-[20px]">
                <h6 className="text-[16px] text-primary font-bold font-dmsans uppercase">
                  dimensions:
                </h6>
                <p className=" text-[16px] text-secondary font-dmsans font-normal">
                  {productData.dimensions.width} x{" "}
                  {productData.dimensions.height} x{" "}
                  {productData.dimensions.depth} (cm)
                </p>
              </div>
              <div className="pb-[24px] flex gap-x-[20px]">
                <h6 className="text-[16px] text-primary font-bold font-dmsans uppercase">
                  warranty:
                </h6>
                <p className=" text-[16px] text-secondary font-dmsans font-normal capitalize">
                  {productData.warrantyInformation}
                </p>
              </div>
            </div>
          )}

          <div
            onClick={() => setShowShipping(!showShipping)}
            className="flex justify-between items-center py-[24px] border-b border-b-[#F0F0F0]  border-t border-t-[#F0F0F0] cursor-pointer"
          >
            <h6 className="text-[16px] text-primary font-bold font-dmsans uppercase">
              SHIPPING & RETURNS
            </h6>
            <div className="text-primary text-[14px]">
              {showShipping ? (
                <span>
                  <FaMinus />
                </span>
              ) : (
                <span>
                  <FaPlus />
                </span>
              )}
            </div>
          </div>
          {showShipping && (
            <div className="">
              <div className="py-[24px] flex gap-x-[20px]">
                <h6 className="text-[16px] text-primary font-bold font-dmsans uppercase">
                  Shipping:
                </h6>
                <p className=" text-[16px] text-secondary font-dmsans font-normal">
                  {productData.shippingInformation}
                </p>
              </div>
              <div className=" flex gap-x-[20px]">
                <h6 className="text-[16px] text-primary font-bold font-dmsans uppercase">
                  Return Policy:
                </h6>
                <p className=" text-[16px] text-secondary font-dmsans font-normal">
                  {productData.returnPolicy}
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="flex gap-x-[62px] pb-[42px] text-[20px] text-secondary font-dmsans font-normal ">
          <h6
            onClick={() => {
              setShowDescription(!showDescription);
              setShowReview(false);
            }}
            className={`${
              showDescription ? "font-bold text-primary" : ""
            } cursor-pointer`}
          >
            Description
          </h6>
          <h6
            onClick={() => {
              setShowReview(!showReview);
              setShowDescription(false);
            }}
            className={`${
              showReview ? "font-bold text-primary" : ""
            } cursor-pointer`}
          >
            Reviews ({productData.reviews?.length})
          </h6>
        </div>
        {showReview && (
          <div className="">
            <p className="pb-[16px] border-b border-[#F0F0F0]">
              {productData.reviews?.length} review for Product
            </p>
            {productData.reviews?.map((reviews) => (
              <div
                key={reviews.id}
                className="pt-[24px] pb-[16px] border-b border-[#F0F0F0]"
              >
                <div className="flex justify-between pb-[14px]">
                  <div className="w-1/2 flex items-center gap-x-[37px]">
                    <h6 className="text-[16px] text-primary font-dmsans font-normal">
                      {reviews.reviewerName}
                    </h6>
                    <div className="text-[16px] text-[#FFD881]  ">
                      <ProductRatings rating={reviews.rating} />
                    </div>
                  </div>
                  <div className="w-[1/2]">
                    <p className="text-[16px] text-secondary font-dmsans font-normal">
                      {reviews.date}
                    </p>
                  </div>
                </div>
                <p className="text-[16px] text-secondary font-dmsans font-normal">
                  {reviews.comment}
                </p>
              </div>
            ))}

            <div className="pt-[53px] w-1/2">
              <form action="">
                <h6 className="pb-[48px] text-[16px] text-primary font-bold font-dmsans capitalize">
                  Add a Review
                </h6>
                <div className="flex flex-col gap-y-[10px]">
                  <label
                    className=" text-[16px] text-primary font-bold font-dmsans"
                    htmlFor=""
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name here"
                    className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
                  />
                </div>
                <div className="py-[24px] flex flex-col gap-y-[10px]">
                  <label
                    className=" text-[16px] text-primary font-bold font-dmsans"
                    htmlFor=""
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your email here"
                    className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
                  />
                </div>
                <div className="flex flex-col gap-y-[10px] pb-[29px]">
                  <label
                    className=" text-[16px] text-primary font-bold font-dmsans"
                    htmlFor=""
                  >
                    Review
                  </label>
                  <textarea
                    name=""
                    id=""
                    placeholder="Notes about your order"
                    className="pb-[86px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
                  ></textarea>
                </div>
                <button className="text-[14px] bg-primary text-white font-dmsans font-normal py-[16px] px-[85px]">
                  Post
                </button>
              </form>
            </div>
          </div>
        )}
        {showDescription && (
          <div className="">
            <p>{productData.description}</p>
          </div>
        )}
      </Container>
    </section>
  );
};

export default ProductDetails;
