import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  updatedDate: new Date().toLocaleDateString(),
  startDate: "",
  endDate: "",
  recruitmentCompleted: "",
  tableOfOrganization: "",
  content: "",
  hashTags: [],
  roles: [],
  stacks: [],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    updateProjectField(state, action) {
      const { name, value } = action.payload;
      state[name] = value;
    },
    addStack(state, action) {
      const stack = action.payload;
      state.stacks.push(stack);
    },
    removeStack(state, action) {
      const index = state.stacks.indexOf(action.payload);
      state.stacks.splice(index, 1);
    },
    addHashTag(state, action) {
      if (state.hashTags.length < 3) {
        state.hashTags.push(action.payload);
      }
    },
    removeHashTag(state, action) {
      const index = state.hashTags.indexOf(action.payload);
      state.hashTags.splice(index, 1);
    },
  },
});

export const {
  updateProjectField,
  addStack,
  removeStack,
  addHashTag,
  removeHashTag,
} = projectSlice.actions;

export default projectSlice.reducer;
