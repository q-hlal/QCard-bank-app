import { createSlice } from '@reduxjs/toolkit';

const scrollSlice = createSlice({
  name: 'scroll',
  initialState: { scrollY: 0 },
  reducers: {
    setScrollY: (state, action) => {
      state.scrollY = action.payload;
    },
  },
});

export const { setScrollY } = scrollSlice.actions;
export default scrollSlice.reducer;