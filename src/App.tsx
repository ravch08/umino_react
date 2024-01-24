import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "./app/wishCartSlice";

import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
	AboutUs,
	BlogPage,
	Cart,
	Categories,
	CategoryDetail,
	Contact,
	Home,
	Layout,
	Login,
	Page404,
	ProductDetail,
	Register,
	Shop,
	Wishlist,
} from "./components/utils/helper";
import { bannerLoader, contactAddressLoader, whyChooseLoader } from "./components/utils/loaders";

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60,
		},
	},
});

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route path="/" element={<Home />} loader={bannerLoader} />
			<Route path="cart" element={<Cart />} />
			<Route path="login" element={<Login />} />
			<Route path="aboutUs" element={<AboutUs />} loader={whyChooseLoader} />
			<Route path="shop" element={<Shop />} />
			<Route path="blog" element={<BlogPage />} />
			<Route path="contact" element={<Contact />} loader={contactAddressLoader} />
			<Route path="register" element={<Register />} />
			<Route path="wishlist" element={<Wishlist />} />
			<Route path="categories" element={<Categories />} />
			<Route path="categories/:id" element={<CategoryDetail />} />
			<Route path="product/:id" element={<ProductDetail />} />
			<Route path="*" element={<Page404 />} />
		</Route>
	)
);

const App = () => {
	const dispatch = useDispatch();
	const { carts } = useSelector((state) => state.wishCartState);

	useEffect(() => {
		dispatch(getCartTotal());
	}, [carts, dispatch]);

	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
};

export default App;
