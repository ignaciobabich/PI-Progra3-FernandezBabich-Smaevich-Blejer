import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SearchBar from './Components/SearchBar/SearchBar';
// import Card from './Components/Card/Card';
import SeccionPeliculas from './Components/SeccionPeliculas/SeccionPeliculas';
import CardsForTVShows from './Components/CardsForTVShows/CardsForTVShows';
import Home from './Screens/Home/Home';


function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
        <SearchBar />
        <SeccionPeliculas/>
        <SeccionPeliculas/>
        <CardsForTVShows/>
        <CardsForTVShows/>
      
      <Footer />
    </div>
  );
}

export default App;
