import React, { Component } from 'react';
//import {NavLink} from 'react-router-dom';
import zenasesir from '../Slike/zenasesir.png';

class Hoverefekat extends Component{
    render(){
        return(
<div id="hoverefekatomotac">
<div className="hoverefekat">


<figure className="snip0015">

<img src={zenasesir} alt="sample38"></img>
<figcaption>
<h2><span>signup/login </span> system</h2>
<p>This website was made with Laravel and SQL.</p>
<a href="https://13decverzija.000webhostapp.com" 
              target="_blank" rel="noopener noreferrer">Laravel website</a>
</figcaption>     
</figure>


<figure className="snip0015">

<img src={zenasesir} alt="sample39"></img>
<figcaption>
<h2>React with <span>bootstrap</span> </h2>
<p>Another React UI with API and Todo app.</p>
<a href="https://heuristic-ride-ab60ef.netlify.com" 
              target="_blank" rel="noopener noreferrer">React website</a>
</figcaption>     
</figure>


<figure className="snip0015">

<img src={zenasesir} alt="sample40"></img>
<figcaption>
<h2>Onepage <span>PHP</span> and <span>SQL</span></h2>
<p>Reservation page connected to database.</p>
<a href="https://hotelbrand.000webhostapp.com" 
              target="_blank" rel="noopener noreferrer">Hotel</a>
</figcaption>     
</figure>


<figure className="snip0015">

<img src={zenasesir} alt="sample38"></img>
<figcaption>
<h2><span>Frontend </span> website</h2>
<p>Futuristic and modern design with animations.</p>
<a href="https://dusanrandjelovic.github.io/galerija/" 
              target="_blank" rel="noopener noreferrer">Gallery</a>
</figcaption>     
</figure>


<figure className="snip0015">

<img src={zenasesir} alt="sample39"></img>
<figcaption>
<h2><span>Laravel </span> website</h2>
<p>Excellent shopping cart and checkout.</p>
<a href="https://jedantackasedam.000webhostapp.com" 
              target="_blank" rel="noopener noreferrer">Shop</a>
</figcaption>     
</figure>


<figure className="snip0015">

<img src={zenasesir} alt="sample40"></img>
<figcaption>
<h2><span>Laravel </span> website</h2>
<p>Website for restaurants with reservation page.</p>
<a href="https://authlara.000webhostapp.com" 
              target="_blank" rel="noopener noreferrer">Restaurant</a>
</figcaption>     
</figure>
</div>

</div>

        )
    }
}

export default Hoverefekat;

/*
<NavLink to='/About'>Restaurant</NavLink>
*/