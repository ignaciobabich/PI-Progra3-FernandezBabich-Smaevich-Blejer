import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import SearchBar from '../../Components/SearchBar/SearchBar'

function Register(){
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <SeccionPeliculas/>
      <SeccionPeliculas/>
      <CardsForTVShows/>
      <CardsForTVShows/>
      <Footer />
    </div>
  );
}