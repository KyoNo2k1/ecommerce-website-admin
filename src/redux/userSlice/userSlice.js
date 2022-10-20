import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteOneUser,
  showListUsers,
  updateOneUser,
} from "../../services/user";

//Users
export const getUsers = createAsyncThunk(
  "user/getUsers",
  async (data, { rejectWithValue }) => {
    const response = await showListUsers();
    if (response == null) {
      return rejectWithValue(response);
    }
    return response;
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (id, { rejectWithValue }) => {
    const response = await deleteOneUser(id);
    if (response == null) {
      return rejectWithValue(response);
    }
    return response;
  }
);

//create user slice
export const userSlice = createSlice({
  name: "user",
  initialState: {
    arrUsers: [],
    user: {},
    statusGetUsers: "",
    statusUpdateUser: "",
    statusDeleteUser: "",
  },
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.statusGetUsers = "loading";
    },
    [getUsers.fulfilled]: (state, action) => {
      state.statusGetUsers = "success";
      state.arrUsers = action.payload;
    },
    [getUsers.rejected]: (state, action) => {
      state.statusGetUsers = "failed";
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.statusDeleteUser = "success";
    },
  },
  reducers: {
    resetStatusUser: (state, action) => {
      state.statusUpdateUser = "";
      state.statusDeleteUser = "";
    },
    setUserValue: (state, action) => {
      state.user = action.payload;
    },
  },
});
//aciton products
export const { resetStatusUser, setUserValue } = userSlice.actions;
//reducer products
export default userSlice.reducer;
