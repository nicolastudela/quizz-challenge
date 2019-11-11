import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  ThemeProvider
} from "@material-ui/core/styles";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from './theme'
import * as serviceWorker from "./serviceWorker";

const appHistory = createBrowserHistory();

console.log(theme)
const Main = () => (
  <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={appHistory}>
        <App />
      </Router>
    </ThemeProvider>
  </>
);

ReactDOM.render(<Main />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
