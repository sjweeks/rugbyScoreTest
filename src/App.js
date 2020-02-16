import React, { Component } from 'react';

import './css/App.css';
import Header from './components/Header.js';
import Timer from './components/Timer.js';
import Score from './components/Score.js';

class App extends Component {
  state = {
    teamOneScore: 0,
    teamTwoScore: 0
  }


  startTimer = () => {
    console.log("Start Button was clicked");
    
  }


  tryGoal = () => {
    console.log("Try Goal was clicked");
    this.setState({
      teamOneScore: this.state.teamOneScore + 5
    })
  }

  tryGoalTwo = () => {
      console.log("Try Goal Two was clicked");
      this.setState({
        teamTwoScore: this.state.teamTwoScore + 5
      })
  }

  conversionGoal = () => {
    console.log("Conversion was clicked");
    this.setState({
      teamOneScore: this.state.teamOneScore + 2
    })
  }

  conversionGoalTwo = () => {
    console.log("Conversion Two was clicked");
    this.setState({
      teamTwoScore: this.state.teamTwoScore + 2
    })
  }

  penaltyGoal = () => {
    console.log("Penalty was clicked");
    this.setState({
      teamOneScore: this.state.teamOneScore + 3
    })
  }

  penaltyGoalTwo = () => {
    console.log("Penalty Two was clicked");
    this.setState({
      teamTwoScore: this.state.teamTwoScore + 2
    })
  }

  dropGoal = () => {
    console.log("Drop Goal was clicked");
    this.setState({
      teamOneScore: this.state.teamOneScore + 3
    })
  }

  dropGoalTwo = () => {
    console.log("Drop Goal Two was clicked");
    this.setState({
      teamTwoScore: this.state.teamTwoScore + 2
    })
  }

  render () {
  return (
    <div >
      <div><Header header="Six Nations Scoreboard" /></div>
      <br />
      <div className="container">
      <div><Timer timerText="Timer" startButton={this.startTimer} /></div>
      <div className="Score">
        <Score tryGoalButton={this.tryGoal} conversionButton={this.conversionGoal} penaltyButton={this.penaltyGoal} dropGoalButton={this.dropGoal} team="Team One" teamScore={this.state.teamOneScore} />
        <Score tryGoalButton={this.tryGoalTwo} conversionButton={this.conversionGoalTwo} penaltyButton={this.penaltyGoalTwo} dropGoalButton={this.dropGoalTwo} team="Team Two" teamScore={this.state.teamTwoScore} />
      </div>
      </div>
    </div>
  )
}
}

export default App;
