// Import the createStore and combineReducers functions from the redux library.
import { createStore, combineReducers } from "redux";
// Import the todos reducers.
import { todos } from "./todos/reducers";

// Create the reducers object.
const reducers = {
  todos,
};

// Put the reducers into a form that can be passed to the createStore function.
const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);
