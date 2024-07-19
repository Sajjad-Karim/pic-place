import { createSlice } from "@reduxjs/toolkit";
import { SignupUser } from "./Actions.signup";
const signup = createSlice({
  name: "signup",
  initialState: {
    isLoading: false,
    isSuccess: false,
    isRejected: false,
    error: null,
    data: {},
  },
  reducers: {
    resetSingupState: (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isRejected = false;
      state.error = null;
      state.data = null;
    },
  },
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
      console.log(action.payload);
      state.isLoading = false;
      state.isSuccess = false;
      state.isRejected = true;
      state.error = action.payload;
    });
  },
});
export default signup.reducer;
export const { resetSingupState } = signup.actions;
