// This file contains the code that will insert the React App
// into the HTML page.

// Import the core React library.
import React from "react";
// Import the ReactDom library.
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "./store";
// Import the App component.
import App from "./App.js";

// Render the App component into the root div in index.html.
ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
