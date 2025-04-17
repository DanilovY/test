import { configureStore } from "@reduxjs/toolkit";

import { contactReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";

const store = configureStore({
  reducer: {
    contact: contactReducer,
    filter: filterReducer,
  },
});

export default store;
