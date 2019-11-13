import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { Space } from "uiCommons";
import { userSignIn } from "../redux/ducks/user";

export const Intro = ({ userSignIn, history, ...rest }) => {
  const [name, setName] = useState();
  const [error, setError] = useState();

  const handleChange = name => ({ target: { value } }) => {
    if (!value || value === "") {
      setError("You must enter a name to start the trivia");
    } else {
      setError(null);
    }

    setName(value);
  };

  const onBegin = () => {
    //next stage
    userSignIn(name);
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
      <Space size="4em" />
      <Typography variant="h4" align="center">
        Can You Score 100%?
      </Typography>

      <form onSubmit={onBegin}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <Box width={{ sm: "100%", md: "60%" }}>
            <TextField
              id="name"
              label="Name"
              autoComplete="Write your name to start"
              name="name"
              onChange={handleChange("name")}
              value={name}
              error={!!error}
              helperText={error || "Write your name to start"}
              // helperText={error}
              variant="outlined"
              required
              fullWidth
            />
          </Box>
          <Box display="flex" width={{ xs: "100%", md: "35%" }}>
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

export default connect(
  null,
  { userSignIn }
)(Intro);
