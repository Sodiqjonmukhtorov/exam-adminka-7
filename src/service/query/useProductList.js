import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useProductList = (id) => {
  return useQuery({
    queryKey: ["product-list", id],
    queryFn: () =>
      request
        .get("/products", {
          params: {
            categoryId: id,
          },
        })
        .then((res) => res.data),
  });
};
