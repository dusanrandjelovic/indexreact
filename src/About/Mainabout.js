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
               naslov="Dusan" 
               text="Modern and responsive website development with SEO optimization and SassCSS."
               imgLink={poz}
               />
               <Kartica 
                 naslov="React" 
                 text="UI design with React, API and single page apps implementation. Basic Node and Express."
                 imgLink={poz}
               />
               <Kartica 
                 naslov="PHP and SQL" 
                 text="CRUD apps, contact forms, search filters, login/signup systems. Very basic Laravel."
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