import React from 'react';
import './App.css';
import data from './data';

class App extends React.Component{
  state = {
    data,
    currentScore: 0,
    animalsClicked: []
  }
  showAnimal = () => {
    return this.state.data.map(animal => 
      <img class="animal" id={animal.animal} src={animal.imageURL} onClick={this.onAnimalClick}></img>
    )
  }
  onAnimalClick = (e) => {
    if (this.state.animalsClicked.indexOf(e.target.id) === -1) {
    this.setState({
      animalsClicked: [...this.state.animalsClicked, e.target.id],
      currentScore: this.state.currentScore + 1,
    })
    data.sort(function(a, b){return 0.5 - Math.random()});
  } else {
    this.setState({
      currentScore: 0,
      animalsClicked: []
    })
    data.sort(function(a, b){return 0.5 - Math.random()});
  }
}
  render() {
    console.log(data)
    return (
      <div className="App">
        <h1>
          Clicky Game
        </h1>
        <h2>Score = {this.state.currentScore}</h2>
        {this.showAnimal()}
      </div>
    );
  }
}

export default App;
