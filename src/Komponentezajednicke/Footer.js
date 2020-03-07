import React, { Component } from 'react';
import './Footer.css';
import logo from '../Slike/hahatrans.png';

class Footer extends Component {

    render(){
        return (
            <div className="futer">

                <div className="futerprvideo">
                <div>
                   <p>Signup/login, API, contact forms, admin panel. </p>
                   <p>React, SassCSS, WordPress online shoppes. </p>
                   <p>Responsive and modern websites on first google page. </p>
                   <p>CRUD apps, database. Laravel shop. </p>
                </div>
                <div>
                   <p><a href="https://jedantackasedam.000webhostapp.com" target="_blank"
                   rel="noopener noreferrer" >Laravel Shop</a></p>
                   <p><a href="https://dusanshop.000webhostapp.com" target="_blank" 
                   rel="noopener noreferrer">WordPress Shop</a></p>
                   <p><a href="https://13decverzija.000webhostapp.com" target="_blank"
                   rel="noopener noreferrer">Login system</a></p>
                   <p><a href="https://berbernica.000webhostapp.com" target="_blank"
                   rel="noopener noreferrer">Frontend</a></p>
                </div>
                <div>
                <img src={logo} alt="hotel logo" className="logo"/>
                <p>Logo design, image modifications. </p>
                <p>SEO optimization. </p>
                </div>
                </div>

               <p>&copy; Dusan Randjelovic Team</p>
            </div>
        )
    }
}


export default Footer;