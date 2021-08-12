import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import "./services/firebase";
import "./global.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
