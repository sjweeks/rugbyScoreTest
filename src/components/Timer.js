import React from 'react'

function Timer(props) {

    return (
        <div className="timerFunction">
            <div><p>{props.timerText}</p></div>
            <div>
                {props.timerFunc}<br/>
                <button onClick={props.startButton}>Start Game</button>
            </div>
        </div>
    )
}

export default Timer