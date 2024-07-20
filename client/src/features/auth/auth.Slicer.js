import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authActions";
const accessToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;
const initialState = {
  isLoading: false,
  isSuccess: false,
  isRejected: false,
  data: null,
  error: null,
  accessToken,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isRejected = false;
      state.data = null;
      state.error = null;
      state.accessToken = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      state.isSuccess = false;
      state.data = null;
      state.accessToken = null;
      state.isRejected = false;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.error = null;
      state.data = action.payload;
      state.accessToken = action.payload.accessToken;
      state.isRejected = false;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.error = action.payload;
      state.data = null;
      state.accessToken = null;
      state.isRejected = true;
    });
  },
});

export default authSlice.reducer;
export const { logoutUser } = authSlice.actions;
