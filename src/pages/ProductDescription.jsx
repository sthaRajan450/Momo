import React from "react";
import { useLocation } from "react-router-dom";

const ProductDescription = () => {
  const location = useLocation();
  console.log(location.state);

  return (
    <div className="flex w-full gap-10 px-20 py-10">
      <div className="w-1/2">
        <img className="w-full rounded-lg" src={location.state.image} alt="" />
      </div>
      <div className="w-1/2 space-y-5">
        <h1 className="text-3xl font-bold">{location.state.name}</h1>
        <h2 className="text-xl font-bold ">
          RS{" "}
          <span className="text-orange-500">
            {location.state.caloriesPerServing}
          </span>
        </h2>

        <p className="pr-30">{location.state.instructions}</p>

        <div className="flex gap-10 ">
          <button
            onClick={() => {}}
            className="capitalize border px-4 py-2 rounded-lg bg-blue-500 text-white cursor-pointer "
          >
            buy now
          </button>
          <button
            onClick={() => {}}
            className="capitalize border px-4 py-2 rounded-lg bg-orange-500 text-white cursor-pointer "
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
