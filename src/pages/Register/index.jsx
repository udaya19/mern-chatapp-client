import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../api/user";
import { toast, Toaster } from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(name, email, password);
      console.log(response);
      if (response.success) {
        toast.success(response.message);
        navigate("/login");
      } else {
        toast.error();
      }
    } catch (error) {
      console.log(error.message);
    }
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
      <Toaster
        toastOptions={{
          success: {
            style: {
              backgroundColor: "green",
            },
          },
          error: {
            style: {
              backgroundColor: "red",
            },
          },
          duration: 4000,
          position: "top-right",
          icon: "🔥",
        }}
      />
    </div>
  );
};

export default Register;
