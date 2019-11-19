import React from "react";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

export const Result = ({ userName, location, results }) => {
  const result = results.length > 0 ? results[results.length - 1] : null;

  return result ? (
    <>
      <Typography
        variant="h3"
        align="center"
      >{`${userName} you scored `}</Typography>
      <Typography
        variant="h4"
        align="center"
      >{`${result.overall.answersCorrect} / ${result.overall.totalQuestions}`}</Typography>
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
