/*  
    The structure of the state object:
    {
        todos: {
            isLoading: false or true,
            data: [an array of the todos list]
        }
    }
*/

// import the createSelector function.
import { createSelector } from "reselect";

// Define the getTodos selector.
// Pass in the entire state object in the state parameter.
// Access the value in the data property in state.todos.data.
export const getTodos = (state) => state.todos.data;

// Define the getTodosLoading selector.
// Pass in the entire state object in the state parameter.
// Access the value in the isLoading property in state.todos.isLoading
export const getTodosLoading = (state) => state.todos.isLoading;

// Returns all the todos whose isCompleted property is false.
export const getIncompleteTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => !todo.isCompleted)
);

// Returns all the todos whose isCompleted property is true.
export const getCompletedTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => todo.isCompleted)
);
