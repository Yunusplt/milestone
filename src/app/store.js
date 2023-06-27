import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '../features/blogSlice';
import authReducer from '../features/authSlice';

const store = configureStore({
  reducer: {
    blog: blogReducer,
    auth: authReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store