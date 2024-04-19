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

export const authUser = createAsyncThunk("user/authUser", async (_) => {
  try {
    const response = await axiosInstance.get(`/user/auth`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const logoutUser = createAsyncThunk("user/logoutUser", async (_) => {
  try {
    const response = await axiosInstance.post(`/user/logout`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
