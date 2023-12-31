import logo from "../assets/logo.png";
import { IoIosCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import playstore from "../assets/footer/play_store.svg";
import browser from "../assets/footer/browser.svg";
import apple from "../assets/footer/apple.svg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-blue-50">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 p-10 text-center font-poppin font-semibold text-gray-500 md:grid-cols-4 ">
        {/* 1 */}
        <div className="border-gray-200 p-4 lg:border-r">
          <img src={logo} className="cursor-pointer p-2" />
          <div className="p-1">
            <IoIosCall className="inline" /> <a href="">9876543210</a>
          </div>
          <div className="p-1">
            <IoIosMail className="inline" /> <a href="">support@doctime.com</a>
          </div>
          <div className="p-1">
            <FaLocationDot className="inline" />
            <address>2 KNP st, Ring Road, dhaka</address>
          </div>
          <div className="flex flex-row justify-center py-4">
            <FaFacebook size={30} className="m-2" />
            <FaInstagram size={30} className="m-2" />
            <FaTwitter size={30} className="m-2" />
            <FaYoutube size={30} className="m-2" />
          </div>
        </div>
        {/* 2 */}
        <div className="flex flex-col border-gray-200 p-6 text-lg lg:border-r">
          <a href="" className="py-2">
            About us
          </a>
          <a href="" className="py-2">
            How it works
          </a>
          <a href="" className="py-2">
            For Doctors
          </a>
          <a href="" className="py-2">
            Courses
          </a>
          <a href="" className="py-2">
            Blog
          </a>
        </div>
        {/* 3 */}
        <div className="flex flex-col border-gray-200 p-6 text-lg lg:border-r">
          <a href="" className="py-2">
            Contact Us
          </a>
          <a href="" className="py-2">
            Terms &amp; Conditions
          </a>
          <a href="" className="py-2">
            Privacy Policy
          </a>
          <a href="" className="py-2">
            Data &amp; Research
          </a>
          <a href="" className="py-2">
            Help
          </a>
        </div>
        {/* 4 */}
        <div className="flex flex-col p-7 ">
          <h1>Download our app</h1>
          <img src={playstore} className="h-20 cursor-pointer p-3" />
          <img src={apple} className="h-20 cursor-pointer p-3" />
          <img src={browser} className="h-20 cursor-pointer p-3" />
        </div>
      </div>
      <h1 className="border-t-1 m-auto max-w-[1240px] border-t border-gray-200 p-3 text-center font-poppin text-xs text-gray-500 lg:text-base">
        Copyright &copy; {new Date().getFullYear()}
        <span className="text-blue-500"> Doc</span>Time. All rights reserved.
      </h1>
    </div>
  );
};

export default Footer;
