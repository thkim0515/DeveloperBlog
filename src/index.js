import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import GlobalStyle from "./styles/GlobalStyle";
import "bootstrap/dist/css/bootstrap.min.css";
import { HelmetProvider } from "react-helmet-async";

window.addEventListener("beforeunload", () => {
  localStorage.clear();
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);
