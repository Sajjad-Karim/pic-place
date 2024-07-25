import { createSlice, isPending } from "@reduxjs/toolkit";
import { loginUser } from "./authActions";
const acessToken = localStorage.getItem("accessToken")
  ? localStorage.getItem("accessToken")
  : null;
const refreshToken = localStorage.getItem("refreshToken")
  ? localStorage.getItem("refreshToken")
  : null;
const author = localStorage.getItem("author")
  ? localStorage.getItem("author")
  : null;
const role = localStorage.getItem("role") ? localStorage.getItem("role") : null;

const auth = createSlice({
  name: "auth",
  initialState: {
    isPending: false,
    isAuthenticated: false, //This case is for the fullfiled
    isRejected: false,
    user: null,
    error: null,
    acessToken,
    refreshToken,
    role,
    author,
  },
  reducers: {
    logout: (state, action) => {
      state.acessToken = null;
      state.refreshToken = null;
      state.role = null;
      state.author = null;
      state.user = null;
      state.isPending = false;
      state.isRejected = false;
      state.isAuthenticated = false;
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("role");
      localStorage.removeItem("author");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.isPending = true;
      state.isAuthenticated = false;
      state.isRejected = false;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isPending = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.jwtToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.role = action.payload.role;
      state.author = action.payload.author;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isPending = false;
      state.isAuthenticated = false;
      state.isRejected = true;
      state.error = action.payload;
    });
  },
});
export default auth.reducer;
export const { logout } = auth.actions;
