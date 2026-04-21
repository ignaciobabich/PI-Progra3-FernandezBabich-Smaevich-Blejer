import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Home from './Screens/Home/Home';
import Detalle from './Screens/Detalle/Detalle'
import Header from './Components/Header/Header';
import NotFound from './Screens/NotFound/NotFound';
import Login from './Screens/Login/Login';
import Register from './Screens/Register/Register';
import SectionPelis from './Components/SectionPelis/SectionPelis';
import TVShows from './Components/TVShows/TVShows';
import Favoritos from './Screens/Favoritos/Favoritos';
import LogOut from './Screens/LogOut/LogOut';



function App() {
  return (
    <>
      <Header/>
        <Switch>
          <Route  path="/register" component={Register}/>
          <Route  path="/login" component={Login}/>
          <Route  path="/logout" component={LogOut}/>
          <Route  exact path="/" component={Home}/>
          <Route  path="/sectionpelis" component={SectionPelis}/>
          <Route  path="/tvshows" component={TVShows}/>
          <Route  path="/favoritos" component={Favoritos}/>
          <Route  path="/detalle/:id" component={Detalle}/>
          <Route component={NotFound}/>
        </Switch>
      <Footer/>
    </>
  );
}

export default App;

