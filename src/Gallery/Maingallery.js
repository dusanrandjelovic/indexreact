import React, { Component } from 'react';
import './Gallery.css';
import poz from '../Slike/poz.jpg';
//import Gallery2 from './Gallery2';
//import Gallery3 from './Gallery3';

import Gal from './Gallery5';


/*
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
const IMAGES =
[{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
 
{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]
<Gallery images={IMAGES}/>
*/

class Main extends Component {
   
    render(){

  
        return (
            <div>

            <div id="maingallery">
            <div className="mainabouttext">
            <h1>Gallery</h1>
            <p>This is gallery page</p>
            <a href="#gal" id="dugmeabout">View More</a>
            </div>
            <div className="mainaboutslajder">
    
            </div>
          </div>

            <div className="pozadinagal" id="gal">
              <h1>{this.props.title}</h1>
             <p>Made by Dusan</p>
              

             <Gal />

            </div>

            </div>
        )
    }
}


export default Main;

/*
<div className="kolonagal">
             
                 <img src={poz} alt="sl"></img>
                     <img src={poz} alt="sl"></img>
                
                 <img src={poz} alt="sl"></img>
             
             </div>

*/