// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../assets';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
