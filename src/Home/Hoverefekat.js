import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
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
<p>This website was made with PHP and SQL.</p>
<NavLink to='/'>PHP-SQL website</NavLink>
</figcaption>     
</figure>


<figure className="snip0015">

<img src={zenasesir} alt="sample39"></img>
<figcaption>
<h2>React with <span>bootstrap</span> </h2>
<p>Another React UI with API and Todo app.</p>
<NavLink to='/About'>React website</NavLink>
</figcaption>     
</figure>


<figure className="snip0015">

<img src={zenasesir} alt="sample40"></img>
<figcaption>
<h2>Onepage <span>PHP</span> and <span>SQL</span></h2>
<p>Reservation page connected to database.</p>
<NavLink to='/About'>Hotel</NavLink>
</figcaption>     
</figure>


<figure className="snip0015">

<img src={zenasesir} alt="sample38"></img>
<figcaption>
<h2><span>Sass </span> website</h2>
<p>I use compiler to translate Sass into CSS.</p>
<NavLink to='/About'>SassCSS website</NavLink>
</figcaption>     
</figure>


<figure className="snip0015">

<img src={zenasesir} alt="sample39"></img>
<figcaption>
<h2><span>PHP/SQL </span> website</h2>
<p>Excellent contact form and great design.</p>
<NavLink to='/About'>Salon</NavLink>
</figcaption>     
</figure>


<figure className="snip0015">

<img src={zenasesir} alt="sample40"></img>
<figcaption>
<h2><span>PHP/SQL </span> website</h2>
<p>Website for restaurants with reservation page.</p>
<NavLink to='/About'>Restaurant</NavLink>
</figcaption>     
</figure>
</div>

</div>

        )
    }
}

export default Hoverefekat;