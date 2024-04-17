import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosInstance from "../utils/axios";

export const loginUser = createAsyncThunk("user/loginUser", async (body) => {
  try {
    const res = await axiosInstance.post("/user/login", body);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

export const authUser = createAsyncThunk(
  "user/authUser",
  async (_, thunkAPI) => {
    try {
      console.log("시동");
      const response = await axiosInstance.get(`/user/auth`);

      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data || error.message);
    }
  }
);
