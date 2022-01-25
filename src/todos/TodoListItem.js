// Import the core React library.
import React from "react";
// Import styled-components library.
import styled from "styled-components";

const TodoItemContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
`;

const ButtonsContainer = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
`;

const CompletedButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
  background-color: #22ee22;
`;

const RemoveButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
  background-color: #ee2222;
  margin-left: 8px;
`;

// Create TodoListItem component.
// Destructure the todos, onRemovePressed and onCompletedPressed properties.
const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
  return (
    <TodoItemContainer>
      <h3>{todo.text}</h3>
      <ButtonsContainer>
        {
          // If todo is completed return null (no button) otherwise return the
          // Mark As Completed button.
          todo.isCompleted ? null : (
            <CompletedButton
              // On click, call the onCompletedPressed function with the value of
              // todo.id as the argument.
              onClick={() => onCompletedPressed(todo.id)}
              className="completed-button"
            >
              Mark As Completed
            </CompletedButton>
          )
        }
        <RemoveButton
          // On click, call the onRemovePressed function with the value of
          // todo.id as the argument.
          onClick={() => onRemovePressed(todo.id)}
          className="remove-button"
        >
          Remove
        </RemoveButton>
      </ButtonsContainer>
    </TodoItemContainer>
  );
};

export default TodoListItem;
