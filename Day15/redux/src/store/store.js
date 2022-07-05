// import {legacy_createStore as createStore} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import {counterSlice} from '../reducer/counterSlice';

const store = configureStore({
  reducer: {
    counterSlice
  }
});

export default store