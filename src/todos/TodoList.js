// Import the core React library and the useEffect hook.
import React, { useEffect } from "react";
// Import connect from the react-redux package.
// The connect function connects a React component to a Redux store.
import { connect } from "react-redux";
// Import the NewTodoForm component from NewTodoForm.js.
import NewTodoForm from "./NewTodoForm";
// Import the TodoListItem component from TodoListItem.js.
import TodoListItem from "./TodoListItem";
// Import the loadTodos thunk from thunks.js.
import { loadTodos, removeTodoRequest } from "./thunks";
// Import the removeTodo and markTodoAsCompleted functions from actions.js.
import { markTodoAsCompleted } from "./actions";
// Import styling.
import "./TodoList.css";

// Create TodoList component.
// Destructure the todos, onRemovePressed, onCompletedPressed, isLoading and startLoadingTodos properties.
const TodoList = ({
  todos = [],
  onRemovePressed,
  onCompletedPressed,
  isLoading,
  startLoadingTodos,
}) => {
  // Fire the useEffect hook on initial render of the TodoList component.
  // 1st argument: Make a function call to startLoadingTodos.
  // 2nd argument: Empty dependency array so useEffect only fires on initial render.
  useEffect(() => {
    startLoadingTodos();
  }, []);
  // Display the "Loading todos..." message while the app is loading the todos.
  const loadingMessage = <div>Loading todos...</div>;
  const content = (
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
  // If isLoading is true return loadingMessage otherwise return content.
  return isLoading ? loadingMessage : content;
};

// mapStateToProps is used for selecting the part of the data from the store that
// the connected component needs. It is called every time the store state changes.
// The state argument passed is an object representing the entire redux state (the updated state).
// The mapStateToProps will take the state object and return another object containing
// the pieces of that state that our component needs access to.
const mapStateToProps = (state) => ({
  // Return the isLoading property with a value of either true or false for state.isLoading.
  isLoading: state.isLoading,
  // Return the todos property with the value of state.todos.
  todos: state.todos,
});

// The dispatch argument is a function that allows the components to trigger
// actions that the Redux store will respond to.
// The properties of the object returned will be passed to the component as props.
const mapDispatchToProps = (dispatch) => ({
  // Dispatch the loadTodos thunk when its called by the useEffect hook (on initial render of TodoList).
  startLoadingTodos: () => dispatch(loadTodos()),
  // Pass the TodoList component the onRemovePressed property.
  // Dispatch the todo item's id to the removeTodoRequest thunk in thunks.js.
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  // Pass the TodoList component the onCompletedPressed property.
  // Dispatch the todo item text to the markTodoAsCompleted Redux Action in actions.js.
  onCompletedPressed: (text) => dispatch(markTodoAsCompleted(text)),
});

// Connect TodoList component to Redux store.
// Component to connect is added in second parentheses.
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
