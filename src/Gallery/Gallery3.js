import React, { Component } from 'react';
import poz from '../Slike/poz.jpg';

class Gallery3 extends Component {
    render(){
        return(
            <div>
           
           <div className="row">
      <div className="column">
        <img src={poz} style={{width:100+'%'}}  className="hover-shadow cursor"/>
      </div>
      <div className="column">
        <img src={poz} style={{width:'100%'}}  className="hover-shadow cursor"/>
      </div>
      <div className="column">
        <img src={poz} style={{width:'100%'}} className="hover-shadow cursor"/>
      </div>
      <div className="column">
        <img src={poz} style={{width:'100%'}}   className="hover-shadow cursor"/>
      </div>
    </div>
    

       </div>
        )
    }
}


export default Gallery3;