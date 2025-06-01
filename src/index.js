import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reducer from "./reducers";
import middleware from "./middleware";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

const store = createStore(reducer, composeWithDevTools(middleware));
ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  document.getElementById("root")
);
