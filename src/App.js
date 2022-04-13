import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import DirectorListings from './Components/DirectorListings'
import MoviesDetails from './Components/MoviesDetails'
import MoviesListing from './Components/MoviesListing'




function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element={<DirectorListings/>} /> 
          <Route path='/movies/:directorId' exact element={<MoviesDetails/>} />
          <Route path='/movies' exact element={<MoviesListing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
