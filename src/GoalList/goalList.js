import React from 'react';
import '../App.css';


// const courseGoals = [
//     { id: '1', text: 'Finish the course' },
//     { id: '2', text: 'Learn all about the course' },
//     { id: '3', text: 'Help other students in the course' }
//   ];

const GoalList = (props) => {
    console.log(props.goals)
    return (
        <ul className="goal-list">
            {props.goals.map(goal => {
                return <li key={goal.id}>{goal.text}</li>
            })}

        </ul>
    )
}

export default GoalList;