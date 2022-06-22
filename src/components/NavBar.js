import searchIcon from '../img/search.svg';

const Navbar = () => (
  <nav>
    <div className="bookstore-title">
      <select name="views" id="views">
        <option value="confirmed">Confirmed Cases View</option>
        <option value="deaths">Deaths View</option>
      </select>
    </div>
    <img className="search-icon" src={searchIcon} alt="" />
  </nav>
);

export default Navbar;
