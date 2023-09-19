import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/redux/features/cart-slice";

const localStorageMiddleware = (store: any) => (next: any) => (action: any) => {
	let result = next(action);
	if (typeof window !== "undefined") {
		localStorage.setItem("cart", JSON.stringify(store.getState().cart));
	}
	return result;
};
const savedCart = typeof window !== "undefined" && localStorage.getItem("cart");
const preloadedState = savedCart ? { cart: JSON.parse(savedCart) } : {};

export const store = configureStore({
	reducer: {
		cart: cartReducer,
	},
	preloadedState,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
