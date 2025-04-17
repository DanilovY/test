// import { createSlice } from "@reduxjs/toolkit";

// const contactsSlice = createSlice({
//   name: "contact",
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     addContact: (state, action) => {
//       state.items.push(action.payload);
//     },
//     deleteContact: (state, action) => {
//       state.items = state.items.filter(
//         (contact) => contact.id !== action.payload
//       );
//     },
//   },
// });

// export const selectContacts = (state) => state.contact.items;
// export const { addContact, deleteContact } = contactsSlice.actions;
// export const contactReducer = contactsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { fetchContact, addContact, deleteContact } from "./contactsOps";

const contactsSlice = createSlice({
  name: "contact",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContact.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;

        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      });
  },
});

export const selectError = (state) => state.contact.error;
export const selectLoading = (state) => state.contact.loading;
export const selectContacts = (state) => state.contact.items;
export const contactReducer = contactsSlice.reducer;
