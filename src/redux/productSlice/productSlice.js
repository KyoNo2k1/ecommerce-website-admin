import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import showListProducts from "../../services/product/show";
import showListCategories from "./../../services/category/show";
import createNewCategory from "./../../services/category/create";
import createNewProduct from "./../../services/product/create";
import updateOneProduct from "./../../services/product/update";
import updateOneCategory from "./../../services/category/update";
import deleteOneCategory from "./../../services/category/delete";
import deleteOneProduct from "./../../services/product/delete";

//PRODUCTS
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
export const createProduct = createAsyncThunk(
  "product/createProduct",
  async (data, { rejectWithValue }) => {
    const response = await createNewProduct(data);
    if (response == null) {
      return rejectWithValue(response);
    }
    return response;
  }
);
export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async (data, { rejectWithValue }) => {
    const response = await updateOneProduct(data);
    console.log(data);
    console.log(response);
    if (response == null) {
      return rejectWithValue(response);
    }
    return response;
  }
);
export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id, { rejectWithValue }) => {
    const response = await deleteOneProduct(id);
    if (response == null) {
      return rejectWithValue(response);
    }
    return response;
  }
);

//CATEGORIES
export const getCategories = createAsyncThunk(
  "product/getCategories",
  async (data, { rejectWithValue }) => {
    const response = await showListCategories();
    if (response == null) {
      return rejectWithValue(response);
    }
    return response;
  }
);
export const createCategory = createAsyncThunk(
  "product/createCategory",
  async (name, { rejectWithValue }) => {
    const response = await createNewCategory(name);
    if (response == null) {
      return rejectWithValue(response);
    }
    return response;
  }
);
export const updateCategory = createAsyncThunk(
  "product/updateCategory",
  async (data, { rejectWithValue }) => {
    const response = await updateOneCategory(data);
    if (response == null) {
      return rejectWithValue(response);
    }
    return response;
  }
);
export const deleteCategory = createAsyncThunk(
  "product/deleteCategory",
  async (id, { rejectWithValue }) => {
    const response = await deleteOneCategory(id);
    if (response == null) {
      return rejectWithValue(response);
    }
    return response;
  }
);

//create product slice
export const productSlice = createSlice({
  name: "product",
  initialState: {
    arrProducts: [],
    statusGetProduct: "",
    arrCategories: [],
    statusGetCategories: "",
    statusCreateCategories: "",
    categoryName: "",
    statusUpdateCategories: "",
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.statusGetProduct = "loading";
    },
    [getProducts.fulfilled]: (state, action) => {
      state.statusGetProduct = "success";
      state.arrProducts = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.statusGetProduct = "failed";
    },
    [getCategories.pending]: (state, action) => {
      state.statusGetCategories = "loading";
    },
    [getCategories.fulfilled]: (state, action) => {
      state.statusGetCategories = "success";
      state.arrCategories = action.payload;
    },
    [getCategories.rejected]: (state, action) => {
      state.statusGetCategories = "failed";
    },
    [createCategory.fulfilled]: (state, action) => {
      state.statusCreateCategories = "success";
    },
    [updateCategory.fulfilled]: (state, action) => {
      state.statusUpdateCategories = "success";
    },
  },
  reducers: {},
});
//aciton products
// export const {  } = productSlice.actions;
//reducer products
export default productSlice.reducer;
