import React from "react";
import { ProductForm } from "../components/product-form";
import { userCategoryList } from "../service/query/userCategoryList";
import { useCreateProduct } from "../service/mutation/useCreateProduct";
import { useNavigate } from "react-router-dom";

export const CreateProduct = () => {
  const { data, isLoading } = userCategoryList();
  const { mutate } = useCreateProduct();
  const navigate = useNavigate();
  const submit = (data) => {
    mutate(data, {
      onSuccess: () => {
        navigate(-1);
      },
    });
  };

  return (
    <div>
      {!isLoading && <ProductForm categeoryData={data} submit={submit} />}
    </div>
  );
};
