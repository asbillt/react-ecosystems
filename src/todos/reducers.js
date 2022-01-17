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
import { CREATE_TODO, REMOVE_TODO } from "./actions";

// Create the todos reducer.
export const todos = (state = [], action) => {
  // Destructure type and payload from the action parameter.
  const { type, payload } = action;
  // Define a switch block to look at the type of our action
  // and decides what to do to the todos state (an array) based on that.
  switch (type) {
    // Use the CREATE_TODO case when the type is CREATE_TODO.
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false,
      };
      return state.concat(newTodo);
    }
    // Use the REMOVE_TODO case when the type is REMOVE_TODO.
    case REMOVE_TODO: {
      const { text } = payload;
      return state.filter((todo) => todo.text !== text);
    }
    // Default case.
    // If the action triggered does not match the cases then return
    // the unchanged state as it currently is.
    default:
      return state;
  }
};
