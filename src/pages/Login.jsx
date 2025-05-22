import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };
  return (
    <div className="w-full h-[500px] bg-gray-200 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-1/3 bg-white m-auto flex flex-col py-10 px-5 rounded-lg shadow-2xl shadow-black gap-y-6 "
      >
        <input
          className="border px-3 py-2 outline-none rounded-xl "
          type="text"
          placeholder="email"
          name="email"
          value={email}
        />
        <input
          className="border px-3 py-2 outline-none rounded-xl "
          type="text"
          placeholder="password"
          name="password"
          value={password}
        />
        <input
          type="submit"
          value="Login"
          className="bg-blue-500 p-3 rounded-2xl text-white cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Login;
