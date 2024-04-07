import { createSlice } from "@reduxjs/toolkit";
import { getPlaylist, updatePlaylist } from "../thunks/playlist";
import { toast } from "react-toastify";

const playlistSlice = createSlice({
  name: "playlist",
  initialState: {
    playlist: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get playlist
      .addCase(getPlaylist.fulfilled, (state, action) => {
        state.playlist = action.payload.playlist;
      })
      .addCase(getPlaylist.rejected, (state, action) => {
        toast.error(action.payload.response.data.message);
      }) // Update playlist
      .addCase(updatePlaylist.fulfilled, (state, action) => {
        state.playlist.name = action.payload.playlist.name;
        state.playlist.img = action.payload.playlist.img;
        state.playlist.description = action.payload.playlist.description;
      })
      .addCase(updatePlaylist.rejected, (state, action) => {
        toast.error(action.payload.response.data.message);
      });
  },
});

export default playlistSlice.reducer;
