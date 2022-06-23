import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Country from '../components/Country';
import searchIcon from '../img/search.svg';

const HomePage = () => {
  const countriesArr = useSelector((state) => state.countries);
  const [view, setView] = useState('confirmed');
  return (
    <div className="home">
      <nav>
        <div className="bookstore-title">
          <select name="views" id="views" value={view} onChange={(e) => setView(e.target.value)}>
            <option value="confirmed">Confirmed Cases View</option>
            <option value="deaths">Deaths View</option>
          </select>
        </div>
        <img className="search-icon" src={searchIcon} alt="" />
      </nav>
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
                  selectedView={view}
                />
              </Link>
            </div>
          ),
        )
        }
      </div>
    </div>
  );
};

export default HomePage;
