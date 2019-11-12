import React from "react";
import { Typography } from "@material-ui/core";

export const Trivia = ({user, ...rest}) => (
  <>
    <Typography variant="h3" align="center">{`Trivia for ${user.name}`}</Typography>
  </>
);

export default Trivia
