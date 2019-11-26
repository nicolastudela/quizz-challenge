import React from "react";
import renderer from "react-test-renderer";
import { userWith1BooleanResult } from "../../__mocks__/user.mock";
import { BasicTestWrapper } from "test-utils";
import { Result } from "../Result";

jest.mock("react-router-dom", () => {
  const original = jest.requireActual("react-router-dom");
  return {
    ...original,
    Redirect: jest.fn().mockImplementation(() => <div> REDIRECT</div>)
  };
});

describe("Result page", () => {
  it("renders propery when results are available", () => {
    expect.assertions(1);
    const component = renderer.create(
      <BasicTestWrapper>
        <Result results={userWith1BooleanResult.results} />
      </BasicTestWrapper>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("renders propery when results are NOT available", () => {
    expect.assertions(1);
    const component = renderer.create(
      <BasicTestWrapper>
        <Result results={[]} />
      </BasicTestWrapper>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
