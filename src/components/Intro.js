import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Space } from "uiCommons";
import { userSignIn } from "../redux/ducks/user";

export const Intro = ({ signIn, history }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState();

  const handleChange = () => ({ target: { value } }) => {
    if (!value || value === "") {
      setError("You must enter a name to start the trivia");
    } else {
      setError(null);
    }

    setName(value);
  };

  const onBegin = () => {
    signIn(name);
    history.push("/trivia");
  };

  return (
    <>
      <Typography variant="h2" align="center">
        Welcome to the Trivia Challenge!
      </Typography>
      <Space size="6em" />

      <Typography variant="h4" align="center">
        You will be presented with 10 True or False questions.
      </Typography>
      <Space size="1.5em" />
      <Typography variant="h4" align="center">
        Can You Score 100%?
      </Typography>
      <Space size="4em" />
      <form onSubmit={onBegin}>
        <Typography variant="subtitle1" align="left">
          Write your name to begin
        </Typography>
        <Space size="0.5em" />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems={error ? "flex-start" : "center"}
          flexWrap="wrap"
        >
          <Box width={{ xs: "100%", sm: "60%" }}>
            <TextField
              id="name"
              label="Name"
              autoComplete="Name"
              name="name"
              onChange={handleChange("name")}
              value={name}
              error={!!error}
              helperText={error}
              variant="outlined"
              required
              fullWidth
            />
          </Box>
          <Box display="flex" width={{ xs: "100%", sm: "35%" }}>
            <Box
              marginX={{ xs: "auto" }}
              marginY={{ xs: "1rem", md: 0 }}
              width="100%"
            >
              <Button
                style={{ width: "100%" }}
                variant="contained"
                color="primary"
                type="submit"
                size="large"
                disabled={error || !name}
              >
                Begin
              </Button>
            </Box>
          </Box>
        </Box>
      </form>
    </>
  );
};

Intro.propTypes = {
  signIn: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

Intro.defaultProps = {
  signIn: () => {}
};

export default connect(null, { signIn: userSignIn })(Intro);
