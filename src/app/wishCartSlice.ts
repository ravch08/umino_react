import { createSlice } from "@reduxjs/toolkit";
import { productItems } from "../components/utils/data";

const initialState = {
	carts: [],
	userInfo: [],
	wishCarts: [],
	totalPrice: 0,
	items: productItems,
	totalCartQuantity: 0,
};

const wishCartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToWishlist: (state, action) => {
			const el = state.wishCarts.findIndex((item) => item.id === action.payload.id);
			if (el >= 0) {
				state.wishCarts[el].wishQuantity += 1;
			} else {
				state.wishCarts.push(action.payload);
			}
		},

		removeFromWishlist: (state, action) => {
			state.wishCarts = state.wishCarts.filter((item) => item.id !== action.payload);
		},

		addToCart: (state, action) => {
			const el = state.carts.findIndex((item) => item.id === action.payload.id);
			if (el >= 0) {
				state.carts[el].cartQuantity += 1;
			} else {
				state.carts.push(action.payload);
			}
		},

		getCartTotal: (state) => {
			let totalPrice = 0;
			let totalCartQuantity = 0;

			state.carts.forEach((cartItem) => {
				const { price, cartQuantity } = cartItem;
				const itemTotal = price * cartQuantity;
				totalPrice += itemTotal;
				totalCartQuantity += cartQuantity;
			});

			state.totalPrice = parseFloat(totalPrice.toFixed(2));
			state.totalCartQuantity = totalCartQuantity;
		},

		deleteProduct: (state, action) => {
			state.carts = state.carts.filter((item) => item.id !== action.payload);
		},

		incrementQuantity: (state, action) => {
			state.carts = state.carts.map((item) => {
				if (item.id === action.payload) {
					return { ...item, cartQuantity: item.cartQuantity + 1 };
				}
				return item;
			});
		},

		decrementQuantity: (state, action) => {
			state.carts = state.carts.map((item) => {
				if (item.id === action.payload) {
					return { ...item, cartQuantity: item.cartQuantity - 1 };
				}
				return item;
			});
		},
	},
});

export const {
	addToCart,
	getCartTotal,
	deleteProduct,
	addToWishlist,
	incrementQuantity,
	decrementQuantity,
	removeFromWishlist,
} = wishCartSlice.actions;

export default wishCartSlice.reducer;
