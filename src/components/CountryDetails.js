import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

const CountryDetails = () => {
  const { countryName } = useParams();
  const countriesArr = useSelector((state) => state.countries);
  const [countryObj] = countriesArr.filter((country) => country.Country_Region === countryName);
  return (
    <div className="details-wrapper">
      <h1 className="title">{countryObj.Country_Region}</h1>
      <div className="details-item">
        <p>Last Update</p>
        <p>{countryObj.Last_Update}</p>
      </div>
      <div className="details-item">
        <p>Confirmed Cases</p>
        <p>{countryObj.Confirmed}</p>
      </div>
      <div className="details-item">
        <p>Deaths</p>
        <p>{countryObj.Deaths}</p>
      </div>
      <div className="details-item">
        <p>Incident Rate</p>
        <p>{countryObj.Incident_Rate}</p>
      </div>
    </div>
  );
};

export default CountryDetails;
