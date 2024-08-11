import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";
export const userCategoryList = () => {
  return useQuery({
    queryKey: ["category-list"],
    queryFn: () => request.get("/category").then((res) => res.data),
  });
};
