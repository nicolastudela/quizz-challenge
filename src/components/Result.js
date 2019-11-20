import React from "react";
import {
  Box,
  Button,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Space } from "uiCommons";

export const Result = ({ userName, location, history, results }) => {
  const result = results.length > 0 ? results[results.length - 1] : null;

  return result ? (
    <>
      <Typography variant="h3" align="center">
        You scored
      </Typography>
      <Typography
        variant="h4"
        align="center"
      >{`${result.overall.answersCorrect} / ${result.overall.totalQuestions}`}</Typography>
      <Space size="2em" />
      {result && result.answers && (
        <List>
          {result.answers.map((answer, idx) => (
            <ListItem key={idx}>
              <ListItemIcon>
                {answer.correct ? (
                  <AddIcon style={{ color: "green" }} />
                ) : (
                  <RemoveIcon style={{ color: "red" }} />
                )}
              </ListItemIcon>
              <ListItemText primary={answer.question} />
            </ListItem>
          ))}
        </List>
      )}
      <Space size="2em" />
      <Box display="flex" justifyContent="space-between">
        <Button
          style={{ width: "30%" }}
          variant="contained"
          color="secondary"
          onClick={() => history.push("/")}
        >
          Other Results
        </Button>
        <Button
          style={{ width: "50%" }}
          variant="contained"
          color="primary"
          onClick={() => history.push("/trivia")}
        >
          Play Again?
        </Button>
      </Box>
    </>
  ) : (
    <Redirect
      to={{
        pathname: "/",
        state: { from: location }
      }}
    />
  );
};

Result.propTypes = {
  userName: PropTypes.string.isRequired,
  location: PropTypes.shape({
    state: PropTypes.object
  }).isRequired,
  results: PropTypes.arrayOf(
    PropTypes.shape({
      overall: PropTypes.object
    })
  )
};

Result.defaultProps = {
  results: []
};

const mapStateToProps = state => {
  return {
    results: state.user.results
  };
};

export default connect(mapStateToProps)(Result);
