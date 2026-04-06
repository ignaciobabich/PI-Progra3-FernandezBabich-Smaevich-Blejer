import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import SearchBar from './Components/SearchBar/SearchBar';
import Card from './Components/Card/Card';
import SeccionPeliculas from './Components/SeccionPeliculas/SeccionPeliculas';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <SeccionPeliculas/>
      <SeccionPeliculas/>
      <Footer />
    </div>
  );
}

export default App;
