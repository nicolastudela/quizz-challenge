import React from "react";
import renderer from "react-test-renderer";
import { render, wait } from "@testing-library/react";
import { WithReduxStoreTestWrapper, BasicTestWrapper } from "test-utils";
import ConnectedTrivia, { Trivia } from "../Trivia";
import mockQuestions from "../../__mocks__/booleanQuestionnaireResponse.mock";

jest.mock("@material-ui/core", () => {
  const original = jest.requireActual("@material-ui/core");
  return {
    ...original,
    Grow: jest.fn().mockImplementation(props => <div>{props.children}</div>)
  };
});

describe("Triva page", () => {
  it("renders propery ", () => {
    expect.assertions(1);
    const component = renderer.create(
      <BasicTestWrapper>
        <Trivia
          userName="Nico"
          isQuestionnaireLoading={false}
          questions={mockQuestions.results}
        />
      </BasicTestWrapper>
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("will show mocked questions when it loads ", () => {
    expect.assertions(2);
    const { getByText } = render(
      <WithReduxStoreTestWrapper
        store={{
          questionnaire: {
            items: mockQuestions.results,
            isFetching: false,
            error: null
          },
          user: { name: "Nico" }
        }}
      >
        <ConnectedTrivia userName="Nico" />
      </WithReduxStoreTestWrapper>
    );

    expect(getByText(mockQuestions.results[0].category)).toBeTruthy();
    expect(getByText(mockQuestions.results[0].question)).toBeTruthy();
  });

  it("will show the second question after answering the first one ", async () => {
    expect.assertions(4);
    const { getByText } = render(
      <WithReduxStoreTestWrapper
        store={{
          questionnaire: {
            items: mockQuestions.results,
            isFetching: false,
            error: null
          },
          user: { name: "Nico" }
        }}
      >
        <ConnectedTrivia userName="Nico" />
      </WithReduxStoreTestWrapper>
    );

    expect(getByText("1 / 10")).toBeTruthy();

    // asnwers True
    const answerButtonTrue = getByText("True");
    answerButtonTrue.click();

    await wait(() => expect(getByText("2 / 10")).toBeTruthy());

    expect(getByText(mockQuestions.results[1].category)).toBeTruthy();
    expect(getByText(mockQuestions.results[1].question)).toBeTruthy();
  });
});
