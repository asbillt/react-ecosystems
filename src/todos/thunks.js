/* 
Thunks: In Redux, a thunk is a function that returns another function,
which contains the logic the app will perform when the thunk is triggered. 
*/

// Import the 3 "loading" action creators.
import {
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure,
} from "./actions";

// Create the loadTodos thunk.
// loadTodos won't take any arguments.
// loadTodos will return an async function.
// Two arguments passed to async function when loadTodos thunk is triggered.
// dispatch: Used to dispatch other redux actions from inside the loadTodos thunk.
// getState: Function used to get access to the current state of the redux store.
export const loadTodos = () => async (dispatch, getState) => {
  // Use a try catch block to handle any cases where the fetching doesn't work.
  // Any errors during the fetch operation are passed into the catch block.
  try {
    // When the load todos thunk is triggered, dispatch the loadTodosInProgress action.
    dispatch(loadTodosInProgress());
    // Make a fetch request to the node server.
    const response = await fetch("http://localhost:8080/todos-delay");
    // Parse the the data from the server response into a JSON object.
    const todos = await response.json();

    // Once the app is finished loading the todos from the node server,
    // dispatch the loadTodosSuccess action.
    dispatch(loadTodosSuccess(todos));
  } catch (e) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(e));
  }
};
