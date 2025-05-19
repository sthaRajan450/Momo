import React, { useState, useEffect } from "react";
import { motion } from "motion/react"
import { useNavigate } from "react-router-dom";
const Menu = () => {
  const naviagte=useNavigate()
  const [recipes, setRecipes] = useState([]);
  const getRecipes = async () => {
    let response = await fetch("https://dummyjson.com/recipes");
    response = await response.json();
    setRecipes(response.recipes);
  };
  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="p-20">
      {recipes.length > 0 ? (
        <div  className="flex flex-wrap gap-20 justify-center">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="w-1/4 flex flex-col  items-center gap-y-5 cursor-pointer" onClick={()=>{
              naviagte('/productDescription',{state:recipe})
            }}>
              <motion.img whileHover={{scale:0.8}} transition={{duration:2,ease:'linear'}} className="w-75 rounded-2xl" src={recipe.image} alt={recipe.name} />
              <h1 className="text-xl font-bold">{recipe.name}</h1>
              <h3 className="font-semibold text-xl">RS <span className="text-orange-500 font-bold text-2xl">{recipe.caloriesPerServing}</span></h3>
              {/* <p className="text-center text-gray-600">{recipe.instructions}</p> */}
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Menu;
