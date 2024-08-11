import React from "react";
import { Link, useParams } from "react-router-dom";
import { useProductList } from "../service/query/useProductList";
import { ProductCard } from "../components/product-card";

export const CategoryProduct = () => {
  const { id } = useParams();
  const { data } = useProductList(id);

  return (
    <div>
      <Link to={"/create-product"} className="p-4 bg-yellow-400">
        Create Product
      </Link>
      {data?.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
};
