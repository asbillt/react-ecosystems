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
import {
  CREATE_TODO,
  REMOVE_TODO,
  MARK_TODO_AS_COMPLETED,
  LOAD_TODOS_IN_PROGRESS,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
} from "./actions";

// Define the initial state of the app.
const initialState = { isLoading: false, data: [] };

// Create the todos reducer.
export const todos = (state = initialState, action) => {
  // Destructure type and payload from the action parameter.
  const { type, payload } = action;
  // Define a switch block to look at the type of our action
  // and decides what to do to the todos state (an array) based on that.
  switch (type) {
    // Use the CREATE_TODO case when the type is CREATE_TODO.
    case CREATE_TODO: {
      // Destructure the todo from the payload property.
      const { todo } = payload;
      // Add the new todo to the end of the current todo list array, then return it.
      return {
        ...state,
        data: state.data.concat(todo),
      };
    }
    // Use the REMOVE_TODO case when the type is REMOVE_TODO.
    case REMOVE_TODO: {
      // Destructure the todo from the payload property and rename it todoToRemove.
      const { todo: todoToRemove } = payload;
      // Filter a new array of todo items that do not match the id
      // of the todo item the user is removing and return the new array.
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== todoToRemove.id),
      };
    }
    // Use the MARK_TODO_AS_COMPLETED case when the type is MARK_TODO_AS_COMPLETED.
    case MARK_TODO_AS_COMPLETED: {
      // Destructure the todo from the payload property and rename it updatedTodo.
      const { todo: updatedTodo } = payload;
      // Map through the state.data array.
      // For each todo item, check if the id of each todo item is the same
      // as the id of the updated todo item and if it is return the updated todo.
      // Otherwise return the same state of todo.
      return {
        ...state,
        data: state.data.map((todo) => {
          if (todo.id === updatedTodo.id) {
            return updatedTodo;
          }
          return todo;
        }),
      };
    }
    // Use the LOAD_TODOS_SUCCESS case when the action type is LOAD_TODOS_SUCCESS.
    // This case will load the todos list from the node server.
    case LOAD_TODOS_SUCCESS: {
      // Destructure the todo from the payload property.
      const { todos } = payload;
      return {
        // Return the updated state, where isLoading is set to false
        // and data is the todos that were loaded successfully.
        ...state,
        isLoading: false,
        data: todos,
      };
    }
    // Use the LOAD_TODOS_IN_PROGRESS case when the action type is LOAD_TODOS_IN_PROGRESS.
    case LOAD_TODOS_IN_PROGRESS:
      return {
        // Return the updated state, where isLoading is set to true.
        ...state,
        isLoading: true,
      };
    // Use the LOAD_TODOS_FAILURE case when the action type is LOAD_TODOS_FAILURE.
    case LOAD_TODOS_FAILURE:
      return {
        // Return the updated state, where isLoading is set to false.
        ...state,
        isLoading: false,
      };
    // Default case.
    // If the action triggered does not match the cases then return
    // the unchanged state as it currently is.
    default:
      return state;
  }
};
