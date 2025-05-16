import React, { useState } from "react";

const Form = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [choice, setChoice] = useState("");
  const [pnumber, setPnumber] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fname);
    setFname("");
    setLname("");
    setEmail("");
    setChoice("");
    setPnumber("");
    setMessage("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="px-10 space-y-3">
        <div className="flex justify-between gap-10 ">
          <div>
            <label htmlFor="fname">First Name</label>

            <input
              className="border w-full rounded-lg border-gray-400 p-2"
              type="text"
              id="fname"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="lname">Last Name</label>

            <input
              className="border w-full rounded-lg border-gray-400 p-2"
              type="text"
              id="lname"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="email">Email</label>

          <input
            className="border w-full rounded-lg border-gray-400 p-2"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="choice">What we can do for you</label>
          <select
            id="choice"
            className="border w-full rounded-lg border-gray-400 p-2"
            onChange={(e) => setChoice(e.target.value)}
          >
            <option>Choose</option>
            <option value="choice1">choice1</option>
            <option value="choice2">choice2</option>
            <option value="choice3">choice3</option>
          </select>
        </div>
        <div>
          <label htmlFor="pnumber">Phone Number</label>
          <input
            className="border w-full rounded-lg border-gray-400 p-2"
            type="pnumber"
            id="pnumber"
            value={pnumber}
            onChange={(e) => setPnumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            className="border w-full rounded-lg border-gray-400 p-2"
            id="message"
            rows={4}
            value={message}
            onChange={(e) => e.target.value}
          ></textarea>
        </div>
        <div>
          <button className="bg-orange-500 text-white p-2 rounded-2xl cursor-pointer">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
