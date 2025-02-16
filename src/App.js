import React, { useState } from "react";
import "./App.css";
import Switch from "react-switch";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const toggleDarkMode = (checked) => {
    setIsDarkMode(checked);
  };

  return (
    <div className={`App ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className="mode-toggle">
        <label>
          <span>{isDarkMode ? "Dark Mode" : "Light Mode"}</span>
          <Switch
            onChange={toggleDarkMode}
            checked={isDarkMode}
            onColor="#86d3ff"
            offColor="#888"
            height={20}
            width={40}
          />
        </label>
      </div>

      <h1>To-Do App</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
          className={isDarkMode ? "dark-input" : "light-input"}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={isDarkMode ? "dark-item" : "light-item"}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;