import React, {Component} from 'react';
import '../css/App.css';

class Timer extends Component {
    state = {
        timer: 0,
        minutes: 0,
        seconds: 0,
        gameStatus: ""
    }


  startTimer = () => {
    console.log("Start Button was clicked");
    
  }


    render () {
        // let timerFunc = setInterval(()=>{
        //     this.state.seconds++
        //     if(this.state.seconds==60){
        //         this.state.minutes++
        //         this.state.seconds=0
        //     }
        //     if (this.state.minutes ==80){
        //         clearInterval(timer);
        //         document.getElementById("timer").innerHTML = "Game over"
        //     }
        //     document.getElementById("timer").innerHTML = {this.state.minutes} + "m" + {this.state.seconds} + "s"
        // }, 16.6)


        return (
            <div className="timerFunction">
            <h3>Timer</h3>
            <p>{this.state.timer}</p>
            <div>
                {/* {timerFunc}<br/> */}
                <div className="scoreButtons" ><button onClick={this.startTimer}>Start Game</button></div>
            </div>
        </div>
        )
    }
}

export default Timer