import { useState } from 'react';
import searchIcon from '../img/search.svg';

const Navbar = () => {
  const [view, setView] = useState('confirmed');
  return (
    <nav>
      <div className="bookstore-title">
        <select name="views" id="views" value={view} onChange={(e) => setView(e.target.value)}>
          <option value="confirmed">Confirmed Cases View</option>
          <option value="deaths">Deaths View</option>
        </select>
      </div>
      <img className="search-icon" src={searchIcon} alt="" />
    </nav>
  );
};

export default Navbar;
