import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import showListProducts from "../../services/product/show";
import showListCategories, {
  getOneCategory,
} from "./../../services/category/show";
import getOneProduct from "../../services/product/get";
import createNewCategory from "./../../services/category/create";
import createNewProduct from "./../../services/product/create";
import { getDoc } from "firebase/firestore";

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
export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (data, { rejectWithValue }) => {
    const response = await getOneProduct(data);
    if (response == null) {
      return rejectWithValue(response);
    }
    console.log(response);
    return response;
  }
);
export const createProduct = createAsyncThunk(
  "product/createProducts",
  async (data, { rejectWithValue }) => {
    const response = await createNewProduct(data);
    if (response == null) {
      return rejectWithValue(response);
    }
    // console.log(response);
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
export const getCategory = createAsyncThunk(
  "product/getCategory",
  async (doc, { rejectWithValue }) => {
    const response = await getOneCategory(doc);
    if (response == null) {
      return rejectWithValue(response);
    }
    return {
      id: response.id,
      data: response.data(),
    };
  }
);

//create product slice
export const productSlice = createSlice({
  name: "product",
  initialState: {
    arrProducts: [],
    statusGetProduct: "",
    product: {},
    statusGetOneProduct: "",
    arrCategories: [],
    statusGetCategories: "",
    statusCreateCategories: "",
    categoryName: "",
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
    [getProduct.pending]: (state, action) => {
      state.statusGetOneProduct = "loading";
    },
    [getProduct.fulfilled]: (state, action) => {
      state.statusGetOneProduct = "success";
      state.product = action.payload;
    },
    [getProduct.rejected]: (state, action) => {
      state.statusGetOneProduct = "failed";
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
    [getCategory.fulfilled]: (state, action) => {
      state.categoryName = action.payload;
    },
  },
  reducers: {},
});
//aciton products
// export const {  } = productSlice.actions;
//reducer products
export default productSlice.reducer;
