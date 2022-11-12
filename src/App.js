import React from 'react';
import './App.css';
import GameControls from './components/GameControls'


class App extends React.Component {

  constructor(props){
    super(props);
    this.state = { 
      level: 1,
      lowestPitch: 100, 
      highestPitch: 15000,
      toneDuration: 2,
      gamesPlayed: 0,
      wins: 0,
      losses: 0
    }

    this.handleChangeLevel = this.handleChangeLevel.bind(this);
  }

  handleChangeLevel(e){
    console.log("i ran")
    e.preventDefault();
    this.setState({ level: e.target.value})
  }
  
  render(){
    return (
      <div className="App">
        <GameControls handleChangeLevel={this.handleChangeLevel} level={this.state.level}/>
        <h1>Howdy!</h1>
        <p>Welcome to level {this.state.level}. It's the worst</p> 
      </div>
    );}
}

export default App;
