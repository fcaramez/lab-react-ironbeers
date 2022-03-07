import './App.css';
import Home from './Pages/Home';
import BeersPage from './Pages/BeersPage';
import RandomBeerPage from './Pages/RandomBeerPage';
import NewBeerPage from './Pages/NewBeerPage';
import SingleBeer from './Pages/SingleBeer'
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<BeersPage />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<NewBeerPage />} />
        <Route path="/beer/:beerId" element={<SingleBeer/>}/>
      </Routes>
    </div>
  );
}

export default App;
