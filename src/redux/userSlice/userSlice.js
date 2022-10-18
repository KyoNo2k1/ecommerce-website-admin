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

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (data, { rejectWithValue }) => {
    const response = await updateOneUser(data);
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
    [updateUser.fulfilled]: (state, action) => {
      state.statusUpdateUser = "success";
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
  },
});
//aciton products
export const { resetStatusUser } = userSlice.actions;
//reducer products
export default userSlice.reducer;
