import React from "react";
import { Typography, Button } from "@material-ui/core";

export default () => (
  <>
    <Typography variant="h1">Home</Typography>
    <Typography variant="body1">Hello</Typography>
    <Button variant="contained">Default</Button>
    <Button variant="contained" color="primary" size="large">
      Primary
    </Button>
    <Button variant="contained" size="medium" color="secondary">
      Secondary
    </Button>
    <Button variant="contained" color="secondary" size="small" disabled>
      Disabled
    </Button>
    <Button variant="contained" href="#contained-buttons">
      Link
    </Button>
  </>
);
