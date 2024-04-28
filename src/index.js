import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./_store/store";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
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
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
