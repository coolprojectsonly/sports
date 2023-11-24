import { createSlice } from "@reduxjs/toolkit";
import { getInfo } from "./action";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

const createReducer = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInfo.pending, (state) => {
        state.status === "loading";
      })
      .addCase(getInfo.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getInfo.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default createReducer;
