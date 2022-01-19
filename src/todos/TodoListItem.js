// Import the core React library.
import React from "react";
// Import styling.
import "./TodoListItem.css";

// Create TodoListItem component.
// Destructure the todos property.
const TodoListItem = ({ todo, onRemovePressed }) => {
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        <button className="completed-button">Mark As Completed</button>
        <button
          // On click, call the onRemovePressed function with the value of
          // todo.text as the argument.
          onClick={() => onRemovePressed(todo.text)}
          className="remove-button"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
