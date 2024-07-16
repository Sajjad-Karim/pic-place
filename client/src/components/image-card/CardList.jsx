import React from "react";
import Card from "./Card";

const CardList = ({ data }) => {
  return (
    <>
      {data && data.map((items, index) => <Card items={items} key={index} />)}
    </>
  );
};

export default CardList;
