import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import showListProducts from "../../services/product/show";

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (data, { rejectWithValue }) => {
    const response = await showListProducts();
    if (response == null) {
      return rejectWithValue(response);
    }

    return response;
  }
);
//initial values

//create product slice
export const productSlice = createSlice({
  name: "product",
  initialState: {
    arrProducts: [],
    statusGet: "",
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.statusGet = "loading";
    },
    [getProducts.fulfilled]: (state, action) => {
      state.statusGet = "success";
      state.arrProducts = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.statusGet = "failed";
    },
  },
  reducers: {},
});
//aciton products
// export const {} = productSlice.actions;
//reducer products
export default productSlice.reducer;
