// Import the core React library.
// Import the useState hook.
import React, { useState } from "react";
// Import styling.
import "./NewTodoForm.css";

// Create NewTodoForm component.
const NewTodoForm = () => {
  // Create state variable, inputValue.
  // Create function, setInputValue, to update inputValue.
  // Set initial state set to empty string.
  const [inputValue, setInputValue] = useState("");
  return (
    // Return the todo form.
    <div className="new-todo-form">
      <input
        // Initial value is set to inputValue.
        // As user starts typing value for input, call the setInputValue function
        // and pass the event as a parameter to update the state of inputValue.
        type="text"
        className="new-todo-input"
        placeholder="Type your new todo here"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="new-todo-button">Create Todo</button>
    </div>
  );
};

export default NewTodoForm;
