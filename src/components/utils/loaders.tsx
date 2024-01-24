import { queryClient } from "../../App";

import {
	getBanners,
	getBlogs,
	getCategories,
	getContactAddressItems,
	getProducts,
	getWhyChoose,
} from "./api";

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

export const blogsLoader = () => {
	return queryClient.fetchQuery({
		queryKey: ["blogs"],
		queryFn: getBlogs,
	});
};

export const whyChooseLoader = () => {
	return queryClient.fetchQuery({
		queryKey: ["whyChoose"],
		queryFn: getWhyChoose,
	});
};

export const bannerLoader = () => {
	return queryClient.fetchQuery({
		queryKey: ["banners"],
		queryFn: getBanners,
	});
};

export const contactAddressLoader = () => {
	return queryClient.fetchQuery({
		queryKey: ["addressItems"],
		queryFn: getContactAddressItems,
	});
};
