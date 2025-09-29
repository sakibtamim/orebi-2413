import React, { useState } from "react";
import Container from "../components/Container";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../components/firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  let [fname, setFName] = useState("");
  let [lname, setLName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [rPassword, setRPassword] = useState("");
  let [phone, setPhone] = useState("");
  let [address1, setAddress1] = useState("");
  let [address2, setAddress2] = useState("");
  let [city, setCity] = useState("");
  let [postCode, setPostCode] = useState("");
  let [division, setDivision] = useState("");
  let [district, setDistrict] = useState("");

  let navigate = useNavigate();

  let handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== rPassword) {
      toast.error("Passwords do not match!", { position: "top-center" });
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      let user = auth.currentUser;

      if (user) {
        await setDoc(doc(db, "User", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          phone: phone,
          address1: address1,
          address2: address2,
          city: city,
          postCode: postCode,
          division: division,
          district: district,
        });
      }

      toast.success("User Registered Successfully!", {
        position: "top-center",
      });

      navigate("/login");
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
      });
    }
  };

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
          <form action="" onSubmit={handleSignUp}>
            <div className="pb-[69px] border-b-[#F0F0F0] border-b-1">
              <h2 className="text-[39px] text-primary font-dmsans font-bold pb-[42px]">
                Your Personal Details
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
                    required
                    className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
                    onChange={(e) => setFName(e.target.value)}
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
                    required
                    className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
                    onChange={(e) => setLName(e.target.value)}
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
                    required
                    className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
                    onChange={(e) => setEmail(e.target.value)}
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
                    required
                    className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className=" pt-[58px] pb-[69px] border-b-[#F0F0F0] border-b-1">
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
                    required
                    className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
                    onChange={(e) => setAddress1(e.target.value)}
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
                    onChange={(e) => setAddress2(e.target.value)}
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
                    required
                    className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
                    onChange={(e) => setCity(e.target.value)}
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
                    type="text"
                    placeholder="5228"
                    required
                    className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
                    onChange={(e) => setPostCode(e.target.value)}
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
                    required
                    className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
                    onChange={(e) => setDivision(e.target.value)}
                  >
                    <option value="">Please select</option>
                    <option value="Barisal">Barisal</option>
                    <option value="Chittagong">Chittagong</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Mymensingh">Mymensingh</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Rangpur">Rangpur</option>
                    <option value="Sylhet">Sylhet</option>
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
                    required
                    className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
                    onChange={(e) => setDistrict(e.target.value)}
                  >
                    <option value="">Please select</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Faridpur">Faridpur</option>
                    <option value="Tangail">Tangail</option>
                    <option value="Gazipur">Gazipur</option>
                    <option value="Narayanganj">Narayanganj</option>
                    <option value="Kishoreganj">Kishoreganj</option>
                    <option value="Narsingdi">Narsingdi</option>
                    <option value="Munshiganj">Munshiganj</option>
                    <option value="Gopalganj">Gopalganj</option>
                    <option value="Shariatpur">Shariatpur</option>
                    <option value="Madaripur">Madaripur</option>
                    <option value="Rajbari">Rajbari</option>
                    <option value="Chittagong">Chittagong</option>
                    <option value="Comilla">Comilla</option>
                    <option value="Noakhali">Noakhali</option>
                    <option value="Rangamati">Rangamati</option>
                    <option value="Bandarban">Bandarban</option>
                    <option value="Khagrachhari">Khagrachhari</option>
                    <option value="Brahmanbaria">Brahmanbaria</option>
                    <option value="Cox's Bazar">Cox's Bazar</option>
                    <option value="Chandpur">Chandpur</option>
                    <option value="Lakshmipur">Lakshmipur</option>
                    <option value="Feni">Feni</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Bogura">Bogura</option>
                    <option value="Pabna">Pabna</option>
                    <option value="Joypurhat">Joypurhat</option>
                    <option value="Sirajganj">Sirajganj</option>
                    <option value="Naogaon">Naogaon</option>
                    <option value="Natore">Natore</option>
                    <option value="Chapai Nawabganj">Chapai Nawabganj</option>
                    <option value="Jashore">Jashore</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Kushtia">Kushtia</option>
                    <option value="Satkhira">Satkhira</option>
                    <option value="Jhenaidah">Jhenaidah</option>
                    <option value="Bagerhat">Bagerhat</option>
                    <option value="Chuadanga">Chuadanga</option>
                    <option value="Magura">Magura</option>
                    <option value="Narail">Narail</option>
                    <option value="Meherpur">Meherpur</option>
                    <option value="Barishal">Barishal</option>
                    <option value="Patuakhali">Patuakhali</option>
                    <option value="Bhola">Bhola</option>
                    <option value="Pirojpur">Pirojpur</option>
                    <option value="Barguna">Barguna</option>
                    <option value="Jhalokati">Jhalokati</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="Sunamganj">Sunamganj</option>
                    <option value="Habiganj">Habiganj</option>
                    <option value="Moulvibazar">Moulvibazar</option>
                    <option value="Rangpur">Rangpur</option>
                    <option value="Dinajpur">Dinajpur</option>
                    <option value="Gaibandha">Gaibandha</option>
                    <option value="Kurigram">Kurigram</option>
                    <option value="Nilphamari">Nilphamari</option>
                    <option value="Thakurgaon">Thakurgaon</option>
                    <option value="Lalmonirhat">Lalmonirhat</option>
                    <option value="Panchagarh">Panchagarh</option>
                    <option value="Mymensingh">Mymensingh</option>
                    <option value="Jamalpur">Jamalpur</option>
                    <option value="Netrokona">Netrokona</option>
                    <option value="Sherpur">Sherpur</option>
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
                    required
                    className="pb-[16px] text-[14px] text-secondary font-dmsans font-normal border-b-[1px] border-b-[#F0F0F0] outline-none"
                    onChange={(e) => setPassword(e.target.value)}
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
                    required
                    onChange={(e) => setRPassword(e.target.value)}
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
                  required
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
