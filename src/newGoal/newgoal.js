import React, {useState} from 'react';

const NewGoal = (props) => {
    // let textValue = '';

    const [textValue, prevTextvalue] = useState('')

    const addGoalHandler = (event) => {
        event.preventDefault();
        const newGoal = { id: Math.random().toString(), text: textValue }
        prevTextvalue('')

        // textValue = '';
        props.onAddGoal(newGoal)
    }

    const textChangeHandler = (event)=>{
       prevTextvalue(event.target.value)
      
    }

return (
    <form onSubmit={addGoalHandler}>
        <input value={textValue} type="text" onChange={textChangeHandler}/>
        <button type="submit">Add Goals</button>
    </form>
)

}

export default NewGoal;