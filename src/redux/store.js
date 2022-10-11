import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice/productSlice";

const rootReducer = {
  products: productReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
