import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartProvider";
import { div, h1 } from "motion/react-client";
import { Navigate, useNavigate } from "react-router-dom";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const { state, dispatch } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    const totalPrice = state.reduce(
      (acc, item) => acc + item.caloriesPerServing * item.qty,
      0
    );
    setTotal(totalPrice);

    const totalQuantity = state.reduce((acc, item) => acc + item.qty, 0);
    setQuantity(totalQuantity);
  }, [state]);

  return (
    <div className="px-30 py-10 w-full flex justify-between ">
      {state.length > 0 ? (
        <div className="w-full flex relative">
          <button
            className="absolute top-0 right-[50%] text-blue-500 cursor-pointer underline"
            onClick={() => {
              dispatch({ type: "clearCart" });
            }}
          >
            Clear All Items
          </button>
          <div className="w-1/2">
            {state.map((item) => (
              <div key={item.id} className="w-full ">
                <div className="flex  gap-10 mb-5 items-center ">
                  <img className="w-40 rounded-lg" src={item.image} alt="" />
                  <div className="space-y-5  w-80">
                    <h1 className="text-xl font-semibold">{item.name}</h1>

                    <div className="flex items-center gap-5 ">
                      <button
                        className="h-8 w-8  cursor-pointer bg-gray-400 "
                        onClick={() =>
                          dispatch({ type: "increment", payload: item.id })
                        }
                      >
                        +
                      </button>
                      <h1>{item.qty}</h1>
                      <button
                        className="h-8 w-8  cursor-pointer bg-gray-400 "
                        onClick={() => {
                          if (item.qty > 1) {
                            dispatch({ type: "decrement", payload: item.id });
                          }
                        }}
                      >
                        -
                      </button>
                    </div>
                    <h2 className="text-2xl font-bold text-orange-500  ">
                      Rs {item.caloriesPerServing}
                    </h2>
                  </div>
                  <button
                    className="text-red-500 cursor-pointer "
                    onClick={() => {
                      dispatch({ type: "remove", payload: item.id });
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="border w-1/3 bg-gray-300  p-4 space-y-5 rounded-lg  m-auto ">
            <h1 className="text-center text-xl font-bold">Order Summary</h1>
            <div className="text-2xl flex font-mono  justify-between">
              <h1>Subtotal:({quantity})</h1>
              <h1>Rs.{total}</h1>
            </div>
            <div className="text-2xl flex  font-mono justify-between">
              <h1>Total</h1>
              <h1>Rs.{total}</h1>
            </div>

            <button
              className="bg-orange-500 p-3 rounded-lg cursor-pointer text-white w-full"
              onClick={() => {
                navigate("/payment", { state: total });
              }}
            >
              Procceed to checkout
            </button>
          </div>
        </div>
      ) : (
        <div>No items on cart</div>
      )}
    </div>
  );
};

export default Cart;
