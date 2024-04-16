import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";
import { toast } from "react-toastify";

export const getSongs = createAsyncThunk(
  "admin/getSongs",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/songs?personal=true`);

      return res.data.data.songs;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const uploadSong = createAsyncThunk(
  "admin/uploadSong",
  async ({ data }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`/songs`, data);

      toast.success("Song uploaded");

      return res.data.data.song;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const updateSong = createAsyncThunk(
  "admin/updateSong",
  async ({ data, id }, { rejectWithValue }) => {
    try {
      const res = await axios.patch(`/songs/${id}`, data);

      toast.success("Song updated");

      return res.data.data.song;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const deleteSong = createAsyncThunk("user/deleteSong", async (id) => {
  try {
    await axios.delete(`/songs/${id}`);

    toast.success("Song deleted");
  } catch (err) {
    throw err;
  }
});
