import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uuid: 0,
  name: "",
  quantity: 0,
  create_date: "",
  update_date: "",
  status: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export const { increment, decrement, incrementByAmount } = productSlice.actions;

export default productSlice.reducer;
