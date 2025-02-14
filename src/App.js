import React, { useState } from "react";
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const clearAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="App">
      <div className='container'>
        <div className='box'>
          <h1>TO DO LIST</h1>
          <input
            type="text"
            placeholder='Enter your task'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} 
            required
          />
          <button onClick={addTask}>ADD</button> 
        </div>
        <div>
          <h1>Task List</h1>
          <ul>
            {tasks.map((task, index) => ( 
              <li key={index}>
                {index + 1}. {task} 
                <button onClick={() => removeTask(index)}>-</button>
              </li>
            ))}
          </ul>
          <button onClick={clearAllTasks}>Clear All</button> 
        </div>
      </div>
    </div>
  );
}

export default App;