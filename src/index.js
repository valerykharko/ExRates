import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MainStore from "./store/MainStore";

export const Context = createContext(null);

ReactDOM.render(
  <Context.Provider value={{ store: new MainStore() }}>
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
