import { queryClient } from "../../App";

import { getCategories, getProducts } from "./api";

export const categoriesLoader = () => {
	return queryClient.fetchQuery({
		queryKey: ["categories"],
		queryFn: getCategories,
	});
};

export const productsLoader = () => {
	return queryClient.fetchQuery({
		queryKey: ["products"],
		queryFn: getProducts,
	});
};
