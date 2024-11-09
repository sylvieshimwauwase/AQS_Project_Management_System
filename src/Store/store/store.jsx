import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    // other reducers if any
  },
});

export default store;
