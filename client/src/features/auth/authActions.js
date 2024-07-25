import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../http/http";
export const loginUser = createAsyncThunk(
  "user",
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, loginData);
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      localStorage.setItem("author", response.data.author);
      localStorage.setItem("role", response.data.role);
      return response.data;
    } catch (error) {
      if (error.message && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
