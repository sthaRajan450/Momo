import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ text, icon, navi }) => {
  const navigate = useNavigate();
  console.log(navi)
  return (
    <button
      onClick={() => {
        navigate(`${navi}`);
      }}
      className="bg-[#0C6967] capitalize py-3 px-4 rounded-3xl text-white cursor-pointer flex items-center gap-3"
    >
      {text === "watch the video" ? (
        <>
          {icon}
          {text}
        </>
      ) : (
        <>
          {text}
          {icon}
        </>
      )}
    </button>
  );
};

export default Button;
