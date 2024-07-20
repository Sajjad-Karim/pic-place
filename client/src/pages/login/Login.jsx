import React, { useEffect, useState } from "react";
import { loginUser } from "../../features/auth/authActions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import { logoutUser } from "../../features/auth/auth.Slicer";
const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { accessToken, data, error, isLoading, isRejected, isSuccess } =
    useSelector((state) => state.auth);
  // const data = useSelector((state) => state.auth);
  const handleLogin = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginData));
  };
  console.log();
  useEffect(() => {
    if (isSuccess) {
      toast.success("success fully login");
      setLoginData({
        email: "",
        password: "",
      });
      navigate(`/${data.role}/profile`);
      dispatch(logoutUser());
    }
    if (error) {
      toast.error(error);
    }
  }, [navigate, data, error]);
  // console.log(data);
  // console.log(`Access Token : ${accessToken}`);
  // console.log(`Data : ${data}`);
  // console.log(`Error : ${error}`);
  // console.log(`Is Loading : ${isLoading}`);
  // console.log(`Is Rejected : ${isRejected}`);
  // console.log(`Is Success : ${isSuccess}`);
  return (
    <div className="max-w-sm sm:max-w-md mx-auto my-10">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter email"
            required
            value={loginData.email}
            onChange={handleLogin}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter password"
            required
            name="password"
            value={loginData.password}
            onChange={handleLogin}
          />
        </div>

        <button
          className="w-full border bg-bgColor rounded-full py-2 text-lg font-semibold cursor-pointer hover:bg-gray-200"
          type="submit"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
