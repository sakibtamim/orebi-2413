import React from "react";
import Container from "../components/Container";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <section className="lg:pt-[124px] pt-[40px] lg:pb-[140px] pb-[40px]">
      <Container>
        <div className="pb-[130px]">
          <h2 className="text-[49px] text-primary font-dmsans font-bold pb-[12px]">
            Sign up
          </h2>
          <div className="flex items-center gap-x-[8px] text-[12px] text-secondary font-normal font-dmsans">
            <Link to="/">Home</Link>
            <MdOutlineArrowForwardIos />

            <Link to="/signup">Sing up</Link>
          </div>
        </div>

        <div className="pb-[62px] border-b-[#F0F0F0] border-b-1">
          <p className="w-[45%] text-[16px] text-secondary font-dmsans font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the.
          </p>
        </div>

        <div className="pt-[58px]">
          <form action="">
            <div className="pb-[69px] border-b-[#F0F0F0] border-b-1">
              <h2 className="text-[39px] text-primary font-dmsans font-bold pb-[42px]">
                Returning Customer
              </h2>
              <div className="w-2/3 flex flex-wrap justify-between pb-[29px] gap-y-[24px]">
                <div className="flex flex-col gap-y-[10px] w-[48%]">
                  <label
                    htmlFor=""
                    className="text-[16px] text-primary font-dmsans font-bold"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
                  />
                </div>
                <div className="flex flex-col gap-y-[10px] w-[48%]">
                  <label
                    htmlFor=""
                    className="text-[16px] text-primary font-dmsans font-bold"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
                  />
                </div>
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
                <div className="flex flex-col gap-y-[10px] w-[48%]">
                  <label
                    htmlFor=""
                    className="text-[16px] text-primary font-dmsans font-bold"
                  >
                    Telephone
                  </label>
                  <input
                    type="tel"
                    placeholder="Your phone number"
                    className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
                  />
                </div>
              </div>
            </div>
            <div className=" pt-[58px] pb-[69px] border-b-[#F0F0F0] border-b-1">
              <h2 className="text-[39px] text-primary font-dmsans font-bold pb-[42px]">
                New Customer
              </h2>
              <div className="w-2/3 flex flex-wrap justify-between pb-[29px] gap-y-[24px]">
                <div className="flex flex-col gap-y-[10px] w-[48%]">
                  <label
                    htmlFor=""
                    className="text-[16px] text-primary font-dmsans font-bold"
                  >
                    Address 1
                  </label>
                  <input
                    type="text"
                    placeholder="4279 Zboncak Port Suite 6212"
                    className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
                  />
                </div>
                <div className="flex flex-col gap-y-[10px] w-[48%]">
                  <label
                    htmlFor=""
                    className="text-[16px] text-primary font-dmsans font-bold"
                  >
                    Address 2
                  </label>
                  <input
                    type="text"
                    placeholder="-"
                    className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
                  />
                </div>
                <div className="flex flex-col gap-y-[10px] w-[48%]">
                  <label
                    htmlFor=""
                    className="text-[16px] text-primary font-dmsans font-bold"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    placeholder="Your city"
                    className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
                  />
                </div>
                <div className="flex flex-col gap-y-[10px] w-[48%]">
                  <label
                    htmlFor=""
                    className="text-[16px] text-primary font-dmsans font-bold"
                  >
                    Post Code
                  </label>
                  <input
                    type="number"
                    placeholder="05228"
                    className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
                  />
                </div>
                <div className="flex flex-col gap-y-[10px] w-[48%]">
                  <label
                    htmlFor=""
                    className="text-[16px] text-primary font-dmsans font-bold"
                  >
                    Division
                  </label>
                  <select
                    name=""
                    id=""
                    className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
                  >
                    <option value="">Please select</option>
                    <option value="">Barisal</option>
                    <option value="">Chittagong</option>
                    <option value="">Dhaka</option>
                    <option value="">Khulna</option>
                    <option value="">Mymensingh</option>
                    <option value="">Rajshahi</option>
                    <option value="">Rangpur</option>
                    <option value="">Sylhet</option>
                  </select>
                </div>
                <div className="flex flex-col gap-y-[10px] w-[48%]">
                  <label
                    htmlFor=""
                    className="text-[16px] text-primary font-dmsans font-bold"
                  >
                    District
                  </label>
                  <select
                    name=""
                    id=""
                    className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
                  >
                    <option value="">Please select</option>
                    <option value="">Dhaka</option>
                    <option value="">Faridpur</option>
                    <option value="">Tangail</option>
                    <option value="">Gazipur</option>
                    <option value="">Narayanganj</option>
                    <option value="">Kishoreganj</option>
                    <option value="">Narsingdi</option>
                    <option value="">Munshiganj</option>
                    <option value="">Gopalganj</option>
                    <option value="">Shariatpur</option>
                    <option value="">Madaripur</option>
                    <option value="">Rajbari</option>
                    <option value="">Chittagong</option>
                    <option value="">Comilla</option>
                    <option value="">Noakhali</option>
                    <option value="">Rangamati</option>
                    <option value="">Bandarban</option>
                    <option value="">Khagrachhari</option>
                    <option value="">Brahmanbaria</option>
                    <option value="">Cox's Bazar</option>
                    <option value="">Chandpur</option>
                    <option value="">Lakshmipur</option>
                    <option value="">Feni</option>
                    <option value="">Rajshahi</option>
                    <option value="">Bogura</option>
                    <option value="">Pabna</option>
                    <option value="">Joypurhat</option>
                    <option value="">Sirajganj</option>
                    <option value="">Naogaon</option>
                    <option value="">Natore</option>
                    <option value="">Chapai Nawabganj</option>
                    <option value="">Jashore</option>
                    <option value="">Khulna</option>
                    <option value="">Kushtia</option>
                    <option value="">Satkhira</option>
                    <option value="">Jhenaidah</option>
                    <option value="">Bagerhat</option>
                    <option value="">Chuadanga</option>
                    <option value="">Magura</option>
                    <option value="">Narail</option>
                    <option value="">Meherpur</option>
                    <option value="">Barishal</option>
                    <option value="">Patuakhali</option>
                    <option value="">Bhola</option>
                    <option value="">Pirojpur</option>
                    <option value="">Barguna</option>
                    <option value="">Jhalokati</option>
                    <option value="">Sylhet</option>
                    <option value="">Sunamganj</option>
                    <option value="">Habiganj</option>
                    <option value="">Moulvibazar</option>
                    <option value="">Rangpur</option>
                    <option value="">Dinajpur</option>
                    <option value="">Gaibandha</option>
                    <option value="">Kurigram</option>
                    <option value="">Nilphamari</option>
                    <option value="">Thakurgaon</option>
                    <option value="">Lalmonirhat</option>
                    <option value="">Panchagarh</option>
                    <option value="">Mymensingh</option>
                    <option value="">Jamalpur</option>
                    <option value="">Netrokona</option>
                    <option value="">Sherpur</option>
                  </select>
                </div>
              </div>
            </div>

            <div className=" pt-[58px] pb-[69px] border-b-[#F0F0F0] border-b-1">
              <h2 className="text-[39px] text-primary font-dmsans font-bold pb-[42px]">
                Your Password
              </h2>
              <div className="w-2/3 flex flex-wrap justify-between pb-[29px] gap-y-[24px]">
                <div className="flex flex-col gap-y-[10px] w-[48%]">
                  <label
                    htmlFor=""
                    className="text-[16px] text-primary font-dmsans font-bold"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
                  />
                </div>
                <div className="flex flex-col gap-y-[10px] w-[48%]">
                  <label
                    htmlFor=""
                    className="text-[16px] text-primary font-dmsans font-bold"
                  >
                    Repeat Password
                  </label>
                  <input
                    type="password"
                    placeholder="Repeat password"
                    className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="pt-[65px] pb-[27px]">
              <div className="flex items-center gap-x-[16px] pb-[24px]">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="appearance-none h-3.5 w-3.5  border-1 border-secondary checked:bg-secondary checked:shadow-[inset_0_0_0_2px_white]"
                />
                <label className="text-[14px] text-secondary font-dmsans font-normal">
                  I have read and agree to the Privacy Policy
                </label>
              </div>
              <div className="flex items-center gap-x-[33px]">
                <label className="text-[14px] text-secondary font-dmsans font-normal">
                  Subscribe Newsletter
                </label>
                <div className="flex items-center gap-x-[16px]">
                  <input
                    type="radio"
                    name="answer"
                    id="yes"
                    className="appearance-none h-3.5 w-3.5  border-1 border-secondary checked:bg-secondary checked:shadow-[inset_0_0_0_2px_white]"
                  />
                  <label
                    htmlFor="yes"
                    className="text-[14px] text-secondary font-dmsans font-normal"
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center gap-x-[16px]">
                  <input
                    type="radio"
                    name="answer"
                    id="no"
                    className="appearance-none h-3.5 w-3.5  border-1 border-secondary checked:bg-secondary checked:shadow-[inset_0_0_0_2px_white]"
                  />
                  <label
                    htmlFor="no"
                    className="text-[14px] text-secondary font-dmsans font-normal"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>

            <button className="text-[14px] text-primary font-bold font-dmsans py-[14px] px-[80px] border-1 border-border hover:bg-primary hover:text-white">
              Sign up
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Signup;
