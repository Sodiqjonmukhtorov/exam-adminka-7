import React from "react";
import { userCategoryList } from "../service/query/userCategoryList";
import { CategoryCard } from "../components/category-card";

export const CategoryList = () => {
  const { data } = userCategoryList();
  return (
    <div>
      <button className="p-4 bg-yellow-400">Create Category</button>
      {data?.map((item) => (
        <CategoryCard key={item.id} {...item} />
      ))}
    </div>
  );
};