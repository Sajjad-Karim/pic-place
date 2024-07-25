import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../features/auth/authActions";
import toast from "react-hot-toast";
// import { resetState } from "../../features/auth/auth.Slicer";
const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const {
    isPending,
    isAuthenticated,
    isRejected,
    jwtToken,
    refreshToken,
    user,
    error,
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginData));
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (isAuthenticated) {
      toast.success(user.message);
      setLoginData({
        email: "",
        password: "",
      });
      navigate(`/${user.role}/profile`); //here role may be seller or buyer
      // dispatch(resetState()); //clear error state after successful login
    }
  }, [isAuthenticated, user, error, navigate]);

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
          {isPending ? "Please wait" : ` Sign In`}
        </button>
      </form>
    </div>
  );
};

export default Login;
//
