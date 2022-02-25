import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./assets/styles/global";
import AppRoutes from "./Routes";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <AppRoutes />
  </React.StrictMode>,
  document.getElementById("root")
);
