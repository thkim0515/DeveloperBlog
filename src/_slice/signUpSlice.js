import { createSlice } from "@reduxjs/toolkit";

export const signUpSlice = createSlice({
  name: "signUp",
  initialState: {
    userInputData: {
      id: "",
      nickname: "",
      email: "",
      password: "",
      rePassword: "",
    },
    isEmailVerified: false,
  },
  reducers: {
    setInputData: (state, action) => {
      state.userInputData = action.payload;
    },
    setEmailVerified: (state, action) => {
      state.isEmailVerified = action.payload;
    },
  },
});

export const { setInputData, setEmailVerified } = signUpSlice.actions;

export default signUpSlice.reducer;
