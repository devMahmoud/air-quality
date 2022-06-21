import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import cityReducer from './cities/cities';

const store = configureStore({
  reducer: {
    city: cityReducer,
  },
  middleware: [thunk],
});

export default store;
