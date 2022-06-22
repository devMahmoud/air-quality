import searchIcon from '../img/search.svg';

const Navbar = () => (
  <nav>
    <div className="bookstore-title">
      Sort By
    </div>
    <img className="search-icon" src={searchIcon} alt="" />
  </nav>
);

export default Navbar;
