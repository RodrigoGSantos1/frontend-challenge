import { CartItem, CartState } from "@/@types/Product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: CartState = {
  items: [],
  isOverviewVisible: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    },
    toggleOverview: (state) => {
      state.isOverviewVisible = !state.isOverviewVisible;
    },
  },
});

export const { addItem, removeItem, clearCart, toggleOverview, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
