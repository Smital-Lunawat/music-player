import axios from "../../api/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getArtist = createAsyncThunk(
  "artist/getArtist",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/users/${id}`);

      return res.data.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);
