import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

export const Home = ({ userName }) => (
  <>
    <Typography variant="h3" align="center">{`Welcome ${userName}`}</Typography>
  </>
);

Home.propTypes = {
  userName: PropTypes.string.isRequired
};

export default Home;
