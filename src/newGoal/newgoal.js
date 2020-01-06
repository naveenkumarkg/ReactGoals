import React from 'react';

const NewGoal = (props) => {
    const addGoalHandler = (event) => {
        event.preventDefault();
        const newGoal = { id: Math.random().toString(), text: 'My New List' }
        props.onAddGoal(newGoal)
    }


return (
    <form onSubmit={addGoalHandler}>
        <input type="text" />
        <button type="submit">Add Goals</button>
    </form>
)

}

export default NewGoal;