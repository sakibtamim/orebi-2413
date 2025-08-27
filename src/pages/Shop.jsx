import React, { useContext, useEffect, useState } from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { HiSquares2X2 } from "react-icons/hi2";
import { FaThList } from "react-icons/fa";
import Products from "../components/Products";
import Pagination from "../components/Pagination";
import { ApiData } from "../components/ContextApi";

const Shop = () => {
  let { data } = useContext(ApiData);

  let [cateShow, setCateShow] = useState(false);
  let [colorShow, setColorShow] = useState(false);
  let [brandShow, setBrandShow] = useState(false);
  let [priceShow, setPriceShow] = useState(false);

  let [perPage, setPerPage] = useState(6);
  let [currentPage, setCurrentPage] = useState(1);

  let [category, setCategory] = useState([]);
  let [cateFilter, setCateFilter] = useState([]);
  let [showAll, setShowAll] = useState(true);

  let [brand, setBrand] = useState([]);

  let lastPage = perPage * currentPage;
  let firstPage = lastPage - perPage;
  let allData = data.slice(firstPage, lastPage);

  let pageNumber = [];
  for (let i = 0; i < Math.ceil(data.length / perPage); i++) {
    pageNumber.push(i);
  }

  let paginate = (index) => {
    setCurrentPage(index + 1);
  };

  useEffect(() => {
    setCategory([...new Set(data.map((item) => item.category))]);
    setBrand([...new Set(data.map((item) => item.brand))]);
  }, [data]);

  let [activeCategory, setActiveCategory] = useState(null);

  let handleCategory = (citem) => {
    let cateFilter = data.filter((item) => item.category === citem);
    setCateFilter(cateFilter);
    setActiveCategory(citem);
  };
  let handleBrand = (bitem) => {
    let brandFilter = data.filter((item) => item.brand === bitem);
    setCateFilter(brandFilter);
    setActiveCategory(bitem);
  };

  let [activeList, setActiveList] = useState("");
  let handleList = () => {
    setActiveList("active");
  };

  let handleShow = (e) => {
    setPerPage(e.target.value);
  };

  let resetFilters = () => {
    setPerPage(6);
    setCateFilter([]);
    setActiveCategory(null);
    setCurrentPage(1);
    setCateShow(false);
    setColorShow(false);
    setBrandShow(false);
    setPriceShow(false);
    setShowAll(true);
  };

  return (
    <>
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
            </div>
          </div>
          <div className="flex justify-between">
            <div className="w-[25%]">
              <div className="pb-[53px]">
                <h5
                  className="text-[20px] text-primary font-bold font-dmsans pb-[15px] flex items-center justify-between"
                  onClick={() => {
                    setCateShow(!cateShow);
                  }}
                >
                  <span>Shop by Category</span>
                  {cateShow ? (
                    <span>
                      <IoMdArrowDropdown className="text-[20px]" />
                    </span>
                  ) : (
                    <span>
                      <IoMdArrowDropup className="text-[20px]" />
                    </span>
                  )}
                </h5>
                {cateShow && (
                  <ul>
                    {category.map((item) => (
                      <li
                        key={item}
                        onClick={() => handleCategory(item)}
                        className={`${
                          item === activeCategory
                            ? "bg-primary text-white pl-2 "
                            : "bg-white"
                        } text-[16px] text-secondary font-normal font-dmsans py-[20px] border-b-[1px] border-b-[#F0F0F0] cursor-pointer capitalize`}
                      >
                        <div className="flex justify-between items-center">
                          <span>{item} </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="pb-[53px]">
                <h5
                  className="text-[20px] text-primary font-bold font-dmsans pb-[35px] flex justify-between items-center"
                  onClick={() => {
                    setColorShow(!colorShow);
                  }}
                >
                  <span>Shop by Color</span>
                  {colorShow ? (
                    <span>
                      <IoMdArrowDropdown className="text-[20px]" />
                    </span>
                  ) : (
                    <span>
                      <IoMdArrowDropup className="text-[20px]" />
                    </span>
                  )}
                </h5>
                {colorShow && (
                  <ul>
                    <li className="flex items-center gap-x-[10px] text-[16px] text-secondary font-dmsans font-normal pb-[20px] border-b-[#F0F0F0] border-b-[1px]">
                      <div className="h-[11px] w-[11px] rounded-full bg-[#000]"></div>
                      <span>Color 1</span>
                    </li>
                    <li className="flex items-center gap-x-[10px] text-[16px] text-secondary font-dmsans font-normal py-[20px] border-b-[#F0F0F0] border-b-[1px]">
                      <div className="h-[11px] w-[11px] rounded-full bg-[#FF8686]"></div>
                      <span>Color 2</span>
                    </li>
                    <li className="flex items-center gap-x-[10px] text-[16px] text-secondary font-dmsans font-normal py-[20px] border-b-[#F0F0F0] border-b-[1px]">
                      <div className="h-[11px] w-[11px] rounded-full bg-[#7ED321]"></div>
                      <span>Color 3</span>
                    </li>
                    <li className="flex items-center gap-x-[10px] text-[16px] text-secondary font-dmsans font-normal py-[20px] border-b-[#F0F0F0] border-b-[1px]">
                      <div className="h-[11px] w-[11px] rounded-full bg-[#B6B6B6]"></div>
                      <span>Color 4</span>
                    </li>
                    <li className="flex items-center gap-x-[10px] text-[16px] text-secondary font-dmsans font-normal py-[20px] border-b-[#F0F0F0] border-b-[1px]">
                      <div className="h-[11px] w-[11px] rounded-full bg-[#15CBA5]"></div>
                      <span>Color 5</span>
                    </li>
                  </ul>
                )}
              </div>
              <div className="pb-[53px]">
                <h5
                  className="text-[20px] text-primary font-bold font-dmsans pb-[15px] flex justify-between items-center"
                  onClick={() => {
                    setBrandShow(!brandShow);
                  }}
                >
                  <span>Shop by Brand</span>
                  {brandShow ? (
                    <span>
                      <IoMdArrowDropdown className="text-[20px]" />
                    </span>
                  ) : (
                    <span>
                      <IoMdArrowDropup className="text-[20px]" />
                    </span>
                  )}
                </h5>
                {brandShow && (
                  <ul>
                    {brand.map((item, index) => (
                      <li
                        key={`${item}-${index}`}
                        onClick={() => handleBrand(item)}
                        className={`${
                          item === activeCategory
                            ? "bg-primary text-white pl-2 "
                            : "bg-white"
                        } text-[16px] text-secondary font-dmsans font-normal py-[20px] border-b-[#F0F0F0] border-b-[1px] cursor-pointer`}
                      >
                        {item ? item : "Unknown Brand"}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="pb-[53px]">
                <h5
                  className="text-[20px] text-primary font-bold font-dmsans pb-[15px] flex justify-between items-center"
                  onClick={() => {
                    setPriceShow(!priceShow);
                  }}
                >
                  <span>Shop by Price</span>
                  {priceShow ? (
                    <span>
                      <IoMdArrowDropdown className="text-[20px]" />
                    </span>
                  ) : (
                    <span>
                      <IoMdArrowDropup className="text-[20px]" />
                    </span>
                  )}
                </h5>
                {priceShow && (
                  <ul>
                    <li className=" text-[16px] text-secondary font-dmsans font-normal py-[20px] border-b-[#F0F0F0] border-b-[1px]">
                      $0.00 - $9.99
                    </li>
                    <li className=" text-[16px] text-secondary font-dmsans font-normal py-[20px] border-b-[#F0F0F0] border-b-[1px]">
                      $10.00 - $19.99
                    </li>
                    <li className=" text-[16px] text-secondary font-dmsans font-normal py-[20px] border-b-[#F0F0F0] border-b-[1px]">
                      $20.00 - $29.99
                    </li>
                    <li className=" text-[16px] text-secondary font-dmsans font-normal py-[20px] border-b-[#F0F0F0] border-b-[1px]">
                      $30.00 - $39.99
                    </li>
                    <li className=" text-[16px] text-secondary font-dmsans font-normal py-[20px] border-b-[#F0F0F0] border-b-[1px]">
                      $40.00 - $69.99
                    </li>
                  </ul>
                )}
              </div>
              <div className="">
                <button
                  onClick={resetFilters}
                  className="bg-primary text-white px-4 py-2 rounded font-dmsans hover:bg-primary/80"
                >
                  Reset Filters
                </button>
              </div>
            </div>
            <div className="w-[72%]">
              <div className="flex justify-between pb-[60px]">
                <div className="1/2 flex gap-x-[20px]">
                  <div
                    onClick={() => setActiveList("")}
                    className={`${
                      activeList === ""
                        ? "relative text-white w-[36px] h-[36px] border-[1px] border-[#F0F0F0] hover:bg-primary bg-primary"
                        : "relative text-[#737373] w-[36px] h-[36px] border-[1px] border-[#F0F0F0] hover:bg-primary hover:text-white"
                    }`}
                  >
                    <HiSquares2X2 className="text-[24px]  absolute top-[50%] left-[50%] transform-[translate(-50%,-50%)] " />
                  </div>
                  <div
                    onClick={handleList}
                    className={`${
                      activeList === "active"
                        ? "relative w-[36px] h-[36px] border-[1px] border-[#F0F0F0] hover:bg-primary  bg-primary text-white hover:text-white"
                        : "relative w-[36px] h-[36px] border-[1px] border-[#F0F0F0] hover:bg-primary text-[#737373] hover:text-white"
                    }`}
                  >
                    <FaThList className="text-[18px]  absolute top-[50%] left-[50%] transform-[translate(-50%,-50%)] " />
                  </div>
                </div>
                <div className="1/2 flex gap-x-[40px]">
                  <div>
                    <label className="text-[16px] text-secondary font-dmsans font-normal pr-[14px]">
                      Sort by:
                    </label>

                    <select className="h-[36px] w-[239px] border-[#F0F0F0] border-[1px] text-[16px] text-secondary font-dmsans font-normal outline-none">
                      <option>Default</option>
                      <option>Name(A &gt; Z)</option>
                      <option>Name(Z &gt; A)</option>
                      <option>Price(Low &gt; High)</option>
                      <option>Price(High &gt; Low)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[16px] text-secondary font-dmsans font-normal pr-[14px]">
                      Show:
                    </label>
                    <select
                      value={perPage}
                      onChange={handleShow}
                      className="h-[36px] w-[139px] border-[#F0F0F0] border-[1px] text-[16px] text-secondary font-dmsans font-normal outline-none"
                    >
                      <option value="6">6</option>
                      <option value="12">12</option>
                      <option value="18">18</option>
                      <option value="24">24</option>
                      <option value="30">30</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <Products
                  allData={allData}
                  cateFilter={cateFilter}
                  activeList={activeList}
                  showAll={showAll}
                  setShowAll={setShowAll}
                />
              </div>
              <div>
                <Pagination
                  pageNumber={pageNumber}
                  paginate={paginate}
                  data={data}
                  perPage={perPage}
                  currentPage={currentPage}
                  cateFilter={cateFilter}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Shop;
