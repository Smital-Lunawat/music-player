import { createSlice } from "@reduxjs/toolkit";

const queueSlice = createSlice({
  name: "queue",
  initialState: {
    list: [],
    current: 0,
    currentId: "",
  },
  reducers: {
    replaceQueue: (state, action) => {
      state.list = action.payload.songs;
      state.current = action.payload.i || 0;
      state.currentId = action.payload.id || state.list[0].id;
    },
    changeCurrent: (state, action) => {
      state.current = action.payload.i;
      state.currentId = action.payload.id;
    },
    nextSong: (state) => {
      if (state.list.length - 1 === state.current) {
        state.current = 0;
        state.currentId = state.list[0].id;
      } else {
        state.current += 1;
        state.currentId = state.list[state.current].id;
      }
    },
    prevSong: (state) => {
      if (0 === state.current) {
        state.current = state.list.length - 1;
        state.currentId = state.list[state.current].id;
      } else {
        state.current -= 1;
        state.currentId = state.list[state.current].id;
      }
    },
  },
});

export const { replaceQueue, changeCurrent, nextSong, prevSong } =
  queueSlice.actions;
export default queueSlice.reducer;
