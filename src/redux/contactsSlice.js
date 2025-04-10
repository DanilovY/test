import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contact",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const selectContacts = (state) => state.contact.items;
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactReducer = contactsSlice.reducer;
