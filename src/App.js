import React, {useState} from 'react';
import GoalList from './GoalList/goalList';
import NewGoal from './newGoal/newgoal';
import './App.css'

const App = () => {
const [courseGoals,setCoourseGoals]=useState([
  { id: '1', text: 'Finish the course' },
  { id: '2', text: 'Learn all about the course' },
  { id: '3', text: 'Help other students in the course' },
]);
  // const courseGoals = [
  //   { id: '1', text: 'Finish the course' },
  //   { id: '2', text: 'Learn all about the course' },
  //   { id: '3', text: 'Help other students in the course' },
  // ];

  const addNewGoalHandler = (goal)=>{
    courseGoals.push(goal);
    setCoourseGoals(courseGoals.concat(goal));
    console.log(courseGoals)
  }

  return (
    <div className="course-goal">
      <h1>Course Goals</h1>
      <NewGoal onAddGoal ={addNewGoalHandler}/>
    <GoalList goals={courseGoals}/>
    </div>
  );
   
};  

// class App extends React.Component{

// }




export default App;



