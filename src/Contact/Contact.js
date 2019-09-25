import React, { Component } from 'react';

import Header from '../Komponentezajednicke/Header'; 
//import Maincontact, { Validiranaforma } from './Maincontact';
import Maincontact from './Maincontact';
import Footer from '../Komponentezajednicke/Footer';

class Contact extends Component {
    render(){
    return (
      <div className="App">
       <Header />
        <Maincontact />
        <Footer />
      </div>
    );
    }
  }
  
  export default Contact;