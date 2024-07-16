import React from "react";
import { IoIosSearch } from "react-icons/io";
const HeroSection = () => {
  return (
    <div className="flex justify-start sm:justify-center items-start my-14 mx-auto">
      <form className=" relative">
        <input
          placeholder="Search you assets... "
          className="border-gray-300 bg-bgColor outline-none border p-2 w-[300px] rounded-l-lg sm:w-[500px]"
        />
        <div className=" absolute right-[-48px] border-y border-r rounded-r-lg cursor-pointer hover:bg-gray-200  bg-gray-100 h-full w-12 flex items-center justify-center top-0">
          <IoIosSearch className="font-medium text-2xl text-gray-500 hover:text-gray-600" />
        </div>
      </form>
    </div>
  );
};

export default HeroSection;
