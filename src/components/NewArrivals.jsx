import React, { useContext } from "react";
import Container from "./Container";
import {
  FaHeart,
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaShoppingCart,
} from "react-icons/fa";
import { IoGitCompare } from "react-icons/io5";
import { ApiData } from "./ContextApi";
import Slider from "react-slick";

function ArrivalNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="nextBtn" onClick={onClick}>
      <FaLongArrowAltRight />
    </div>
  );
}

function ArrivalPrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="prevBtn" onClick={onClick}>
      <FaLongArrowAltLeft />
    </div>
  );
}

const NewArrivals = () => {
  let data = useContext(ApiData);

  let ArrivalSlider = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <ArrivalNextArrow />,
    prevArrow: <ArrivalPrevArrow />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id="new_arrivals">
      <Container>
        <div className="lg:pb-[48px] pb-[24px]">
          <h2 className="lg:text-[39px] text-[20px] text-primary font-bold font-dmsans">
            New Arrivals
          </h2>
        </div>
        <div>
          <Slider {...ArrivalSlider}>
            {data.map((item) => (
              <div key={item.id} className="!w-[95%]">
                <div className="relative group">
                  <div className="bg-[#F9F9F9]">
                    <img src={item.thumbnail} alt="" />
                  </div>
                  <div className="absolute left-0 bottom-0 w-full bg-white scale-0 group-hover:scale-100 duration-300 ease-in-out origin-bottom-left">
                    <ul className=" py-[25px] pr-[30px]">
                      <li>
                        <a
                          href=""
                          className="flex items-center justify-end gap-x-[16px] text-secondary text-[16px] font-dmsans font-normal hover:text-primary hover:font-bold"
                        >
                          <span>Add to Wish List</span>
                          <FaHeart className="text-primary " />
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="flex items-center justify-end gap-x-[16px] py-[20px]  text-secondary text-[16px] font-dmsans font-normal hover:text-primary hover:font-bold"
                        >
                          <span>Compare</span>
                          <IoGitCompare className="text-primary " />
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="flex items-center justify-end gap-x-[16px]  text-secondary text-[16px] font-dmsans font-normal hover:text-primary hover:font-bold"
                        >
                          <span>Add to Cart</span>
                          <FaShoppingCart className="text-primary " />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="absolute lg:top-[20px] top-[10px] lg:left-[20px] left-[10px] lg:px-[32px] px-[14px] lg:py-[8px] py-[6px] bg-primary lg:text-[14px] text-[10px] text-white lg:font-bold font-semibold font-dmsans">
                    {item.discountPercentage}%
                  </div>
                </div>
                <div className="">
                  <div className="flex justify-between items-center pt-[24px] pb-[15px]">
                    <h3 className="lg:text-[18px] text-[14px] text-primary font-bold font-dmsans">
                      {item.title}
                    </h3>
                    <p className="lg:text-[16px] text-[12px] text-secondary font-normal font-dmsans">
                      ${item.price}
                    </p>
                  </div>
                  <div>
                    <p className="lg:text-[16px] text-[12px] text-secondary font-normal font-dmsans capitalize">
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default NewArrivals;
