import { combineReducers } from "@reduxjs/toolkit";
import signupSlicer from "../features/signup/signup.Slicer";
export const reducers = combineReducers({
  signup: signupSlicer,
});
