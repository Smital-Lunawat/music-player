import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";
import { toast } from "react-toastify";

export const getPlaylist = createAsyncThunk(
  "playlist/getPlaylist",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/playlists/${id}`);

      return res.data.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const updatePlaylist = createAsyncThunk(
  "playlist/editPlaylist",
  async ({ data, id }, { rejectWithValue }) => {
    try {
      const res = await axios.patch(`/playlists/${id}`, data);

      toast.success("Playlist updated");

      return res.data.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export const likePlaylist = createAsyncThunk(
  "playlist/likePlaylist",
  async (id) => {
    try {
      const res = await axios.post(`/playlists/likes/add`, {
        playlist: id,
      });

      toast.success("Saved to Your Library");

      return res.data.playlists;
    } catch (err) {
      console.log(err);
    }
  },
);

export const dislikePlaylist = createAsyncThunk(
  "playlist/dislikePlaylist",
  async (id) => {
    try {
      const res = await axios.post(`/playlists/likes/remove`, {
        playlist: id,
      });

      toast.success("Removed from Your Library");

      return res.data.playlists;
    } catch (err) {
      console.log(err);
    }
  },
);
