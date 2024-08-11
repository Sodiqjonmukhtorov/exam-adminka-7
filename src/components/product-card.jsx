import React from "react";

export const ProductCard = ({ id, name, img, price, categoryId }) => {
  return (
    <div className="flex items-center justify-between p-6 shadow-md">
      <div className="">
        <img src={img} alt="img" />
        <h2>{name}</h2>
        <strong>{price}</strong>
      </div>
      <div className="flex items-center gap-5">
        <button className="p-4 bg-yellow-400">Delete</button>
        <button className="p-4 bg-yellow-400">Edit</button>
      </div>
    </div>
  );
};
