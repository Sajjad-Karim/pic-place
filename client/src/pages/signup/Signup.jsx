import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SignupUser } from "../../features/signup/Actions.signup";
const Signup = () => {
  const dispatch = useDispatch();
  const { isLoading, isRejected, isSuccess, err, data } = useSelector(
    (state) => state.signup
  );
  console.log(isLoading, isRejected, err,isSuccess ,data);
  // console.log(userData);
  const [userData, setData] = useState({
    username: "",
    email: "",
    password: "",
    accountType: "",
  });
  const handleData = (e) => {
    setData({ ...userData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SignupUser(userData));
  };
  return (
    <div className="max-w-md mx-auto my-10">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter username"
            required
            onChange={handleData}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter email"
            name="email"
            required
            onChange={handleData}
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
            onChange={handleData}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="role"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Select Account Type
          </label>
          <select
            id="role"
            className="shadow  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
            name="accountType"
            onChange={handleData}
          >
            <option name="accountType" value="buyer" htmlFor="role">
              Buyer
            </option>
            <option name="accountType" value="seller" htmlFor="role">
              Seller
            </option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <Link
            to={"/login"}
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          >
            Already have an account? <span className="text-red">Log in.</span>
          </Link>
        </div>
        <button
          className="w-full border bg-bgColor rounded-full py-2 text-lg font-semibold cursor-pointer hover:bg-gray-200"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
