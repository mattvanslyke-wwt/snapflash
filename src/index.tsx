import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./containers/App";
import { CssBaseline } from "@material-ui/core";

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline>
      <App />
    </CssBaseline>
  </React.StrictMode>,
  document.getElementById("root")
);
