/* eslint-disable react/prop-types */
import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import theme from "./theme";

export const INITIAL_EMPTY_STORE = {
  user: {},
  questionnaire: {
    items: [],
    isFetching: false,
    error: null
  }
};

const mockStore = configureStore([thunk]);

export const BasicTestWrapper = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <MemoryRouter>{children}</MemoryRouter>
    </ThemeProvider>
  );
};

export const WithReduxStoreTestWrapper = ({
  children,
  store = INITIAL_EMPTY_STORE,
  initialEntries,
  initialIndex
}) => {
  return (
    <ThemeProvider theme={theme}>
      <MemoryRouter initialEntries={initialEntries} initialIndex={initialIndex}>
        <Provider store={mockStore(store)}>{children}</Provider>
      </MemoryRouter>
    </ThemeProvider>
  );
};
