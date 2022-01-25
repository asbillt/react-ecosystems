// Import the core React library.
// Import the useState hook.
import React, { useState } from "react";
// Import connect from the react-redux package.
// The connect function connects a React component to a Redux store.
import { connect } from "react-redux";
// Import styled-components library.
import styled from "styled-components";
// Import selector.
import { getTodos } from "./selectors";
// Import addTodoRequest from thunks.js.
import { addTodoRequest } from "./thunks";

const FormContainer = styled.div`
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px grey;
`;

const NewTodoInput = styled.input`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-bottom: 2px solid #ddd;
  border-radius: 8px;
  width: 70%;
  outline: none;
`;

const NewTodoButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  width: 20%;
  background-color: #22ee22;
`;

// Create NewTodoForm component.
// Pass in the todos property from mapStateToProps.
// Pass in the onCreatePressed property from mapDispatchToProps.
const NewTodoForm = ({ todos, onCreatePressed }) => {
  // Create state variable, inputValue.
  // Create function, setInputValue, to update inputValue.
  // Set initial state set to empty string.
  const [inputValue, setInputValue] = useState("");
  return (
    // Return the todo form.
    <FormContainer>
      <NewTodoInput
        // Initial value is set to inputValue.
        // As user starts typing value for input, call the setInputValue function
        // and pass the event as a parameter to update the state of inputValue.
        type="text"
        className="new-todo-input"
        placeholder="Type your new todo here"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <NewTodoButton
        onClick={() => {
          // When a user clicks the Create Todo button, check if the
          // inputValue that the user is typing (the new todo) is equal to
          // a todo item (text) already in the todo list.
          // If they are equal do nothing.
          // If they are not equal, then pass the inputValue into the onCreatePressed function
          // and then call the setInputValue function to set the state of inputValue back to
          // an empty string.
          const isDuplicateText = todos.some(
            (todo) => todo.text === inputValue
          );
          if (!isDuplicateText) {
            onCreatePressed(inputValue);
            setInputValue("");
          }
        }}
        className="new-todo-button"
      >
        Create Todo
      </NewTodoButton>
    </FormContainer>
  );
};

// The state argument passed is an object representing the entire redux state.
// The mapStateToProps will take the state object and return another object containing
// the pieces of that state that our component needs access to.
const mapStateToProps = (state) => ({
  // Call the getTodos selector, pass state object in as argument.
  todos: getTodos(state),
});

// The dispatch argument is a function that allows the components to trigger
// actions that the Redux store will respond to.
// The properties of the object returned will be passed to the component as props.
const mapDispatchToProps = (dispatch) => ({
  // Pass the NewTodoForm component the onCreatePressed property.
  // Dispatch the new todo item text to the addTodoRequest thunk in thunks.js.
  onCreatePressed: (text) => dispatch(addTodoRequest(text)),
});

// Connect NewTodoForm to Redux store.
// Component to connect is added in second parentheses.
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
