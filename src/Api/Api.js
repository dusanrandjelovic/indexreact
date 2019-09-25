import React, { Component } from 'react';
import './Api.css';
import Header from '../Komponentezajednicke/Header';  
import App from './Mainapi';
import Footer from '../Komponentezajednicke/Footer';

class Api extends Component {
    render(){
  return (
    <div>
     <Header />
      <App naslov="Star Wars"/>
      <Footer />
    </div>
  );
    }
}

export default Api;