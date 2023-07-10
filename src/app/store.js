import { configureStore } from "@reduxjs/toolkit";
import wishCartReducer from "./wishCartSlice";

const store = configureStore({
	reducer: {
		wishCartState: wishCartReducer,
	},
});

export default store;