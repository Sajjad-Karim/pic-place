import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoLogOut } from "react-icons/io5";
import { IoMdPhotos } from "react-icons/io";
import { SiGoogleanalytics } from "react-icons/si";
import { AiFillHome } from "react-icons/ai";
import { FaList } from "react-icons/fa";
import { IoIosHeart } from "react-icons/io";
import { logout } from "../../features/auth/auth.Slicer";
import { setTab } from "../../features/sidebar/sidebar.Slice";
const DashboardSidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { author } = useSelector((state) => state.auth);
  const { isOpen, tab } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div
      className={` ${
        !isOpen == true
          ? "-translate-x-[500px] sm:translate-x-0"
          : "translate-x-0"
      } flex text-lg font-semibold bg-white shadow-lg flex-col gap-2 w-fit min-h-screen p-3 list-none justify-between items-center`}
    >
      <div>
        <div className=" bg-black my-5 w-fit rounded-full py-4 px-6 text-white">
          {author && author.charAt(0).toUpperCase()}
        </div>
        <div className=" flex flex-col gap-2">
          {pathname === "/seller/profile" ? (
            <li
              className={`${
                tab === "photo-managment" && "text-white bg-black "
              } w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center`}
              onClick={() => dispatch(setTab("photo-managment"))}
            >
              <IoMdPhotos />
              Photo Managment
            </li>
          ) : (
            <li
              className={`${
                tab === "photo-purchased" && "bg-black text-white"
              }w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center`}
              onClick={() => dispatch(setTab("photo-purchased"))}
            >
              <IoMdPhotos /> Photo Purchased
            </li>
          )}
          <li
            className={`${
              tab === "Analytics" && "bg-black text-white"
            } w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center`}
            onClick={() => dispatch(setTab("Analytics"))}
          >
            <SiGoogleanalytics /> Analytics
          </li>
          <li
            className={`${
              tab === "Orders" && "bg-black text-white"
            } w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center`}
            onClick={() => dispatch(setTab("Orders"))}
          >
            <FaList /> Orders
          </li>
          <li
            className={`${
              tab === "Favourites" && "bg-black text-white"
            } w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center`}
            onClick={() => dispatch(setTab("Favourites"))}
          >
            <IoIosHeart /> Favourites
          </li>
          <li
            className={`${
              tab === "home" && "bg-black text-white"
            } w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center`}
            onClick={() => dispatch(setTab("home"))}
          >
            <AiFillHome /> Home
          </li>
        </div>
      </div>
      <li
        className="w-full rounded-lg px-2 hover:bg-black hover:text-white cursor-pointer transition-all ease-linear duration-300 hover:scale-105 flex gap-2 justify-start items-center"
        onClick={handleLogout}
      >
        <IoLogOut />
        Logout
      </li>
    </div>
  );
};

export default DashboardSidebar;
