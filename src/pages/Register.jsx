import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full h-screen bg-gray-300 flex justify-between  items-center">
      <div className="w-1/3 m-auto bg-white p-5 rounded-lg ">
      <h1 className="text-center text-4xl mb-5 font-bold ">Register</h1>
        <form className="flex flex-col gap-y-4">
          <input className="w-full border px-3 py-2  rounded-lg outline-none "
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input className="w-full border px-3 py-2  rounded-lg outline-none "
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input className="w-full border px-3 py-2  rounded-lg outline-none "
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input className="w-full  text-white cursor-pointer px-3 py-2  rounded-lg outline-none bg-green-500 " type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
};

export default Register;
