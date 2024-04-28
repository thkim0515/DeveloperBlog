import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const projectSlice = createSlice({
  name: "project",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setData, setLoading, setError } = projectSlice.actions;

export const fetchData = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const result = await axios.get("/mock/projectData.json");
    dispatch(setData(result.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
