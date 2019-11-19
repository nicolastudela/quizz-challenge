import React, { useState } from "react";
import { Box, Button, CircularProgress, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Space } from "uiCommons";
import { fetchQuestionnaire } from "redux/ducks/questionnaire";
import { addResult } from "redux/ducks/user";
import { format } from "date-fns";

const QuestionnaireNotAvailable = ({ refetchQuestionnaire }) => (
  <>
    <Typography variant="h3" align="center">
      {"Sorry an error has ocurred, please try again later"}
    </Typography>
    <Space size="4em" />
    <Box display="flex">
      <Button
        variant="contained"
        color="primary"
        onClick={() => refetchQuestionnaire()}
      >
        Reload Questionnaire
      </Button>
    </Box>
  </>
);

QuestionnaireNotAvailable.propTypes = {
  refetchQuestionnaire: PropTypes.func.isRequired
};

const Question = ({ question, onAnswer }) => (
  <>
    <Typography
      variant="h4"
      align="center"
    >{`${question.category}`}</Typography>
    <Space size="6em" />
    {question.type === "boolean" && (
      <>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onAnswer(question, "False")}
          size="large"
        >
          False
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => onAnswer(question, "True")}
          size="large"
        >
          True
        </Button>
      </>
    )}
  </>
);

Question.propTypes = {
  question: PropTypes.PropTypes.shape({
    category: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    correctAnswer: PropTypes.string.isRequired,
    incorrectAnswers: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  onAnswer: PropTypes.func.isRequired
};

const isQuestionnaireReady = (isFetching, questions) =>
  !isFetching && questions && questions.length > 1;

export const Trivia = ({
  userName,
  isQuestionnaireLoading,
  refetchQuestionnaire,
  addResultToUser,
  questions,
  history
}) => {
  const [answers, setAnswers] = useState([]);
  const questionaryReady = isQuestionnaireReady(
    isQuestionnaireLoading,
    questions
  );

  const nextQuestion = () => {
    return questionaryReady ? questions[answers.length] : null;
  };

  const onFinish = () => {
    const result = {
      overall: {
        answersCorrect: answers.filter(ans => ans.correct).length,
        totalQuestions: questions.length,
        dateTime: format(new Date(), "yyyy/M/d h/m")
      },
      answers
    };
    addResultToUser(result);

    history.push("/result");
  };

  const onAnswer = (question, answer) => {
    const updatedAnswers = answers.concat([
      {
        ...question,
        answer,
        correct: question.correctAnswer === answer
      }
    ]);
    setAnswers(updatedAnswers);
    if (updatedAnswers.length === questions.length) {
      onFinish();
    }
  };

  const question = nextQuestion();

  return (
    <>
      <Typography variant="h3" align="center">{`Go ${userName}!`}</Typography>
      <Space size="6em" />
      <Box display="flex" flexDirection="column" alignItems="center">
        {isQuestionnaireLoading && <CircularProgress />}
        {!isQuestionnaireLoading && !questionaryReady && (
          <QuestionnaireNotAvailable
            refetchQuestionnaire={refetchQuestionnaire}
          />
        )}
        {questionaryReady && (
          <>
            {question && <Question question={question} onAnswer={onAnswer} />}
            <Space size="6em" />
            {answers && (
              <Typography variant="body1">{`${answers.length + 1} / ${
                questions.length
              }`}</Typography>
            )}
          </>
        )}
      </Box>
    </>
  );
};

Trivia.propTypes = {
  userName: PropTypes.string.isRequired,
  isQuestionnaireLoading: PropTypes.bool,
  refetchQuestionnaire: PropTypes.func,
  addResultToUser: PropTypes.func,
  questions: PropTypes.arrayOf(PropTypes.object),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

Trivia.defaultProps = {
  isQuestionnaireLoading: false,
  refetchQuestionnaire: () => {},
  questions: null,
  addResultToUser: () => {}
};

const mapStateToProps = state => {
  // debugger
  return {
    isQuestionnaireLoading: state.questionnaire.isFetching,
    questions: state.questionnaire.items
  };
};

export default connect(mapStateToProps, {
  refetchQuestionnaire: fetchQuestionnaire,
  addResultToUser: addResult
})(Trivia);
