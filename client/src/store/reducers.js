import { combineReducers } from "@reduxjs/toolkit";

import signupReducer from "../features/signup/signup.Slicer";
import authSlicer from "../features/auth/auth.Slicer";
import sidebarSlice from "../features/sidebar/sidebar.Slice";
const rootReducer = combineReducers({
  signup: signupReducer,
  auth: authSlicer,
  sidebar: sidebarSlice,
});

export default rootReducer;
