import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import logo from "../../assests/logo.png";
import { BsCartFill } from "react-icons/bs";
import { CartContext } from "../../context/CartProvider";
const Navigation = () => {
  const navigations = [
    {
      to: "/",
      name: "Home",
    },
    {
      to: "/about",
      name: "About",
    },

    {
      to: "/login",
      name: "Login",
    },
    {
      to: "/menu",
      name: "Menu",
    },
    {
      to: "/register",
      name: "Register",
    },
    {
      to: "/services",
      name: "Services",
    },
    {
      to: "/userprofile",
      name: "userProfile",
    },
  ];
  
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);
  const { state, dispatch } = useContext(CartContext);
  console.log(state)
  useEffect(() => {
    const totalQuantity = state.reduce((acc, item) => acc + item.qty, 0);
    setQuantity(totalQuantity);
  }, [state]);
 
  return (
    <div className="flex justify-between px-10 py-5 z-[99]">
      <div className=" flex items-center gap-2">
        <img
          src={logo}
          alt=""
          onClick={() => {
            navigate("/");
          }}
          width="25px"
        />
        <NavLink className="text-green-700 font-bold text-xl" to="/">
          momos
        </NavLink>
      </div>
      <div className="flex gap-10">
        {navigations.map((navigation, index) => (
          <NavLink to={navigation.to} key={index} className="text-gray-600">
            {navigation.name}
          </NavLink>
        ))}
      </div>
      <div className="relative  w-8">
        <span className="absolute -top-3 right-0 bg-orange-500 text-white rounded-full w-6 h-6 x text-center">{quantity}</span>
        <NavLink to="/cart">
          <BsCartFill className="text-2xl mr-10" />
        </NavLink>
      </div>

      <div className="flex items-center justify-between gap-5">
        <NavLink to="https://www.facebook.com/">
          <FaFacebook className="text-2xl  opacity-60" />
        </NavLink>
        <NavLink to="https://www.instagram.com/">
          <FaSquareInstagram className="text-2xl  opacity-60" />
        </NavLink>
        <NavLink to="https://www.tiktok.com/">
          <AiFillTikTok className="text-2xl  opacity-60" />
        </NavLink>
        <NavLink
          to="/contact"
          className="bg-orange-600 px-2 rounded-3xl py-1 text-white"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
