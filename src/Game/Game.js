import React, { Component } from 'react';
import './Game.css';
import Header from '../Komponentezajednicke/Header';  
import MainGame from './Maingame';
import Footer from '../Komponentezajednicke/Footer';

class Game extends Component {
    render(){
  return (
    <div>
     <Header />
      <MainGame naslov="Iks Oks"/>
      <Footer />
    </div>
  );
    }
}

export default Game;