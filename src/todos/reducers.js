/* 
    Reducers: 
    - Take the current state and action that was triggered and decide what changes should
    occur in the state as the result of this action. Return the updated state and Redux
    will take this returned value and set the current state to that.
    - Two parameters, state and action:
    1. State: The current state of whatever resource the reducer is managing.
    2. Action: The action that was triggered. An object with type and payload properties.
*/

// Import the action types from actions.js.
import { CREATE_TODO, REMOVE_TODO, MARK_TODO_AS_COMPLETED } from "./actions";

// Create the todos reducer.
export const todos = (state = [], action) => {
  // Destructure type and payload from the action parameter.
  const { type, payload } = action;
  // Define a switch block to look at the type of our action
  // and decides what to do to the todos state (an array) based on that.
  switch (type) {
    // Use the CREATE_TODO case when the type is CREATE_TODO.
    case CREATE_TODO: {
      // Destructure the text from the payload property.
      const { text } = payload;
      // Create an object, newTodo.
      // Store the text as a property in the object.
      // The text is what the user typed into the input field (the todo item).
      const newTodo = {
        text,
        isCompleted: false,
      };
      // Add the new todo item to the end of the current todo list array, then return it.
      return state.concat(newTodo);
    }
    // Use the REMOVE_TODO case when the type is REMOVE_TODO.
    case REMOVE_TODO: {
      // Destructure the text from the payload property.
      const { text } = payload;
      // Filter a new array of todo items that do not match the text
      // of the todo item the user is removing and return the new array.
      return state.filter((todo) => todo.text !== text);
    }
    // Use the MARK_TODO_AS_COMPLETED case when the type is MARK_TODO_AS_COMPLETED.
    case MARK_TODO_AS_COMPLETED: {
      // Destructure the text from the payload property.
      const { text } = payload;
      // Map through the state array.
      // For reach todo item, check if the text of each todo item is the same
      // as the text of the completed todo item and if it is set isCompleted to true.
      // Otherwise return the same state of todo.
      return state.map((todo) => {
        if (todo.text === text) {
          return { ...todo, isCompleted: true };
        }
        return todo;
      });
    }
    // Default case.
    // If the action triggered does not match the cases then return
    // the unchanged state as it currently is.
    default:
      return state;
  }
};
