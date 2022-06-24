import PropTypes from 'prop-types';

const Country = (props) => {
  const {
    countryName, confirmed, deaths, selectedView,
  } = props;
  return (
    <div className="country-container">
      <div className="country-content">
        <div className="country-name">
          {countryName}
        </div>
        <div className="status">
          { selectedView === 'confirmed'
           && (
           <p className="confirmed">
             Confirmed Cases
             <br />
             {confirmed}
           </p>
           )}
          {selectedView === 'deaths'
            && (
            <p className="deaths">
              Deaths
              <br />
              {deaths}
            </p>
            )}
        </div>
      </div>
    </div>
  );
};

Country.propTypes = {
  confirmed: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
  deaths: PropTypes.string.isRequired,
  selectedView: PropTypes.string.isRequired,
};

export default Country;
