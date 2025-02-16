import React, { useState } from "react";
import "./App.css";
import Switch from "react-switch";
function App() {
  const [todos, setTodos] = useState([]); // State to store the list of todos
  const [input, setInput] = useState(""); // State to store the input value
  const [checked, setChecked] = useState(false); // State for the switch

  // Function to add a new todo
  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]); // Add the new todo to the list
      setInput(""); // Clear the input field
    }
  };

  // Function to remove a todo
  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index); // Filter out the todo at the specified index
    setTodos(newTodos); // Update the todos state
  };

  // Function to handle switch toggle
  const handleChange = (checked) => {
    setChecked(checked);
    console.log(checked)
  };


  return (
    <div className="App" style={{ backgroundColor: checked == false? "black" : "white", }}>
      {/* Switch component */}
      <Switch
        onChange={handleChange} // Handle toggle
        checked={checked} // Controlled state
      />

      <h1 style={{color: checked == false ? "white":"black"}}>To-Do App</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;