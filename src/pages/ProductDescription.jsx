import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { div } from "motion/react-client";
import CartProvider, { CartContext } from "../context/CartProvider";
const ProductDescription = () => {
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  // console.log(location.state);
  const { state, dispatch } = useContext(CartContext);

  const naviagte = useNavigate();
  return (
    <div className="w-full bg-gray-100">
      <div className="flex w-[80%] m-auto gap-10 px-20 py-10">
        <div className="w-1/2">
          <motion.img
            className="w-full rounded-lg"
            src={location.state?.image}
            alt=""
          />
        </div>
        <div className="w-1/2 space-y-5">
          <h1 className="text-3xl font-bold">{location.state?.name}</h1>
          <h2 className="text-xl font-bold ">
            RS{" "}
            <span className="text-orange-500">
              {location.state?.caloriesPerServing}
            </span>
          </h2>

          <p className="pr-30">{location.state?.instructions}</p>

          <div>
            <h1 className="my-3">Quantity</h1>
            <div className="flex gap-4 items-center ">
              <button
                className="bg-gray-400 p-2 w-10 h-10 "
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
              <p>{quantity}</p>
              <button
                className="bg-gray-400 p-2 w-10 h-10"
                onClick={() => quantity > 1 && setQuantity(quantity - 1)}
              >
                -
              </button>
            </div>
          </div>
          <div className="flex gap-10 ">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => {}}
              className="capitalize border px-4 py-2 rounded-lg bg-blue-500 text-white cursor-pointer hover:bg-blue-400 "
            >
              buy now
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                dispatch({
                  type: "add",
                  payload: { ...location.state },
                });
              }}
              className="capitalize border px-4 py-2 rounded-lg bg-orange-500 text-white cursor-pointer hover:bg-orange-400  "
            >
              add to cart
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
