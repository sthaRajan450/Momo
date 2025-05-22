import React from "react";
import logo from "../../assests/logo.png";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex px-20 py-10 text-gray-500 gap-20 bg-[#F7F9FC] ">
      <div className="w-1/2 ">
        <div className="flex items-center gap-2">
          <img className="h-8" src={logo} alt="" />
          <span className="text-xl font-bold text-green-800">momos</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non,
          explicabo soluta cumque aperiam nam vel, impedit, ducimus dolorem
          dignissimos odit beatae. Ea quod ad laborum deleniti autem, eum soluta
          alias?
        </p>
      </div>
      <div className="w-1/2 flex">
        <div className="w-1/3  ">
          <h1 className="text-xl font-bold text-green-800">momos</h1>
          <div className="flex flex-col">
            <Link to="/about">About Us</Link>
            <Link to="/menu">Our Menu</Link>
            <Link to="/services">Our Services</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
        <div className="w-1/3 ">
          <h1 className="text-xl font-bold text-green-800">Legals</h1>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Support</p>
        </div>
        <div className="w-1/3 ">
          <h1 className="text-xl font-bold text-green-800">Follow Us</h1>
          <div className="flex text-4xl gap-5">
            <div>
              <FaFacebook />
              <FaSquareInstagram />
              <FaLinkedin />
            </div>
            <div>
              <AiFillTwitterCircle />
              <FaYoutube />
              <AiFillTikTok />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
