import React, { Component } from 'react';

import Header from '../Komponentezajednicke/Header'; 
import Mainabout from './Mainabout';
import Footer from '../Komponentezajednicke/Footer';

class About extends Component {
    render(){
    return (
      <div className="App">
       <Header />
        <Mainabout />
        <Footer />
      </div>
    );
    }
  }
  
  export default About;