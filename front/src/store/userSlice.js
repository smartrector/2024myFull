import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  userData: {
    id: "",
    eamil: "",
    name: "",
    role: 0,
    image: "",
  },
  isAuth: false,
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  // extraReducers:(builder)=>{
  //     builder.addCase().addCase().addCase()
  // }
});

export default userSlice.reducer;
