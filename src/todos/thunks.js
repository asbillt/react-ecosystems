/* 
Thunks: In Redux, a thunk is a function that returns another function,
which contains the logic the app will perform when the thunk is triggered. 
*/

// Import the 3 "loading" action creators.
import {
  createTodo,
  removeTodo,
  markTodoAsCompleted,
  loadTodosInProgress,
  loadTodosSuccess,
  loadTodosFailure,
} from "./actions";

// Define the loadTodos thunk.
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
    const response = await fetch("http://localhost:8080/todos");
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

// Define the addTodoRequest thunk.
// addTodoRequest will have the text parameter.
// addTodoRequest will return an async function.
// dispatch argument passed to the async function when addTodoRequest is triggered.
// dispatch: Used to dispatch other redux actions from inside the addTodoRequest thunk.
export const addTodoRequest = (text) => async (dispatch) => {
  // Use a try catch block to handle any cases where the fetching doesn't work.
  // Any errors during the fetch operation are passed into the catch block.
  try {
    // Convert text to a JSON string and store it in the constant body.
    const body = JSON.stringify({ text });
    // Make fetch request to the todos endpoint and store the response in the response constant.
    // Await: Don't run the next line of code until the promise is fulfilled.
    const response = await fetch("http://localhost:8080/todos", {
      headers: {
        "Content-Type": "application/json",
      },
      // Make fetch send a post request instead of a get request.
      method: "post",
      // Include the request body.
      body,
    });
    // Takes the JSON in the response and resolves it to a JavaScript object
    // that is stored in the todo constant.
    // Await: Don't run the next line of code until the promise is fulfilled.
    const todo = await response.json();
    // Dispatch the createTodo Redux action with the todo from the response.
    dispatch(createTodo(todo));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};

// Define the removeTodoRequest thunk.
// removeTodoRequest will have the id parameter.
// removeTodoRequest will return an async function.
// dispatch argument passed to the async function when removeTodoRequest is triggered.
// dispatch: Used to dispatch other redux actions from inside the removeTodoRequest thunk.
export const removeTodoRequest = (id) => async (dispatch) => {
  // Use a try catch block to handle any cases where the fetching doesn't work.
  // Any errors during the fetch operation are passed into the catch block.
  try {
    // Make fetch request to the todos/id endpoint and store the response in the response constant.
    // Await: Don't run the next line of code until the promise is fulfilled.
    const response = await fetch(`http://localhost:8080/todos/${id}`, {
      // Make fetch send a delete request instead of a get request.
      method: "delete",
    });
    // Takes the JSON in the response and resolves it to a JavaScript object
    // that is stored in the todo constant.
    // Await: Don't run the next line of code until the promise is fulfilled.
    const removedTodo = await response.json();
    // Dispatch the removeTodo Redux action with the todo from the response.
    dispatch(removeTodo(removedTodo));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};

// Define the markTodoAsCompletedRequest thunk.
// markTodoAsCompletedRequest will have the id parameter.
// markTodoAsCompletedRequest will return an async function.
// dispatch argument passed to the async function when markTodoAsCompletedRequest is triggered.
// dispatch: Used to dispatch other redux actions from inside the markTodoAsCompletedRequest thunk.
export const markTodoAsCompletedRequest = (id) => async (dispatch) => {
  // Use a try catch block to handle any cases where the fetching doesn't work.
  // Any errors during the fetch operation are passed into the catch block.
  try {
    // Make fetch request to the todos/id/completed endpoint and store the updated todo in the response constant.
    // Await: Don't run the next line of code until the promise is fulfilled.
    const response = await fetch(
      `http://localhost:8080/todos/${id}/completed`,
      {
        // Make fetch send a post request instead of a get request.
        method: "post",
      }
    );
    // Takes the JSON in the response and resolves it to a JavaScript object
    // that is stored in the todo constant.
    // Await: Don't run the next line of code until the promise is fulfilled.
    const updatedTodo = await response.json();
    // Dispatch the markTodoAsCompleted Redux action with the updated todo from the response.
    dispatch(markTodoAsCompleted(updatedTodo));
  } catch (e) {
    dispatch(displayAlert(e));
  }
};
