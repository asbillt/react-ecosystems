// Import the core React library.
import React from "react";
// Import connect from the react-redux package.
// The connect function connects a React component to a Redux store.
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
// Import TodoListItem.
import TodoListItem from "./TodoListItem";
// Import the removeTodo and markTodoAsCompleted functions from actions.js.
import { removeTodo, markTodoAsCompleted } from "./actions";
// Import styling.
import "./TodoList.css";

// Create TodoList component.
// Destructure the todos, onRemovePressed and onCompletedPressed properties.
const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {
        // Map through each todo item in the todos property.
        // Pass each todo item into the TodoListItem component
        // through the components' todo property.
        todos.map((todo) => (
          <TodoListItem
            todo={todo}
            onRemovePressed={onRemovePressed}
            onCompletedPressed={onCompletedPressed}
          />
        ))
      }
    </div>
  );
};

// The state argument passed is an object representing the entire redux state.
// The mapStateToProps will take the state object and return another object containing
// the pieces of that state that our component needs access to.
const mapStateToProps = (state) => ({
  // Return an object with todos property and value of state.todos.
  todos: state.todos,
});

// The dispatch argument is a function that allows the components to trigger
// actions that the Redux store will respond to.
// The properties of the object returned will be passed to the component as props.
const mapDispatchToProps = (dispatch) => ({
  // Pass the TodoList component the onRemovePressed property.
  // Dispatch the todo item text to the removeTodo Redux Action in actions.js.
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  // Pass the TodoList component the onCompletedPressed property.
  // Dispatch the todo item text to the markTodoAsCompleted Redux Action in actions.js.
  onCompletedPressed: (text) => dispatch(markTodoAsCompleted(text)),
});

// Connect NewTodoForm to Redux store.
// Component to connect is added in second parentheses.
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
