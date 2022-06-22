import getData from '../../services/CountryService';

const GET_COUNTRY_DATA = 'air-quality/countries/GET_COUNTRY_DATA';

export const getCountryData = () => async (dispatch) => {
  try {
    const res = await getData();
    const { rawData } = await res.json();
    const topTwenty = rawData.slice(0, 20);
    dispatch({
      type: GET_COUNTRY_DATA,
      topTwenty,
    });
  } catch (err) {
    console.log(err);
  }
};

export default function countryReducer(state = [], action = {}) {
  switch (action.type) {
    case GET_COUNTRY_DATA:
      return action.topTwenty;
    default: return state;
  }
}
