import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./_store/store";
import { App } from "./App";
import "./index.css";
import GlobalStyle from "./styles/GlobalStyle";
import { HelmetProvider } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

window.addEventListener("beforeunload", () => {
  localStorage.clear();
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <GlobalStyle />
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Provider>
);
