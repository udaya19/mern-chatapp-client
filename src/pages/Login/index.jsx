import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../api/user";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(email, password);
      if (response.success) {
        toast.success(response.message);
        localStorage.setItem("token", response.token);
        navigate("/");
      } else {
        toast.error(response.error);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-screen bg-primary flex justify-center items-center">
      <div className="form-box flex flex-col bg-white p-28">
        <h1 className="text-primary font-bold text-xl mb-5 text-center">
          Login
        </h1>
        <form action="" className="flex flex-col" onSubmit={onSubmit}>
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
          Don't have an account?
          <Link to="/register" className="text-primary">
            Register
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
