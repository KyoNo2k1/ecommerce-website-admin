import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice/productSlice";
import userReducer from "./userSlice/userSlice";
import transactionReducer from "./transactionSlice/transactionSlice";

const rootReducer = {
  products: productReducer,
  users: userReducer,
  transactions: transactionReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
