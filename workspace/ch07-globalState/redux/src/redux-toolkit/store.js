
import counterSlice from '@redux-toolkit/counterSlice';
import { configureStore } from '@reduxjs/toolkit';
// import { legacy_createStore as createStore } from 'redux';

const store = configureStore({
  reducer: {
    counterStore: counterSlice.reducer
  }
});

export default store;