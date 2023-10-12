import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "./app/wishCartSlice";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import {
	AboutUs,
	BlogPage,
	Cart,
	Categories,
	CategoryDetail,
	Contact,
	Footer,
	Header,
	Home,
	Login,
	Page404,
	ProductDetail,
	Register,
	Shop,
	Wishlist,
} from "./components/utils/helper";

const Wrapper = ({ children }: { children: ReactNode }) => {
	const location = useLocation();
	useLayoutEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), [location.pathname]);

	return children;
};

const App = () => {
	const dispatch = useDispatch();
	const { carts } = useSelector((state) => state.wishCartState);

	useEffect(() => {
		dispatch(getCartTotal());
	}, [carts]);

	return (
		<BrowserRouter>
			<Wrapper>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="cart" element={<Cart />} />
					<Route path="login" element={<Login />} />
					<Route path="aboutUs" element={<AboutUs />} />
					<Route path="shop" element={<Shop />} />
					<Route path="blog" element={<BlogPage />} />
					<Route path="contact" element={<Contact />} />
					<Route path="register" element={<Register />} />
					<Route path="wishlist" element={<Wishlist />} />
					<Route path="categories" element={<Categories />} />
					<Route path="categories/:categoryID" element={<CategoryDetail />} />
					<Route path="product/:productID" element={<ProductDetail />} />
					<Route path="*" element={<Page404 />} />
				</Routes>
				<Footer />
			</Wrapper>
		</BrowserRouter>
	);
};

export default App;
