import getData from '../../services/CountryService';

const GET_COUNTRY_DATA = 'air-quality/countries/GET_COUNTRY_DATA';

export const getCountryData = () => async (dispatch) => {
  try {
    const res = await getData();
    const { rawData } = await res.json();
    const sample = rawData.slice(0, 30);
    const filteredSample = sample.filter((country) => !country.Province_State);
    dispatch({
      type: GET_COUNTRY_DATA,
      filteredSample,
    });
  } catch (err) {
    throw new Error(err);
  }
};

export default function countryReducer(state = [], action = {}) {
  switch (action.type) {
    case GET_COUNTRY_DATA:
      return action.filteredSample;
    default: return state;
  }
}
