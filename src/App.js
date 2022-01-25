// Contains the code for the root component of the React Application.

// Import the core React library.
import React from "react";
import { hot } from "react-hot-loader";
// Import styled-components library.
import styled from "styled-components";
// Import the TodoList component.
import TodoList from "./todos/TodoList";

const AppContainer = styled.div`
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #222222;
  width: 100vw;
  height: 100vh;
`;

const App = () => {
  return (
    <AppContainer>
      <TodoList />
    </AppContainer>
  );
};

export default hot(module)(App);
