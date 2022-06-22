import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Country from './Country';

const CountriesList = () => {
  const countriesArr = useSelector((state) => state.countries);
  return (
    <div className="cities-list">
      {
        countriesArr.map(
          (country) => (
            <Link className="link" to={`/Country/${country.Country_Region}`} key={countriesArr.indexOf(country)}>
              <Country
                countryName={country.Country_Region}
                confirmed={country.Confirmed}
                deaths={country.Deaths}
              />
            </Link>
          ),
        )
      }
    </div>
  );
};

export default CountriesList;
