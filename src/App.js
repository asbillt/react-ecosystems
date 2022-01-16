// Contains the code for the root component of the React Application.

// Import the core React library.
import React from "react";
import { hot } from "react-hot-loader";
// Import the TodoList component.
import TodoList from "./todos/TodoList";
// Import the styling from App.css.
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>
        <TodoList />
      </h1>
    </div>
  );
};

export default hot(module)(App);
