// import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Country = (props) => {
  const { countryName, confirmed } = props;

  /* useEffect(() => {
    dispatch(getCityData(cityName));
  }, []);
  */
  return (
    <div>
      {countryName}
      {confirmed}
    </div>
  );
};

Country.propTypes = {
  confirmed: PropTypes.string.isRequired,
  /* cityData: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  */
  countryName: PropTypes.string.isRequired,
};

export default Country;
