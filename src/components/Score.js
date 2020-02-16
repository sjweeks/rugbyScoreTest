import React from 'react'

function Score(props) {
    return (
        <div>
            <div className="scoreButtons">
                <button onClick={props.tryGoalButton}>Try</button>
                <button onClick={props.conversionButton}>Conversion</button>
                <button onClick={props.penaltyButton}>Penalty</button>
                <button onClick={props.dropGoalButton}>Drop Goal</button>
            </div>
            <div><p>{props.team}</p></div>
            <div><p>{props.teamScore}</p></div>
        </div>
    )
}

export default Score
