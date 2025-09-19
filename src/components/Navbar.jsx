import React, { useContext, useEffect, useRef, useState } from "react";
import Container from "./Container";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import CartImg from "../assets/cartimg.png";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
import { ApiData } from "./ContextApi";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../slice/cartSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartDetails.cartItems);

  let { data } = useContext(ApiData);
  let [category, setCategory] = useState([]);
  let [cateFilter, setCateFilter] = useState([]);

  let [cateShow, setCateShow] = useState(false);
  let [accountShow, setAccountShow] = useState(false);
  let [cartShow, setCartShow] = useState(false);
  let [user, setUser] = useState(null);

  let cateRef = useRef();
  let accRef = useRef();
  let cartRef = useRef();

  useEffect(() => {
    setCategory([...new Set(data.map((item) => item.category))]);
  }, [data]);

  let handleCategory = (citem) => {
    let categoryShow = data.filter((item) => item.category === citem);
    setCateFilter(categoryShow);
  };

  useEffect(() => {
    let user = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => user();
  }, []);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (cateRef.current.contains(e.target) == true) {
        setCateShow(!cateShow);
      } else {
        setCateShow(false);
      }
      if (accRef.current.contains(e.target) == true) {
        setAccountShow(!accountShow);
      } else {
        setAccountShow(false);
      }
      if (cartRef.current.contains(e.target) == true) {
        setCartShow(!cartShow);
      } else {
        setCartShow(false);
      }
    });
  }, [cateShow, accountShow, cartShow]);

  let handleLogout = async () => {
    await signOut(auth);
    setAccountShow(false);
    window.location.href = "/";
  };
  let handleRemove = (item) => {
    dispatch(removeCart(item));
  };

  return (
    <nav className="bg-navbg lg:py-[25px] py-3">
      <Container>
        <div className="flex  items-center lg:gap-0 gap-y-5">
          <div className="lg:w-1/4 w-1/6 relative">
            <div
              className="flex items-center gap-x-[10px] cursor-pointer lg:w-[150px] w-[18px] "
              ref={cateRef}
            >
              <div>
                <HiBars3BottomLeft className="text-[18px]" />
              </div>
              <h6 className="text-[14px] text-primary font-dmsans font-normal capitalize hidden lg:block">
                Shop by Category
              </h6>
            </div>
            {cateShow && (
              <div className=" lg:w-[250px] w-[160px] absolute lg:top-[60px] top-[40px] left-0 z-50 ">
                <ul className="bg-primary">
                  {category.map((item) => (
                    <li
                      key={item}
                      onMouseEnter={() => handleCategory(item)}
                      className="relative border-b-1 border-b-[#2D2D2D] lg:pl-[20px] pl-[16px] lg:py-[16px] py-[12px] hover:text-white hover:font-bold lg:hover:pl-[30px] hover:pl-[24px] duration-300 ease-in-out group capitalize"
                    >
                      <div className="lg:text-[14px] text-[12px] text-[rgba(255,255,255,0.7)] font-dmsans font-normal  ">
                        <div className="flex justify-between items-center">
                          <span>{item}</span>
                          <div className="pr-[20px]">
                            <MdKeyboardArrowRight />
                          </div>
                        </div>
                        <ul className="absolute top-0 left-[100%] bg-primary lg:w-[320px] w-[350px] scale-0 group-hover:scale-100">
                          {cateFilter.map((pitem) => (
                            <Link key={pitem.id} to={`/products/${pitem.id}`}>
                              <li className=" border-b-1 border-b-[#2D2D2D] lg:pl-[20px] pl-[16px] lg:py-[16px] py-[12px]  hover:text-white">
                                {pitem.title}
                              </li>
                            </Link>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="lg:w-2/4 w-3/6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Products"
                className="w-full bg-white lg:py-[16px] lg:px-[20px] py-[10px] px-[14px] text-input lg:text-[14px] text-[12px] font-normal font-dmsans capitalize border-none outline-none rounded-sm"
              />
              <div className="absolute top-[50%] right-[20px] translate-y-[-50%]">
                <FaSearch className="lg:text-[18px] text-[14px] text-primary" />
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 w-2/6">
            <div className="flex justify-end lg:gap-x-[40px] gap-x-[10px]">
              <div
                className="flex items-center lg:gap-x-[10px] gap-x-[2px] cursor-pointer relative "
                ref={accRef}
              >
                <FaUser className="lg:text-[18px] text-[16px] text-primary" />
                <IoMdArrowDropdown className="text-primary lg:text-[20px] text-[16px] " />
                {accountShow && (
                  <div className="lg:w-[200px] w-[150px] absolute lg:top-[60px] top-[40px] right-0  transition-all duration-300 ease-in-out origin-top-right z-50 shadow">
                    <ul className="bg-white">
                      {!user ? (
                        <>
                          <li className="group text-center hover:bg-[#2b2b2b] border-b-[1px] border-b-[#F0F0F0]">
                            <Link
                              to="/login"
                              className=" lg:text-[14px] text-[12px] text-primary block font-normal lg:py-[16px] py-[12px]  group-hover:text-white group-hover:font-bold"
                            >
                              Log In
                            </Link>
                          </li>
                          <li className="group text-center hover:bg-[#2b2b2b]">
                            <Link
                              to="/signup"
                              className="lg:text-[14px] text-[12px] text-primary block font-normal lg:py-[16px] py-[12px] group-hover:text-white group-hover:font-bold"
                            >
                              Sign Up
                            </Link>
                          </li>
                        </>
                      ) : (
                        <>
                          <li className="group text-center hover:bg-[#2b2b2b] border-b-[1px] border-b-[#F0F0F0]">
                            <Link
                              to="/myaccount"
                              className=" lg:text-[14px] text-[12px] text-primary block font-normal lg:py-[16px] py-[12px]  group-hover:text-white group-hover:font-bold"
                            >
                              My Account
                            </Link>
                          </li>
                          <li className="group text-center hover:bg-[#2b2b2b]">
                            <p
                              onClick={handleLogout}
                              className="lg:text-[14px] text-[12px] text-primary  font-normal lg:py-[16px] py-[12px] group-hover:text-white group-hover:font-bold"
                            >
                              Log Out
                            </p>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                )}
              </div>
              <div className="relative" ref={cartRef}>
                <FaShoppingCart className="lg:text-[18px] text-[16px] text-primary cursor-pointer" />
                <div
                  className={`${
                    cartItems.length
                      ? "w-[14px] h-[14px] bg-white  rounded-full absolute top-[-6px] right-[-6px] text-[12px] font-semibold font-dmsans text-primary flex items-center justify-center shadow-md"
                      : "hidden"
                  }`}
                >
                  {cartItems.length}
                </div>
                {cartShow && (
                  <div className="absolute lg:top-[60px] right-0 top-[40px] lg:w-[360px] w-[240px] bg-white border-[#F0F0F0] border-[1px] z-50">
                    {cartItems.length ? (
                      cartItems.map((item) => (
                        <div
                          className=" lg:py-[20px] py-[10px] lg:px-0 px-[10px] bg-[#F5F5F3] flex lg:justify-evenly justify-between items-center border-b border-b-[#F0F0F0]"
                          key={item.id}
                        >
                          <div className="w-[25%]">
                            <img
                              src={item.thumbnail}
                              className="w-[80px] h-[80px] "
                              alt=""
                            />
                          </div>
                          <div className="w-[55%] font-bold font-dmsans lg:text-[14px] text-[12px] text-primary lg:ml-0 ml-[-16px]">
                            <h4 className="lg:pb-[12px] pb-[2px]">
                              {item.title}
                            </h4>
                            <h5>${item.price}</h5>
                          </div>
                          <div className="w-[5%]">
                            <RxCross2
                              className="lg:text-[16px] text-[14px]"
                              onClick={() => handleRemove(item)}
                            />
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className=" lg:py-[20px] py-[10px] lg:px-0 px-[10px] bg-[#F5F5F3] flex lg:justify-evenly justify-between items-center border-b border-b-[#F0F0F0]">
                        <div className="w-[25%]">
                          <img
                            src={CartImg}
                            className="w-[80px] h-[80px] "
                            alt=""
                          />
                        </div>
                        <div className="w-[55%] font-bold font-dmsans lg:text-[14px] text-[12px] text-primary lg:ml-0 ml-[-16px]">
                          <h4 className="lg:pb-[12px] pb-[2px]">
                            Product Name
                          </h4>
                          <h5>$11</h5>
                        </div>
                        <div className="w-[5%]">
                          <RxCross2 className="lg:text-[16px] text-[14px]" />
                        </div>
                      </div>
                    )}

                    <div className="lg:p-[20px] p-[10px]">
                      <h3 className="lg:text-[16px] text-[14px] text-primary font-bold font-dmsans lg:pb-[14px] pb-[8px] ">
                        <span className=" text-secondary font-normal">
                          Subtotal:
                        </span>{" "}
                        $
                        {cartItems.reduce(
                          (index, item) => index + item.price,
                          0
                        )}
                      </h3>
                      <ul className="flex justify-between">
                        <li className="">
                          <Link
                            to="/cart"
                            className=" inline-block lg:text-[14px] text-[12px] text-primary font-bold font-dmsans lg:py-[16px] py-[12px] lg:px-[40px] px-[20px] border-[1px] border-border hover:bg-primary hover:text-white duration-300 ease-in-out"
                          >
                            View Cart
                          </Link>
                        </li>
                        <li className="">
                          <Link
                            to="/checkout"
                            className=" inline-block lg:text-[14px] text-[12px] text-primary font-bold font-dmsans lg:py-[16px] py-[12px] lg:px-[40px] px-[20px] border-[1px] border-border hover:bg-primary hover:text-white duration-300 ease-in-out"
                          >
                            Checkout
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
