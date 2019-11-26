import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import { WithReduxStoreTestWrapper } from "test-utils";
import App from "./App";

describe("Application general", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <WithReduxStoreTestWrapper>
        <App />
      </WithReduxStoreTestWrapper>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  describe("Basic Routing general", () => {
    it("if user is not present gets redirected to Intro page", () => {
      expect.assertions(1);
      const { getByText } = render(
        <WithReduxStoreTestWrapper>
          <App />
        </WithReduxStoreTestWrapper>
      );
      const title = getByText("Welcome to the Trivia Challenge!");
      expect(title).toBeTruthy();
    });

    it("if user is present gets redirected to Home page", () => {
      expect.assertions(1);
      const { getByText } = render(
        <WithReduxStoreTestWrapper store={{ user: { name: "Nico" } }}>
          <App />
        </WithReduxStoreTestWrapper>
      );
      const title = getByText("Welcome Nico");
      expect(title).toBeTruthy();
    });

    it("if user is not present: and tries to access to Trivias location then gets redirected to Intro page", () => {
      expect.assertions(1);
      const { getByText } = render(
        <WithReduxStoreTestWrapper
          initialEntries={["/trivia"]}
          initialIndex={0}
        >
          <App />
        </WithReduxStoreTestWrapper>
      );
      const title = getByText("Welcome to the Trivia Challenge!");
      expect(title).toBeTruthy();
    });
  });
});
