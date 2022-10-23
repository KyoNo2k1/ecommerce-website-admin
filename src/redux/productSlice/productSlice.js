import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import showListProducts from "../../services/product/show";
import showListCategories from "./../../services/category/show";
import createNewCategory from "./../../services/category/create";
import createNewProduct from "./../../services/product/create";
import updateOneProduct, {
  updateImgUrl,
} from "./../../services/product/update";
import updateOneCategory from "./../../services/category/update";
import deleteOneCategory from "./../../services/category/delete";
import deleteOneProduct from "./../../services/product/delete";
import { getListComments } from "./../../services/comment/show";
import deleteOneComment from "./../../services/comment/delete";

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
export const updateArrImg = createAsyncThunk(
  "product/updateImgUrl",
  async (data, { rejectWithValue }) => {
    const response = await updateImgUrl(data);
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

//comment
export const getComments = createAsyncThunk(
  "product/getComments",
  async (arrIdProduct, { rejectWithValue }) => {
    const response = await getListComments(arrIdProduct);
    if (response == null) {
      return rejectWithValue(response);
    }
    return response;
  }
);
export const deleteComment = createAsyncThunk(
  "product/deleteComments",
  async (data, { rejectWithValue }) => {
    console.log(data);
    const response = await deleteOneComment(data);
    console.log(response);
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
    //product
    arrProducts: [],
    productCreatedId: null,
    statusGetProduct: "",
    statusCreateProduct: "",
    statusDeleteProduct: "",
    statusUpdateProduct: "",

    //category
    arrCategories: [],
    statusGetCategory: "",
    statusGetCategories: "",
    statusCreateCategories: "",
    categoryName: "",
    statusUpdateCategories: "",

    //comment
    arrComments: [],
    statusGetArrComments: "",
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.statusGetProduct = "loading";
    },
    [getProducts.fulfilled]: (state, action) => {
      state.statusGetProduct = "success";
      state.arrProducts = action.payload;
    },
    [createProduct.fulfilled]: (state, action) => {
      state.statusCreateProduct = "success";
      state.productCreatedId = action.payload;
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
    [updateProduct.fulfilled]: (state, action) => {
      state.statusUpdateProduct = "success";
    },
    [deleteCategory.fulfilled]: (state, action) => {
      state.statusDeleteProduct = "success";
    },
    [getComments.fulfilled]: (state, action) => {
      state.statusGetArrComments = "success";
      state.arrComments = action.payload;
    },
  },
  reducers: {
    resetStatusProduct: (state, action) => {
      state.statusCreateProduct = "";
      state.statusDeleteProduct = "";
      state.statusUpdateProduct = "";
      state.productCreatedId = "";
    },
  },
});
//aciton products
export const { resetStatusProduct } = productSlice.actions;
//reducer products
export default productSlice.reducer;
