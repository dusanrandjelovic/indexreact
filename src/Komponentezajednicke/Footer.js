import React, { Component } from 'react';
import './Footer.css';
import logo from '../Slike/hahatrans.png';

class Footer extends Component {

    render(){
        return (
            <div className="futer">

                <div className="futerprvideo">
                <div>
                   <p>Signup/login, API, PHP contact forms, SQL queries. </p>
                   <p>React, SassCSS, WordPress online shoppes. </p>
                   <p>Responsive, validate and modern websites on first google page. </p>
                   <p>CRUD apps, Node, Express. </p>
                </div>
                <div>
                   <p><a href="https://authlara.000webhostapp.com" target="_blank"
                   rel="noopener noreferrer" >Laravel</a></p>
                   <p><a href="https://informalnoucenje.000webhostapp.com" target="_blank" 
                   rel="noopener noreferrer">WordPress Shop</a></p>
                   <p><a href="https://informalnoucenje.000webhostapp.com" target="_blank"
                   rel="noopener noreferrer">Login system</a></p>
                   <p><a href="https://heuristic-ride-ab60ef.netlify.com/" target="_blank"
                   rel="noopener noreferrer">React II</a></p>
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
