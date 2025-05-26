import { configureStore } from '@reduxjs/toolkit';
import scrollReducer from './scrollSlice';
import audioReducer from './audioSlice';

export const store = configureStore({
  reducer: {
    scroll: scrollReducer,
    audio: audioReducer,
  },
});
