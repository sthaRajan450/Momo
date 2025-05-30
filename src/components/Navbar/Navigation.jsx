import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import logo from "../../assests/logo.png";
import { BsCartFill } from "react-icons/bs";
import { CartContext } from "../../context/CartProvider";
import { useAuth0 } from "@auth0/auth0-react";

const Navigation = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);
  const { state } = useContext(CartContext);
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  useEffect(() => {
    const totalQuantity = state.reduce((acc, item) => acc + item.qty, 0);
    setQuantity(totalQuantity);
  }, [state]);

 
  const navigations = [
    { to: "/", name: "Home" },
    { to: "/about", name: "About" },
    { to: "/menu", name: "Menu" },
    { to: "/services", name: "Services" },
  ];

  return (
    <div className="flex justify-between items-center px-10 py-5 z-[99]">
      
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="Momos logo"
          onClick={() => navigate("/")}
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

        {!isAuthenticated ? (
          <>
            <NavLink to="/login" className="text-gray-600">
              Login
            </NavLink>
            <NavLink to="/register" className="text-gray-600">
              Register
            </NavLink>
          </>
        ) : (
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className="text-gray-600 cursor-pointer"
          >
            Logout
          </button>
        )}
      </div>

      
      <div className="relative w-8">
        <span className="absolute -top-3 right-0 bg-orange-500 text-white rounded-full w-6 h-6 text-center">
          {quantity}
        </span>
        <NavLink to="/cart">
          <BsCartFill className="text-2xl mr-10" />
        </NavLink>
      </div>

      
      <div className="flex items-center justify-between gap-5">
        <NavLink to="https://www.facebook.com/">
          <FaFacebook className="text-2xl opacity-60" />
        </NavLink>
        <NavLink to="https://www.instagram.com/">
          <FaSquareInstagram className="text-2xl opacity-60" />
        </NavLink>
        <NavLink to="https://www.tiktok.com/">
          <AiFillTikTok className="text-2xl opacity-60" />
        </NavLink>
        <NavLink
          to="/contact"
          className="bg-orange-600 px-2 rounded-3xl py-1 text-white"
        >
          Contact
        </NavLink>

       
        {isAuthenticated && (
          <NavLink to="/profile">
            <img
              src={user.picture}
              className="w-10 rounded-full"
              alt={user.name}
            />
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navigation;
