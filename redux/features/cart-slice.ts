import { Product } from "@/types/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem extends Product {
	quantity: number;
}

interface CartState {
	items: CartItem[];
	totalQuantity: number;
	totalPrice: number;
}

export const initialState: CartState = {
	items: [],
	totalQuantity: 0,
	totalPrice: 0,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<CartItem>) => {
			const newItem = action.payload;
			const existingItem = state.items.find(item => item.id === newItem.id);

			if (existingItem) {
				existingItem.quantity += newItem.quantity;
			} else {
				state.items.push(newItem);
			}

			state.totalQuantity += newItem.quantity;
			state.totalPrice += newItem.price * newItem.quantity;
		},
		removeFromCart: (state, action: PayloadAction<number>) => {
			const id = action.payload;
			const existingItem = state.items.find(item => item.id === id);

			if (existingItem) {
				state.totalQuantity -= existingItem.quantity;
				state.totalPrice -= existingItem.price * existingItem.quantity;

				state.items = state.items.filter(item => item.id !== id);
			}
		},
		updateQuantity: (
			state,
			action: PayloadAction<{ id: number; quantity: number }>
		) => {
			const { id, quantity } = action.payload;
			const existingItem = state.items.find(item => item.id === id);

			if (existingItem) {
				const quantityDifference = quantity - existingItem.quantity;

				existingItem.quantity = quantity;
				state.totalQuantity += quantityDifference;
				state.totalPrice += existingItem.price * quantityDifference;

				if (existingItem.quantity === 0) {
					state.items = state.items.filter(item => item.id !== id);
				}
			}
		},
	},
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
