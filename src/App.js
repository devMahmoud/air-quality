import { Routes, Route } from 'react-router-dom';
import CitiesList from './components/CitiesList';
import './App.css';
import Navbar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<CitiesList />} />
      </Routes>
    </div>
  );
}

export default App;
