import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import micIcon from '../img/mic-20.png';

const CountryDetails = () => {
  const { countryName } = useParams();
  const countriesArr = useSelector((state) => state.countries);
  const [countryObj] = countriesArr.filter((country) => country.Country_Region === countryName);
  return (
    <div className="details-wrapper">
      <nav className="nav-container">
        <Link className="link" to="/">
          <button type="button" className="back-btn btn">&#10096;</button>
        </Link>
        <div className="icons">
          <img src={micIcon} className="mic-icon" alt="" />
          <button type="button" className="setting-btn btn">&#9881;</button>
        </div>
      </nav>
      <h1 className="title">{countryObj.Country_Region}</h1>
      <div className="details-item">
        <p>
          Last Update
          <br />
          {countryObj.Last_Update}
        </p>
      </div>
      <div className="details-item">
        <p>
          Confirmed Cases
          <br />
          {countryObj.Confirmed}
        </p>
      </div>
      <div className="details-item">
        <p>
          Deaths
          <br />
          {countryObj.Deaths}
        </p>
      </div>
      <div className="details-item">
        <p>
          Incident Rate
          <br />
          {countryObj.Incident_Rate}
        </p>
      </div>
    </div>
  );
};

export default CountryDetails;
