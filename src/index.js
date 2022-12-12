import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import usersReducer from "./features/users/usersSlice";

import { createStoreHook, Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

// add imports and code

let store = configureStore({
  reducer: {
    users: usersReducer
  }
})
ReactDOM.render(
  // add imports and code
  <Provider store={store}>
    <App />
  </Provider>,

  // add imports and code
  document.getElementById("root")
);
