import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "" };

const filtersSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const selectNameFilter = (state) => state.filter.name;
export const filterReducer = filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;
