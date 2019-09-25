import React, { Component } from 'react';
import poz from '../Slike/poz.jpg';

class Gallery2 extends Component {
    render(){
        return(
            <div className="redfrizure">
             <div className="container">
                 <div className="gal"> <img src={poz} alt="Barber Shop | haircut"></img></div>
                 <div className="gal"> <img src={poz} alt="Barber Shop | haircut"></img></div>
                 <div className="gal"> <img src={poz} alt="Barber Shop | haircut"></img></div>
                 <div className="gal"> <img src={poz} alt="Barber Shop | haircut"></img></div>
                 
             </div>


          </div>
        )
    }
}


export default Gallery2;