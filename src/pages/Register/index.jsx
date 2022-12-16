import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-screen bg-primary flex justify-center items-center">
      <div className="form-box flex flex-col bg-white p-28">
        <h1 className="text-primary font-bold text-xl mb-5 text-center">
          Register
        </h1>
        <form action="" className="flex flex-col" onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            className="mb-3 focus:outline-black"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Enter your name..."
          />
          <input
            type="email"
            name="email"
            className="mb-3 focus:outline-black"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            name="password"
            className="mb-3 focus:outline-black"
            placeholder="Enter your password..."
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            className="uppercase hover:bg-gray-50 transition-colors hover:text-primary bg-primary text-white"
            type="submit"
          >
            Submit
          </button>
        </form>
        <span className="text-sm mt-2">
          Already have account?
          <Link to="/login" className="text-primary">
            Login
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Register;
