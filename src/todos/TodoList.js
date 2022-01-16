// Import the core React library.
import React from "react";
import NewTodoForm from "./NewTodoForm";
// Import TodoListItem.
import TodoListItem from "./TodoListItem";
// Import styling.
import "./TodoList.css";

// Create TodoList component.
// Destructure the todos property.
const TodoList = ({ todos = [] }) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {
        // Map through each todo item in the todos property.
        // Pass each todo item into the TodoListItem component
        // through the components' todo property.
        todos.map((todo) => (
          <TodoListItem todo={todo} />
        ))
      }
    </div>
  );
};

export default TodoList;
