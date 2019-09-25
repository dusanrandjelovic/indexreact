import React, { Component } from 'react';

class Error extends Component {
    render(){
        return(
            <main>
              <h1 style={svojstva}>Ne postoji strana</h1>
            </main>
        );
    }
}

const svojstva = {
    backgroundColor: 'grey',
    color: 'red',
    fontSize: '39px'
}

export default Error;