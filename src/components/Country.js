import PropTypes from 'prop-types';

const Country = (props) => {
  const { countryName, confirmed, deaths } = props;
  return (
    <div className="country-container">
      <div className="country-content">
        <div className="country-name">
          {countryName}
        </div>
        <div className="status">
          {confirmed}
          <br />
          {deaths}
        </div>
      </div>
    </div>
  );
};

Country.propTypes = {
  confirmed: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
  deaths: PropTypes.string.isRequired,
};

export default Country;
