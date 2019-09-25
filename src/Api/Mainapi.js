import React, {Component} from 'react'
import loader from '../Slike/loader.gif';

class App extends Component{

   constructor(){
       super()
       this.state = {
           loading: false,
           podaci: {}
       }
   }

   componentDidMount(){
       this.setState({ loading: true })
    fetch("https://swapi.co/api/people/1")
    .then(response => response.json())
    .then(data => {
        this.setState({
            podaci: data,
            loading: false
        })
    })
   }


    render(){
        const stil = {
            textAlign: 'center',
           }
           const stil2 = {
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            width: '55%',
            margin: '25px auto'
           }


        const text = this.state.loading ? <img src={loader} alt="loading..."></img>
         : this.state.podaci.name

        return(
         <div>
             <h1 style={stil}>{this.props.naslov}</h1>
            <p style={stil}>Ukucajte naprimer Luke Skywalker. Dovoljno je da ukucate i Luke ili samo Skywalker.
                Za uspesno prikazivanje rezultata potrebna je internet konekcija.
            </p>
            <p style={stil}>{text}</p>
            <section>
                <div style={stil2}>
                <input style={{ }} type="text" placeholder="Potrazi..." id="polje"></input>
                <button type="submit" onClick={pretragaLjudi} id="dugmekontakt">Search</button>
                </div>
                <img id="loader" src={loader} alt="loading..." style={{display: 'none'}}></img>
                <div id="ispis">

                </div>
            </section>
         </div>
        )
    }
}

export default App

function pretragaLjudi(){
    const ispis = document.getElementById("ispis")
    const polje = document.getElementById("polje")
    //loader.style.display = 'inline';
    let sablon = ""
    fetch(`https://swapi.co/api/people/?search=${polje.value}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    //loader.style.display = 'none';
    for(let i=0; i<data.results.length; i++){
        if(polje.value == ''){
            sablon += ``
          }
          else{
  sablon += `
  <div id="jedanispis">
    <h1>${data.results[i].name}</h1>
    <p>Birth year: ${data.results[i].birth_year}</p>
    <p>Height: ${data.results[i].height} cm</p>
    <p>Mass: ${data.results[i].mass} kg</p>
    <p>Gender: ${data.results[i].gender}</p>
    <p>Eye color: ${data.results[i].eye_color}</p>
    <p>Hair color: ${data.results[i].hair_color}</p>
    </div>
  `}
  }
  ispis.innerHTML = sablon
  })
  }
  
 