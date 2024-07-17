import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="max-w-md mx-auto my-10">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
            required
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
          />
        </div>

        <button className="w-full border bg-bgColor rounded-full py-2 text-lg font-semibold cursor-pointer hover:bg-gray-200">
          <Link>Sign In</Link>
        </button>
      </form>
    </div>
  );
};

export default Login;
