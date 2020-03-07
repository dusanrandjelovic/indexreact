import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Mainabout.css';
import poz from '../Slike/poz.jpg';
import Kartica from './Karticeabout';


class Main extends Component {

  scrolGore = () => window.scrollTo(0, 0);

    render(){
        return (
          <div>
          <div id="mainabout">
            <div className="mainabouttext">
            <h1>About.</h1>
            <h2>This is about page.</h2>
            <a href="#pozadinaabout" id="dugmeabout">View More</a>
            </div>
            <div className="mainaboutslika">

            </div>
          </div>
            <div id="pozadinaabout">
              <h1>About us page.</h1>
             <p>Made by Dusan</p>

             <div className="kolona">
               <Kartica 
               naslov="Frontend" 
               text="Modern and responsive website development with SEO optimization and SassCSS."
               imgLink={poz}
               />
               <Kartica 
                 naslov="WordPress" 
                 text="WP websites with numerous plugins such as for security, multilanguage, shop."
                 imgLink={poz}
               />
               <Kartica 
                 naslov="Laravel and SQL" 
                 text="CRUD apps, contact forms, admin panel, shop and checkout, login/signup systems."
                 imgLink={poz}
               />

             </div>
        
            </div>

            <div className="redcetirihome">
               <p>Responsive React Website</p>
               <NavLink className="kakontakt" to='/Contact' onClick={this.scrolGore}>Contact</NavLink>
            </div>

            </div>
             
        )
    }
}


export default Main;