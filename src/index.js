import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./index.css";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import ScrollToTop from "components/utils/ScrollToTop";
import theme from "./theme";
import configureStore from "./redux";
import * as serviceWorker from "./serviceWorker";
import App from "./App";

const appHistory = createBrowserHistory();
const store = configureStore({});

const Main = () => (
  <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Router history={appHistory}>
          <ScrollToTop>
            <App />
          </ScrollToTop>
        </Router>
      </Provider>
    </ThemeProvider>
  </>
);

ReactDOM.render(<Main />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
