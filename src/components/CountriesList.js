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
            <div className="country-wrapper" key={countriesArr.indexOf(country)}>
              <Link className="link" to={`/Country/${country.Country_Region}`}>
                <Country
                  countryName={country.Country_Region}
                  confirmed={country.Confirmed}
                  deaths={country.Deaths}
                />
              </Link>
            </div>
          ),
        )
      }
    </div>
  );
};

export default CountriesList;
