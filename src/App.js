import React from 'react';
//import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
//import SearchBar from './Components/SearchBar/SearchBar';
//import CardsForTVShows from './Components/CardsForTVShows/CardsForTVShows';
import Home from './Screens/Home/Home';
//import SectionPelis from './Components/SectionPelis/SectionPelis'
//import TVShows from './Components/TVShows/TVShows';
//import NotFound from './Screens/NotFound/NotFound';
import Detalle from './Screens/Detalle/Detalle'
import { Link, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Route exact path="/">
      <Home/>
      </Route>

      <Route exact path="/Detalle">
       <Detalle/>
      </Route>


      <Footer />
    </div>
  );
}

export default App;

// falta poner el switch con todas las rutas y linkear todo
