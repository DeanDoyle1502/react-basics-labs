import Task from './components/Task';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today" },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow" },
      { id: 3, title: "Tidy up", description: "Tidy away things", deadline: "Today" },
      { id: 4, title: "Wash car", description: "Clean Car", deadline: "Today" },
      { id: 5, title: "Go to College", description: "Attend College", deadline: "Morning"}
    ]
  });

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task) => (   
                   
    <Task 
      title={task.title}
      description={task.description}
      deadline={task.deadline}
      key={task.id}
    />
  ))} 
    </div>
  );
}

export default App;
