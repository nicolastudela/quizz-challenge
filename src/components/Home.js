import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Box,
  Button,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import MoodIcon from "@material-ui/icons/Mood";
import MoodBadIcon from "@material-ui/icons/MoodBad";
import { Space } from "uiCommons";
import { reset } from "redux/ducks/user";

const iconForResult = result => {
  const scoreRatio =
    result.overall.answersCorrect / result.overall.totalQuestions;
  if (scoreRatio <= 4 / 10) {
    return <MoodBadIcon style={{ color: "red" }} />;
  }
  if (scoreRatio >= 6 / 10) {
    return <MoodIcon style={{ color: "green" }} />;
  }
  return <SentimentDissatisfiedIcon style={{ color: "saddlebrown" }} />;
};

export const Home = ({ userName, results, history, resetUser }) => {
  const onResetUser = () => {
    resetUser();
    history.push("/");
  };
  return (
    <>
      <Typography
        variant="h3"
        align="center"
      >{`Welcome ${userName}`}</Typography>
      <Space size="6em" />
      <Typography variant="subtitle1" align="left">
        Your last results:
      </Typography>
      {results && (
        <List component="nav" aria-label="trivia-results">
          {results.map(result => (
            <ListItem key={`${result.overall.dateTime}`}>
              <ListItemIcon>{iconForResult(result)}</ListItemIcon>
              <ListItemText
                primary={`You scored: ${result.overall.answersCorrect} / ${result.overall.totalQuestions}`}
                secondary={result.overall.dateTime}
              />
            </ListItem>
          ))}
        </List>
      )}
      <Space size="6em" />
      <Box display="flex" justifyContent="space-between">
        <Button
          style={{ width: "30%" }}
          variant="contained"
          color="secondary"
          onClick={() => onResetUser()}
        >
          Reset User
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
  );
};

Home.propTypes = {
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

Home.defaultProps = {
  results: []
};

const mapStateToProps = state => {
  return {
    results: state.user.results
  };
};

export default connect(mapStateToProps, { resetUser: reset })(Home);
