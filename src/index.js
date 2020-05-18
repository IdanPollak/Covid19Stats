import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ContextProvider from "./store/ContextProvider";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.querySelector("#root")
);
