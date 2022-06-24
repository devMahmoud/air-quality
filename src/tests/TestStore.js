import { configureStore } from '@reduxjs/toolkit';
import countryReducer from '../redux/countries/countries';

const testStore = () => {
  const preloadedState = {
    countries: [
      {
        Country_Region: 'Albania',
        Last_Update: '2022-06-23 04:20:55',
        Confirmed: '277940',
        Deaths: '3497',
        Incident_Rate: '9658.072138439084',
      },
    ],
  };

  return configureStore({
    preloadedState,
    reducer: {
      countries: countryReducer,
    },
  });
};

export default testStore;
