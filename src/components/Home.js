import React from "react";
import { Typography } from "@material-ui/core";

export const Home = ({user, ...rest}) => (
  <>
    <Typography variant="h3" align="center">{`Welcome ${user.name}`}</Typography>
  </>
);

export default Home
