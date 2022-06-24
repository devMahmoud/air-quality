import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import countryReducer from './countries/countries';

const store = configureStore({
  reducer: {
    countries: countryReducer,
  },
  middleware: [thunk],
});

export default store;
