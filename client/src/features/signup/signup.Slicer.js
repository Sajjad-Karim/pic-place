import { createSlice } from "@reduxjs/toolkit";
import { SignupUser } from "./Actions.signup";
const signup = createSlice({
  name: "signup",
  initialState: {
    isLoading: false,
    isSuccess: false,
    isRejected: false,
    erro: null,
    data: null,
  },
  // reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SignupUser.pending, (state, action) => {
      state.isLoading = true;
      state.isRejected = false;
      state.isSuccess = false;
    });
    builder.addCase(SignupUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isRejected = false;
      state.data = action.payload;
    });
    builder.addCase(SignupUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isRejected = true;
      state.erro = action.payload;
    });
  },
});
export default signup.reducer;
