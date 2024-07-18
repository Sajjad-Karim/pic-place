import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../http/http";

import axios from "axios";
export const SignupUser = createAsyncThunk(
  "signupUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/signup`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
