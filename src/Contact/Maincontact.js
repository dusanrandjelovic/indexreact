import React, { Component } from 'react';
import './Contact.css';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

class Main extends Component {

 constructor(props) {
      super(props);
      this.state = { name: "", email: "", message: "" };
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

      e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render(){
       const { name, email, message } = this.state;
        return (
            <div>
            <div id="maincontact">
            <div className="maincontacttext">
            <h1>Contact Info:</h1>
            <div>
            <p>Address: </p>
            <p>Belgrade, Serbia</p>
            </div>
            <div>
            <p>Email: </p>
            <p>dusanrandjelovic92@gmail.com</p>
            </div>
            <div>
            <p>Phone: </p>
            <p>065-888-11-96</p>
            </div>
<div>
            <a href="https://sr-rs.facebook.com/" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" title="Facebook"><i class="fab fa-facebook-square fa-2x"></i></a>
<a href="https://twitter.com/login?lang=sr" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" title="Twitter"><i class="fab fa-twitter-square fa-2x"></i></a>
<a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" title="Instagram"><i class="fab fa-instagram fa-2x"></i></a>
<a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" data-toggle="tooltip" title="Youtube"><i class="fab fa-youtube-square fa-2x"></i></a>
</div>

            </div>
            <div className="maincontactmapa">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226365.92374101604!2d-87.94558045195309!3d41.79993007651152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2z0KfQuNC60LDQs9C-LCDQmNC70LjQvdC-0LjRgSwg0KHRmNC10LTQuNGa0LXQvdC1INCU0YDQttCw0LLQtQ!5e0!3m2!1ssr!2srs!4v1549307403702" height="450" allowfullscreen></iframe>
            </div>
          </div>

            <div className="pozadinacontact">
              <h1>Contact Us.</h1>
             <p><em>We expect your message</em></p>

           <form onSubmit={this.handleSubmit}>
          <p>
            <label>
              Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" value={message} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
            </div>

            </div>
        )
    }
}


export default Main;

/*
const ciscenjeInputa = {
    ime: "",
    email: "",
    lozinka: "",
    imeGreska: "",
    emailGreska: "",
    lozinkaGreska: ""
}

export class Validiranaforma extends Component {

    state = ciscenjeInputa;

    funkcijaZaproveru = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox ?
            event.target.checked : event.target.value
        });
    };

validacija = () => {
    let imeGreska = "";
    let emailGreska = "";
    let lozinkaGreska = "";

if(!this.state.ime){
    imeGreska = 'Upisite ime';
}

    if(!this.state.email.includes('@')){
        emailGreska = 'Unesite pravilnu email adresu!';
    }

if(!this.state.lozinka){
    lozinkaGreska = 'Lozinka mora da sadrzi broj';
}

    if(imeGreska || emailGreska || lozinkaGreska){
        this.setState({ imeGreska, emailGreska, lozinkaGreska });
        return false;
    }
    return true;
};

 slanje = (e) => {
     e.preventDefault();
     const jeValidno = this.validacija();
     if(jeValidno){
         console.log(this.state);
         //clear form
        this.setState(ciscenjeInputa);
     }
 }

    render(){
        return(
          <form onSubmit={this.slanje}>
              <div>
                  <input 
                  name="ime"
                  placeholder="ime"
                  value={this.state.ime}
                  onChange={this.funkcijaZaproveru}
                  />
                  <div style={{ fontSize: 12, color: "red" }}>{this.state.imeGreska}</div>
              </div>
              <div>
                  <input 
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.funkcijaZaproveru}
                  />
                  <div style={{ fontSize: 12, color: "red" }}>{this.state.emailGreska}</div>
              </div>
              <div>
                  <input 
                  type="password"
                  name="lozinka"
                  placeholder="lozinka"
                  value={this.state.lozinka}
                  onChange={this.funkcijaZaproveru}
                  />
                  <div style={{ fontSize: 12, color: "red" }}>{this.state.lozinkaGreska}</div>
              </div>
              <button type="submit">Posalji</button>
          </form>
        );
    }
}
*/
