import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Mainhome.css';
import Hoverefekat from './Hoverefekat';
import zenasesir from '../Slike/zenasesir.png';


class Main extends Component {

  scrolGore = () => window.scrollTo(0, 0);
 
    render(){
      const date = new Date();
      const hours = date.getHours();
      let pozdrav
      
      const stilovi = {
        background: 'linear-gradient(rgb(55, 58, 55), rgb(64, 90, 117))',
        border: '2px solid inherit',
        borderRadius: '8px',
        width: '250px',
        margin: '0 auto',
        padding: '10px',
        opacity: '0.9'
      }
      
      if (hours < 11){
        pozdrav = "Every morning brings ... begining";
        stilovi.color = "whitesmoke";
      }
      else if (hours < 18){
        pozdrav = "Every day brings ... light";
        stilovi.color = "red";
      }
      else {
        pozdrav = "Every evening brings ... dark";
        stilovi.color = "black";
      }

        return (
            <div className="pozadina">
              <main id="mainhome">
              <h1>React website Showcase.</h1>
              <h2><em>Made by Dusan.</em></h2>
             
              <p style={stilovi}>{pozdrav}</p>

              <div className="homered">
              <a style={stilovi} href="https://carwash1.000webhostapp.com" 
              target="_blank" rel="noopener noreferrer" >Car Wash</a>
              <a style={stilovi} href="https://berbernica.000webhostapp.com" 
              target="_blank" rel="noopener noreferrer" >Barbers</a>
              <a style={stilovi} href="https://dusanrandjelovic.000webhostapp.com" 
              target="_blank" rel="noopener noreferrer">Portfolio</a>
              </div>
              </main>

            <Hoverefekat />

            <div className="redtrihome">
              <div>
              <p>This website presents user interface made by React.js.
              It has routing, an API functionality, contact form, gallery, map, font-awesome, 
              x-o game from official React website. 
              Website is hosted by netlify. 
              </p>
              <p>If you look my other work you can see that I can make almost any website. I can use <strong>SassCss</strong>, 
              <strong> PHP</strong>, <strong>SQL</strong>.</p>
              </div>
              <div>
              <img src={zenasesir} alt="sample38"></img>
            </div>
            </div>

            <div className="redcetirihome">
               <p>Responsive React Website</p>
               <NavLink className="kakontakt" to='/Contact' onClick={this.scrolGore}>Contact Page</NavLink>
            </div>

            </div>
        )
    }
}


export default Main;