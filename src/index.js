import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

window.addEventListener("beforeunload", () => {
  localStorage.clear();
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
