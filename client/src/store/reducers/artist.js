import { createSlice } from "@reduxjs/toolkit";
import { getArtist } from "../thunks/artist";
import { toast } from "react-toastify";

const artistSlice = createSlice({
  name: "artist",
  initialState: {
    artist: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getArtist.fulfilled, (state, action) => {
        state.artist = action.payload;
      })
      .addCase(getArtist.rejected, (state, action) => {
        toast.error(action.payload.response.data.message);
      });
  },
});

export default artistSlice.reducer;
