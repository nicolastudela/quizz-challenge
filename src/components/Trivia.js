import React from "react";
import { Box, Button, CircularProgress, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { Space } from "uiCommons";
import {
  isQuestionnaireReady,
  fetchQuestionnaire
} from "redux/ducks/questionnaire";

export const Trivia = ({
  user,
  isQuestionnaireLoading,
  isQuestionnaireReady,
  fetchQuestionnaire,
  questions,
  ...rest
}) => (
  <>
    <Typography
      variant="h3"
      align="center"
    >{`Go ${user.name}!`}</Typography>
    <Space size="6em" />
    <Box display="flex" flexDirection="column" alignItems="center">
      {isQuestionnaireLoading && <CircularProgress />}
      {!isQuestionnaireLoading && !isQuestionnaireReady && (
        <>
          <Typography
            variant="h3"
            align="center"
          >{`Sorry an error has ocurred, please try again later`}</Typography>
          <Space size="4em" />
          <Button
            variant="contained"
            color="primary"
            onClick={() => fetchQuestionnaire()}
          >
            Reload Questionnaire
          </Button>
        </>
      )}
    </Box>
  </>
);

const mapStateToProps = state => {
  return {
    isQuestionnaireLoading: state.questionnaire.isFetching,
    isQuestionnaireReady: isQuestionnaireReady(state)
  };
};

export default connect(
  mapStateToProps,
  {
    fetchQuestionnaire
  }
)(Trivia);
