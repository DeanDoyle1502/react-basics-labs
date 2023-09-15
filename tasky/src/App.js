import Task from './components/Task';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" />
      <Task title= "Laundry" deadline="Tomorrow" >
        Fold laundry and put away
        </Task>
      <Task title="Tidy" deadline="Tomorrow" />
    </div>
  );
}

export default App;
