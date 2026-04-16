import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SearchBar from './Components/SearchBar/SearchBar';
import SeccionPeliculas from './Components/SeccionPeliculas/SeccionPeliculas';
import CardsForTVShows from './Components/CardsForTVShows/CardsForTVShows';
import Home from './Screens/Home/Home';
import SectionPelis from './Components/SectionPelis/SectionPelis'
import TVShows from './Components/TVShows/TVShows';


function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
        <SearchBar />
        <SectionPelis/>
        <TVShows/>
      
      <Footer />
    </div>
  );
}

export default App;
