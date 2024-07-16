import React from "react";
import { IoIosHeart } from "react-icons/io";
import { IoMdCart } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
const Card = ({ items }) => {
  const { id, title, author, img, price } = items;
  return (
    <>
      <div className="p-2 shadow-lg flex flex-col gap-2 rounded-md">
        <div className=" h-[170px] w-full overflow-hidden rounded-2xl">
          <img
            src={img}
            alt="name"
            className="h-full w-full hover:scale-105 cursor-pointer duration-300 ease-linear transition-all"
          />
        </div>
        <p className="text-white bg-gray-900 rounded-full w-fit py-[2px] px-[10px]">
          {`@${author}`}
        </p>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">{title}</p>
            <p className="text-gray-500">Price: {`$${price}`}</p>
          </div>
          <div className="flex gap-[10px]">
            <IoMdCart className="text-2xl cursor-pointer" />
            <IoMdHeart className="text-2xl text-red cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
