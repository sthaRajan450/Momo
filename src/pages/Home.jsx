import React, { useState, useEffect, useContext } from "react";
import circle from "../assests/circle.png";
import momo from "../assests/momo.png";
import person from "../assests/person.png";
import backOne from "../assests/backOne.jpg";
import rect from "../assests/rect.png";
import party from "../assests/party.png";
import categring from "../assests/categring.png";
import livia from "../assests/livia.png";
import quality from "../assests/quality.png";
import buffmomo from "../assests/buffmomo.png";
import bufffrymomo from "../assests/bufffrymomo.png";
import buffCmomo from "../assests/buffCmomo.png";

import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../components/Button/Button";
import Form from "../components/Form/Form";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoIosTime } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaArrowLeftLong } from "react-icons/fa6";
import { CartContext } from "../context/CartProvider";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const getProducts = async (cuisine = "American") => {
    let response = await fetch("https://dummyjson.com/recipes");
    response = await response.json();
    console.log(response.recipes);
    setProducts(response.recipes);

    setFilteredProduct(
      response.recipes.filter((product) => product.cuisine == cuisine)
    );
  };
  useEffect(() => {
    getProducts();
  }, []);

  const { state, dispatch } = useContext(CartContext);

  return (
    <div>
      <div className="w-full h-screen  flex overflow-hidden ">
        <div className="w-1/2 flex justify-center items-center -mt-40">
          <div className="leading-[4vw]">
            <p className="uppercase opacity-60 ">restaurant</p>
            <h1 className="capitalize text-6xl font-bold">
              The
              <span className={`relative bg-${backOne}`}> #one</span>
              <br /> momos
              <span className="text-orange-500"> restaurant</span>
            </h1>
            <p>
              More than
              <span className="text-orange-500 font-semibold text-xl ">
                &nbsp;20+ varieties
              </span>
              of momo available for you
            </p>

            <Button text=" Explore food menu " icon={<FaArrowRightLong />} />
          </div>
        </div>
        <div className="w-1/2  flex items-center relative">
          <img className="w-98 absolute right-0 -top-10" src={circle} alt="" />
          <img
            className="w-[550px] pl-10 absolute top-[20%]"
            src={momo}
            alt=""
          />
        </div>
      </div>
      <div className="flex w-full h-screen  items-center p-20 ">
        <div className="w-1/2">
          <div className="relative w-[550px] h-[700px]    flex justify-center items-center">
            <img
              className="h-[700px] z-[20] absolute -top-13 bottom-0"
              src={person}
              alt="person"
            />
            <img
              className="h-[600px] z-[10] absolute"
              src={rect}
              alt="background rectangle"
            />
          </div>
        </div>
        <div className="w-1/2 space-y-8 ">
          <h1 className="capitalize text-4xl font-semibold  ">
            Why customers <span className="text-orange-500 ">love us</span>
          </h1>
          <div>
            <p className="w-[75%] opacity-70">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
              quas mollitia dolorum eius culpa asperiores, nulla recusandae
              dolore repellat assumenda maiores, non tempore architecto.
              Exercitationem, mollitia! Tempore laboriosam non incidunt?
            </p>
          </div>

          <Button text="Explore our story" icon={<FaArrowRightLong />} />
        </div>
      </div>
      <div className="w-full   flex flex-col">
        <div className="text-center space-y-5">
          <h1 className="text-4xl font-semibold capitalize">
            our <span className="text-orange-500 ">most popular</span> recipes
          </h1>
          <p className="opacity-70">
            Browse through a varieties of recipes with fresh ingredients
            selected only from the best places
          </p>
        </div>
        <div className="flex justify-center gap-10 my-5">
          {["American", "Italian", "Asian"].map((item, index) => (
            <button
              className="border-2 rounded-3xl  px-6 py-2"
              key={index}
              onClick={() => {
                getProducts(item);
              }}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex justify-center items-center gap-20">
          <div className="border rounded-full p-3 cursor-pointer">
            <FaArrowLeftLong />
          </div>
          <div className="flex justify-center gap-50 my-10  flex-wrap">
            {/* {[
              {
                img: buffmomo,
                title: "buff momo",
                price: 150,
              },
              {
                img: bufffrymomo,
                title: "buff fry momo",
                price: 180,
              },
              {
                img: buffCmomo,
                title: "buff c momo",
                price: 200,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center shrink-none"
              >
                <img className="h-40 " src={item.img} alt="" />
                <h1 className="capitalize font-bold text-xl my-3">
                  {item.title}
                </h1>
                <p className="font-bold text-xl">
                  रू<span className="text-orange-500  "> {item.price}</span>
                </p>
              </div>
            ))} */}
            {filteredProduct.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center shadow-xl rounded-lg p-4 shadow-gray-600 "
              >
                <img className="h-50 " src={product.image} alt="" />
                <h1 className="capitalize font-bold text-xl my-3">
                  {product.name}
                </h1>
                <p>{product.cuisine}</p>
              </div>
            ))}
          </div>
          <div className="border rounded-full p-3 cursor-pointer">
            <FaArrowRightLong />
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            navi="/menu"
            text="explore our menu"
            icon={<FaArrowRightLong />}
          />
        </div>
      </div>
      <div className="bg-[#F7F9FC] flex flex-col items-center">
        <h1 className="text-center text-4xl font-semibold py-10">
          <span className="text-orange-500 ">We Offer People</span> The Service
          They Want
        </h1>

        <div className="h-[600px]  w-full bg-black text-white flex flex-col  items-center  justify-center space-y-5">
          <h1 className="text-5xl font-bold">Process behind the making</h1>
          <p className="text-2xl">
            See how only chefs cooks only the best momos
          </p>
          <Button text="watch the video" icon={<MdOutlinePlayCircleFilled />} />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center gap-20 my-10 ">
          {[
            {
              img: quality,
              h1: "quality food",
              p: "Only the best food with top quality products and ingredients",
            },
            {
              img: party,
              h1: "private party",
              p: "Get the best food for all your private parties and gatherings",
            },
            {
              img: categring,
              h1: "categring",
              p: "Get the best food for any occasions and gatherings",
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-5">
              <img src={item.img} alt="" width="90px " />
              <h1 className="capitalize text-2xl font-semibold">{item.h1}</h1>
              <p className="px-20 text-center">{item.p}</p>
            </div>
          ))}
        </div>
        <Button text="explore our services" icon={<FaArrowRightLong />} />
      </div>
      <div className="flex justify-center px-20 items-center mt-20 py-10 bg-[#F7F9FC]">
        <div className="w-1/2 ml-30">
          <h1 className="text-4xl font-semibold capitalize">
            200+ <span className="text-orange-500">happy customers</span>
          </h1>
          <h2 className="text-green-700 text-xl font-bold">
            What our customers say about us
          </h2>
          <p className="w-[80%] font-mono my-8">
            “Only the best momo you can find in the market. Different Varieties
            of momo to choose from. Will be visiting again soon”
          </p>
          <h1 className="font-bold text-xl">Livia Dias</h1>
        </div>
        <div className="w-1/2">
          <img className="h-[500px] " src={livia} alt="" />
        </div>
        <div></div>
      </div>
      <div>
        <h1 className="text-4xl font-semibold  capitalize text-center">
          get <span className="text-orange-500">in touch</span>
        </h1>
        <p className="text-center text-xl text-green-800 font-semibold ">
          Our Friendly team would love to hear from you
        </p>

        <div className="flex w-3/4 b m-auto h-[600px] p-10  mb-20">
          <div className="w-1/2 bg-[#0C6967] text-white px-10 py-5 rounded-lg">
            <div className="mb-6">
              <h1 className="flex items-center mb-3">
                <FaLocationDot />
                Our Address
              </h1>
              <p>New Baneshwor, Kathmandu, Bagmati, Nepal</p>
            </div>
            <div className="mb-10">
              <h1 className="flex items-center mb-3">
                <IoCall />
                Our Contacts
              </h1>
              <div className="flex gap-20 space-y-2">
                <div>
                  <h1>Mobile</h1>
                  <p>980 5689789</p>
                  <p>9841 275897</p>
                </div>
                <div>
                  <h1>Landline</h1>
                  <p>01-4783972</p>
                </div>
              </div>
              <div className="mt-5">
                <h1 className="flex items-center mb-3 ">
                  <IoIosTime />
                  Our Service Time
                </h1>
                <div className="flex gap-20 space-y-2">
                  <div>
                    <h1>MON - FRI</h1>
                    <p>10 am - 8 pm</p>
                  </div>
                  <div>
                    <h1>SAT - SUN</h1>
                    <p>Closed</p>
                  </div>
                </div>
              </div>
              <div className="mt-20">
                <h1>Get in touch in social networks</h1>
                <div className="flex text-2xl gap-9 mt-3">
                  <FaFacebook />
                  <FaInstagramSquare />
                  <AiFillTikTok />
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 ">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
