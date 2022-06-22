import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

const CountryDetails = () => {
  const { countryName } = useParams();
  const countriesArr = useSelector((state) => state.countries);
  const [countryObj] = countriesArr.filter((country) => country.Country_Region === countryName);
  return (
    <div>
      <h1>{countryObj.Country_Region}</h1>
    </div>
  );
};

export default CountryDetails;
