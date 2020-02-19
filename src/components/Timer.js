import React, { Component } from "react";
import "../css/App.css";

class Timer extends Component {
  state = {
    time: 0,
    start: 0,
    minutes: 0,
    seconds: 0,
    gameStatus: ""
  };

  startTimer = () => {
    this.setState({
      time: this.state.time,
      start: Date.now()
    });
    console.log("Start Button was clicked");
    this.timer = setInterval(
      () =>
        this.setState({
          time: this.state.time + 1
        }),
      100
    );
  };

  render() {
    //     const newTimer = () => {
    //     let timerFunc = setInterval(()=>{
    //         this.state.seconds++
    //         if (this.state.seconds==60){
    //             this.setState({
    //              minutes: this.state.minutes++,
    //              seconds: 0
    //              })
    //         }
    //         if (this.state.minutes ==80){
    //             clearInterval(timerFunc);
    //             this.setState({
    //                 gameStatus: "Game over",
    //             })
    //         }
    //     }, 16.6)
    //     return (
    //         <p>{this.state.minutes}m : {this.state.seconds}s</p>
    //        )
    // }

    return (
      <div className="timerFunction">
        <h3>Timer</h3>
        <div>
          <p>{this.state.time}</p>
          <p>{this.state.gameStatus} </p>
          {/* {newTimer} */}
          <div className="scoreButtons">
            <button onClick={this.startTimer}>Start Game</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
