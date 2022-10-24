import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { updateStatusTransaction } from "../../services/transaction";
import showListTransactions, {
  showOneTransaction,
} from "./../../services/transaction/show";

//transaction
export const getTransactions = createAsyncThunk(
  "transaction/getTransactions",
  async (data, { rejectWithValue }) => {
    const response = await showListTransactions();
    if (response == null) {
      return rejectWithValue(response);
    }
    return response;
  }
);

export const updateTransaction = createAsyncThunk(
  "transaction/updateTransaction",
  async (data, { rejectWithValue }) => {
    const response = await updateStatusTransaction(data);
    if (response == null) {
      return rejectWithValue(response);
    }
    return response;
  }
);

export const getOneTransaction = createAsyncThunk(
  "transaction/getOneTransactions",
  async (id, { rejectWithValue }) => {
    const response = await showOneTransaction(id);
    if (response == null) {
      return rejectWithValue(response);
    }
    return response;
  }
);

//create transactions slice
export const transactionSlice = createSlice({
  name: "transactions",
  initialState: {
    arrTransactions: [],
    statusGetTransactions: "",
    statusGetOneTransaction: "",
    transaction: null,
    statusUpdateTransaction: "",
  },
  extraReducers: {
    [getTransactions.pending]: (state, action) => {
      state.statusGetTransactions = "loading";
    },
    [getTransactions.fulfilled]: (state, action) => {
      state.statusGetTransactions = "success";
      state.arrTransactions = action.payload;
    },
    [getTransactions.rejected]: (state, action) => {
      state.statusGetTransactions = "failed";
    },
    [getOneTransaction.fulfilled]: (state, action) => {
      state.statusGetOneTransaction = "success";
      state.transaction = action.payload;
    },
    [updateTransaction.fulfilled]: (state, action) => {
      state.statusUpdateTransaction = action.payload;
    },
  },
  reducers: {
    resetStatusTransaction: (state, action) => {
      state.statusUpdateTransaction = "";
    },
    updateRealtimeTransaction: (state, action) => {
      state.arrTransactions = action.payload;
    },
  },
});
//aciton products
export const { resetStatusTransaction, updateRealtimeTransaction } =
  transactionSlice.actions;
//reducer products
export default transactionSlice.reducer;
