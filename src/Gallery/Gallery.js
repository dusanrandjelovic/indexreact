import React, { Component } from 'react';
import Header from '../Komponentezajednicke/Header'; 
import Maingallery from './Maingallery';
import Footer from '../Komponentezajednicke/Footer';

class Gallery extends Component {

 
    render(){


    return (
      <div className="App">
       <Header />
        <Maingallery title="Galerija slika." />
        <Footer />
      </div>
    );
    }
  }
  
  export default Gallery;