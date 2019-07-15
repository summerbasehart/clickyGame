import React from 'react';
import './App.css';
import data from './data';
import {Card, CardImg} from 'react-bootstrap';

class App extends React.Component {
  state = {
    data,
    currentScore: 0,
    topScore: 0,
    animalsClicked: [],
    alert: "Start!"
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
        alert: "Correct!",
      })
      data.sort(function (a, b) { return 0.5 - Math.random() });
      this.best()
    } else {
      this.setState({
        currentScore: 0,
        animalsClicked: [],
        alert: "Sorry! You already clicked that one!",
      })
      data.sort(function (a, b) { return 0.5 - Math.random() });
      this.best()
    }
  }
  best = () => {
    if (this.state.currentScore >= this.state.topScore) {
      this.setState({ 
        topScore: this.state.currentScore 
      });
    } else if (this.state.currentScore === 12) {
      this.setState({ 
        alert: "You win!",
        topScore: this.state.currentScore 
      });
    }
  }
  render() {
    console.log(data)
    return (
      <div className="App">
        <h1>
          Clicky Game
        </h1>
        <p>
          Click each animal only once! Can your memory pass the test?
        </p>
        <h2>
          Score = {this.state.currentScore} --- Top Score = {this.state.topScore}
        </h2>
        <p>
          {this.state.alert}
        </p>
        <div class="card" id="cards">
          {this.showAnimal()}
        </div>
      </div>
    );
  }
}

export default App;
