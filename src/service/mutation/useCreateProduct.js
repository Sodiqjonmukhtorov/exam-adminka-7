import { useMutation } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useCreateProduct = () => {
  return useMutation({
    mutationFn: (data) =>
      request.post("/products", data).then((res) => res.data),
  });
};



export const userCategoryList = () => {
  return useQuery({
    queryKey: ["category-list"],
    queryFn: () => request.get("/category").then((res) => res.data),
  });
};