// Import the core React library.
import React from "react";
// Import styling.
import "./TodoListItem.css";

// Create TodoListItem component.
// Destructure the todos, onRemovePressed and onCompletedPressed properties.
const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        {
          // If todo is completed return null (no button) otherwise return the
          // Mark As Completed button.
          todo.isCompleted ? null : (
            <button
              // On click, call the onCompletedPressed function with the value of
              // todo.text as the argument.
              onClick={() => onCompletedPressed(todo.text)}
              className="completed-button"
            >
              Mark As Completed
            </button>
          )
        }
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
