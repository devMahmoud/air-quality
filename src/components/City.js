import PropTypes from 'prop-types';

const City = (props) => {
  const { cityObj } = props;

  return (
    <div>
      {cityObj.id}
    </div>
  );
};

City.propTypes = {
  cityObj: PropTypes.string.isRequired,
};

export default City;
