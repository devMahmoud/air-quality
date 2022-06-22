import { useSelector } from 'react-redux';
import Country from './Country';

const CitiesList = () => {
  const countriesArr = useSelector((state) => state.countries);
  return (
    <div className="cities-list">
      {
        countriesArr.map(
          (country) => (
            <Country
              key={countriesArr.indexOf(country)}
              countryName={country.Country_Region}
              confirmed={country.Confirmed}
            />
          ),
        )
      }
    </div>
  );
};

export default CitiesList;
