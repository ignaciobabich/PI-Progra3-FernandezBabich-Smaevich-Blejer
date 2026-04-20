import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Home from './Screens/Home/Home';
import Detalle from './Screens/Detalle/Detalle'
import Header from './Components/Header/Header';
import NotFound from './Screens/NotFound/NotFound';



function App() {
  return (
    <>
      <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/detalle" component={Detalle}/>
          <Route component={NotFound}/>
        </Switch>
      <Footer/>
    </>
  );
}

export default App;

