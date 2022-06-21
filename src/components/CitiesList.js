import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCityData } from '../redux/cities/cities';
import City from './City';

const CitiesList = () => {
  const cities = ['Paris', 'Beijing', 'Tokyo', 'Algiers', 'Accra', 'Tbilisi'];
  const citiesArr = useSelector((state) => state.city);
  const dispatch = useDispatch();
  useEffect(() => {
    cities.forEach((city) => dispatch(getCityData(city)));
  }, []);
  return (
    <div className="cities-list">
      {
        citiesArr.map((city) => <City key={cities.indexOf(city)} cityObj={city} />)
      }
    </div>
  );
};

export default CitiesList;
