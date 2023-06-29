import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./productslice";
export const store = configureStore({
  reducer: {
    product: ProductReducer,
  },
});
