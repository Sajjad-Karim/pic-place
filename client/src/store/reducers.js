import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/auth.Slicer";
import signupReducer from "../features/signup/signup.Slicer";

const rootReducer = combineReducers({
  auth: authReducer,
  signup: signupReducer,
});

export default rootReducer;
