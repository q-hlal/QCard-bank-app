import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPlaying: false,
};

const audioSlice = createSlice({
  name: 'audio',
  initialState,
  reducers: {
    setPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
  },
});

export const { setPlaying } = audioSlice.actions;
export default audioSlice.reducer;
