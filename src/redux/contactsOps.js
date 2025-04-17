import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://67d44531d2c7857431ed1527.mockapi.io";

export const fetchContact = createAsyncThunk(
  "contact/fetchContact",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/contacts");
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.massage);
    }
  }
);

export const addContact = createAsyncThunk(
  "contact/addContact",
  async (newCont, thunkAPI) => {
    try {
      const res = await axios.post("/contacts", newCont);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.massage);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  async (contId, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${contId}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.massage);
    }
  }
);
