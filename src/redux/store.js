import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice/productSlice";
import userReducer from "./userSlice/userSlice";

const rootReducer = {
  products: productReducer,
  users: userReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
