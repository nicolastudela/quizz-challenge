import React, { useEffect } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { Box } from "@material-ui/core";
import { Home, Intro, Trivia, Result } from "components";
import { connect } from "react-redux";
import { fetchQuestionnaire } from "redux/ducks/questionnaire";

const NoMatch = () => <div>NO match</div>;

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, userName, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (userName) {
          return <Component userName={userName} {...props} />;
        }
        return (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        );
      }}
    />
  );
};

const App = ({ userName, fetchQuestionnaire }) => {
  useEffect(() => {
    fetchQuestionnaire();
  }, [fetchQuestionnaire]);
  return (
    <>
      <Box
        style={{
          background:
            "url(https://www.racingclub.com.ar/img/fondo-hinchada.jpg) no-repeat center center"
        }}
        height="100%"
        width="100%"
        display="flex"
      >
        <Box
          bgcolor="background.paper"
          width={{ xs: "95%", sm: "600px" }}
          marginX="auto"
          marginY="3rem"
          padding="1.5rem"
          border="2px solid"
          boxShadow="rgba(0, 153, 204, 0.9) 2px 2px 2px"
        >
          <Switch>
            <Route
              exact
              path="/"
              render={routeProps =>
                userName ? (
                  <Home userName={userName} {...routeProps} />
                ) : (
                  <Intro {...routeProps} />
                )
              }
            />
            <PrivateRoute
              userName={userName}
              exact
              path="/trivia"
              component={Trivia}
            />
            <PrivateRoute
              userName={userName}
              exact
              path="/result"
              component={Result}
            />
            <Route component={NoMatch} />
          </Switch>
        </Box>
      </Box>
    </>
  );
};

const mapStateToProps = state => {
  return { userName: state.user.name };
};

export default connect(mapStateToProps, {
  fetchQuestionnaire
})(App);
