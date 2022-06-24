import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Country/:countryName" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
