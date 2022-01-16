import { createStore, combineReducers } from "redux";

const reducers = {};

// Put the reducers into a form that can be passed to the createStore function.
const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);
