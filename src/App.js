import { Routes, Route } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import './App.css';
import Navbar from './components/NavBar';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesList />} />
        <Route path="/Country/:countryName" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
