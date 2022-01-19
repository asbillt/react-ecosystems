// This file contains the code that will insert the React App
// into the HTML page.

// Import the core React library.
import React from "react";
// Import the ReactDom library.
import ReactDOM from "react-dom";
// Import persistStore and PersistGate from the redux-persist library.
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
// Import Provider from the react-redux library.
import { Provider } from "react-redux";
import { configureStore } from "./store";
// Import the App component.
import App from "./App.js";

const store = configureStore();
const persistor = persistStore(store);

// Wrap the App component with Provider to make the Redux store available
// to any nested components.
// Wrap the App component with PersistGate to delay rendering of the App's
// UI until the persisted state has been retrieved and saved to redux.
// Render the App component into the root div in index.html.
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
