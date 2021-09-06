import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "bookList",
  initialState: {
    title: "",
    sortType: 0,
    page: 1,
    number: 0,
    list: [],
  },
  reducers: {
    updateList: (state, action) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateList } = listSlice.actions;

export default listSlice.reducer;
