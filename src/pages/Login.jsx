import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useAuth0 } from "@auth0/auth0-react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  const { loginWithRedirect } = useAuth0();
  return (
    <div className="w-full py-20 bg-gray-200 flex justify-center items-center">
      <div className="w-1/3 bg-white m-auto  py-5 px-5  rounded-lg">
        <h1 className="text-center text-4xl mb-5 font-bold ">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col  gap-y-6 ">
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
          <button
            className="flex  text-[20px] gap-x-3 underline text-green-500 justify-center items-center cursor-pointer"
            onClick={() => loginWithRedirect()}
          >
            <FcGoogle size={32} />
            Login with google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
