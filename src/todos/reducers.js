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

// Create the isLoading reducer.
// The isLoading reducer will return true or false based on which actions
// are occurring in the app.
export const isLoading = (state = false, action) => {
  // Desctructure the type property from the action parameter.
  const { type } = action;
  // Use a switch statement to check for which type/action.
  switch (type) {
    // Use the LOAD_TODOS_IN_PROGRESS case when the type is LOAD_TODOS_IN_PROGRESS.
    case LOAD_TODOS_IN_PROGRESS:
      // Return the boolean true as the state of isLoading.
      return true;
    // Use the LOAD_TODOS_SUCCESS case when the type is LOAD_TODOS_SUCCESS.
    case LOAD_TODOS_SUCCESS:
    // Use the LOAD_TODOS_FAILURE case when the type is LOAD_TODOS_FAILURE.
    case LOAD_TODOS_FAILURE:
      // Return the boolean false as the state of isLoading for both cases
      // LOAD_TODOS_SUCCESS and LOAD_TODOS_FAILURE.
      return false;
    default:
      // Default case.
      // If the action triggered does not match the cases then return
      // the unchanged state as it currently is.
      return state;
  }
};

// Create the todos reducer.
export const todos = (state = [], action) => {
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
      return state.concat(todo);
    }
    // Use the REMOVE_TODO case when the type is REMOVE_TODO.
    case REMOVE_TODO: {
      // Destructure the todo from the payload property and rename it todoToRemove.
      const { todo: todoToRemove } = payload;
      // Filter a new array of todo items that do not match the id
      // of the todo item the user is removing and return the new array.
      return state.filter((todo) => todo.id !== todoToRemove.id);
    }
    // Use the MARK_TODO_AS_COMPLETED case when the type is MARK_TODO_AS_COMPLETED.
    case MARK_TODO_AS_COMPLETED: {
      // Destructure the todo from the payload property and rename it updatedTodo.
      const { todo: updatedTodo } = payload;
      // Map through the state array.
      // For each todo item, check if the id of each todo item is the same
      // as the id of the updated todo item and if it is return the updated todo.
      // Otherwise return the same state of todo.
      return state.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return updatedTodo;
        }
        return todo;
      });
    }
    // This case will load the todos list from the node server.
    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      return todos;
    }
    case LOAD_TODOS_IN_PROGRESS:
    case LOAD_TODOS_FAILURE:
    // Default case.
    // If the action triggered does not match the cases then return
    // the unchanged state as it currently is.
    default:
      return state;
  }
};
