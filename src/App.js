import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super(); 
    this.state ={
      monsters: [
        {
          name: 'Frenkenstein',
          id: 'asc1'
        },
        {
          name: 'Dracula',
          id: 'asc2'
        },
        {
          name: 'Zombie',
          id: 'asc3'
        }
      ]
    };
  }

  
  render(){
    return (
      <div className="App">
      {
        this.state.monsters.map(monseter => <h1 key={monseter.id}>{ monseter.name }</h1>)
      }
        </div>
    )
        
     
  }
}

export default App;
