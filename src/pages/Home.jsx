import React from "react";
import vector from "../assests/vector.png";
import momo from "../assests/momo.png";
import { FaArrowRightLong } from "react-icons/fa6";
const Home = () => {
  return (
    <div>
      <div className="w-full h-screen  flex overflow-hidden ">
        <div className="w-1/2 flex justify-center items-center -mt-40">
          <div className="leading-[4vw]">
            <p className="uppercase opacity-70">restaurant</p>
            <h1 className="capitalize text-6xl font-bold">
              The <span>#one </span> <br /> momo{" "}
              <span className="text-orange-500">restaurant</span>
            </h1>
            <p>
              More than{" "}
              <span className="text-orange-500 font-semibold text-xl ">
                20+ varieties
              </span>{" "}
              of momo available for you
            </p>
            <button className="bg-[#0C6967] px-4 rounded-4xl text-white cursor-pointer flex items-center gap-3">
              Explore food menu <FaArrowRightLong />
            </button>
          </div>
        </div>
        <div className="w-1/2  flex items-center relative">
          <img className="w-98 absolute right-0 -top-10" src={vector} alt="" />
          <img className="w-[550px] pl-10 absolute top-[20%]" src={momo} alt="" />
        </div>
      </div>
      <div>box-2</div>
      <div>box-3</div>
      <div>box-4</div>
      <div>box-5</div>
      <div>box-6</div>
      <div>box-7</div>
    </div>
  );
};

export default Home;
