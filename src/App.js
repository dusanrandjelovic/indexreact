import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.css';

import Home from './Home/Home';
import About from './About/About';
import Gallery from './Gallery/Gallery';
import Contact from './Contact/Contact';
import Api from './Api/Api';
import Game from './Game/Game';
import Error from './Error';

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/about" component={About} exact />
    <Route path="/api" component={Api} exact />
    <Route path="/gallery" component={Gallery} exact />
    <Route path="/game" component={Game} exact />
    <Route path="/contact" component={Contact} exact />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
    
  );
}

export default App;
