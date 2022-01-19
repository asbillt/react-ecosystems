// Import the createStore and combineReducers functions from the redux library.
import { createStore, combineReducers } from "redux";
// Import persistReducer, storage and autoMergeLevel2 from the redux-persist library.
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
// Import the todos reducers.
import { todos } from "./todos/reducers";

// Create a reducers object that contains reducers imported from
// the reducers.js file.
// The todos is an array of the updated state of the UI's todo list.
const reducers = {
  todos,
};

// Create a State Reconciler to define how incoming state is merged in
// with initial state. This with auto merge (shallow merge) 2 levels deep.
const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

// Use the combineReducers function to turn the reducers object into
// a single reducing function in order for it to be passed to the store.
const rootReducer = combineReducers(reducers);

// Take the rootReducer object and use persistReducer to make it persist
// through a page refresh. Store the new, persisting reducer in persistedReducer.
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create a Redux Store that holds the complete state tree of the app.
// Pass the persisting reducer, persistedReducer, to the Redux Store.
// Add devtools as second argument to allow seeing state of store in browser.
export const configureStore = () =>
  createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
