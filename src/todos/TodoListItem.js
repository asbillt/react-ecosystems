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

// Creates function with the logic from TodoItemContainerWithWarning
// in order to test that logic in TodoListItem.test.js.
export const getBorderStyleForDate = (startingDate, currentDate) => {
  // If the createdAt date for the incomplete todo is greater than 5 days old from todays date
  // then display a red bottom border otherwise display no red bottom border.
  return startingDate > new Date(currentDate - 86400000 * 5)
    ? "none"
    : "2px solid red";
};

const TodoItemContainerWithWarning = styled(TodoItemContainer)`
  border-bottom: ${(props) =>
    getBorderStyleForDate(new Date(props.createdAt), Date.now())};
`;

const ButtonsContainer = styled.div`
  position: absolute;
  right: 12px;
  bottom: 12px;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
`;

const CompletedButton = styled(Button)`
  background-color: #22ee22;
`;

const RemoveButton = styled(Button)`
  background-color: #ee2222;
  margin-left: 8px;
`;

// Create TodoListItem component.
// Destructure the todos, onRemovePressed and onCompletedPressed properties.
const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => {
  const Container = todo.isCompleted
    ? TodoItemContainer
    : TodoItemContainerWithWarning;
  return (
    <Container createdAt={todo.createdAt}>
      <h3>{todo.text}</h3>
      <p>
        Created at:&nbsp;
        {new Date(todo.createdAt).toLocaleDateString()}
      </p>
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
    </Container>
  );
};

export default TodoListItem;
