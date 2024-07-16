import React from "react";
import CardList from "../image-card/CardList";
import { data } from "../image-card/data";
const PhotoGallery = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white py-10 gap-10">
      <h1 className="text-3xl font-semibold ">Photos</h1>
      <div className="grid xsm:grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 ">
        <CardList data={data} />
      </div>
    </div>
  );
};

export default PhotoGallery;
