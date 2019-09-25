import React, { Component } from 'react'

export default class Kartica extends Component {
    render(){
        return(
            <div>
                     <h2>{this.props.naslov}</h2>
                     <p>{this.props.text}</p>
                     <img src={this.props.imgLink} alt="sl"></img>
                 </div>
        )
    }
}