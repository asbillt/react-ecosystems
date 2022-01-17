// Import the createStore and combineReducers functions from the redux library.
import { createStore, combineReducers } from "redux";

// Create empty object.
const reducers = {};

// Put the reducers into a form that can be passed to the createStore function.
const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);
