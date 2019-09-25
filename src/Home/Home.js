import React, { Component } from 'react';

import Header from '../Komponentezajednicke/Header';  
import Main from './Mainhome';
import Footer from '../Komponentezajednicke/Footer';

class Home extends Component {
    render(){
  return (
    <div className="App">
     <Header />
      <Main />
      <Footer />
    </div>
  );
    }
}

export default Home;