import getData from '../../services/CityService';

const GET_CITY_DATA = 'air-quality/cities/GET_CITY_DATA';

export const getCityData = (cityName) => async (dispatch) => {
  try {
    const res = await getData(cityName);
    const { data } = await res.json();
    const cityData = {
      id: data.idx,
      aqi: data.aqi,
      url: data.city.url,
    };
    console.log('cityData', cityData);
    dispatch({
      type: GET_CITY_DATA,
      cityData,
    });
  } catch (err) {
    console.log(err);
  }
};

export default function cityReducer(state = [], action = {}) {
  console.log('state', state);
  switch (action.type) {
    case GET_CITY_DATA:
      return [...state, action.cityData];
    default: return state;
  }
}
