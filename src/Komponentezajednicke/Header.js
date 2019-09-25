import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../Slike/hahatrans.png';
import './Header.css';

class Header extends Component {
   

    render(){
        return (
            <div className="App-header">
               <nav>
<div className="navlevo">
<NavLink to='/'><img src={logo} alt="hotel logo" className="logo"/></NavLink>
<a href="https://dusanrandjelovic.000webhostapp.com" 
              target="_blank" rel="noopener noreferrer" id="portfoliodugme">Portfolio</a>
</div>
<div class="topnav" id="myTopnav">
              <NavLink className="a" activeClassName="active" to='/' exact >Home</NavLink>
              <NavLink className="a" to='/About'>About Us</NavLink>
              <NavLink className="a" to='/Api'>Api</NavLink>
              <NavLink className="a" to='/Gallery'>Gallery</NavLink>
              <NavLink className="a" to='/Game'>Game</NavLink>
              <NavLink className="a" to='/Contact' id="dugme">Contact</NavLink>
              <a href="javascript:void(0);" className="icon" onClick={navigacija}>&#9776;</a>
</div>

</nav>
            </div>
        )
    }
}
function navigacija() {
    var meni = document.getElementById("myTopnav");
    if (meni.className === "topnav") {
        meni.className += " responsive";
    } else {
        meni.className = "topnav";
    }
}

export default Header;