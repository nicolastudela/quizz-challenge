import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { Box } from "@material-ui/core";
import { Home, Intro, Trivia } from "./components";
import { connect } from "react-redux";

const NoMatch = () => <div>NO match</div>;


const PrivateRoute = ({ component: Component, user, ...rest }) => {

  return (
    <Route
      {...rest}
      render={props => {

        if (user) {
          return <Component user={user} {...props} />
        }
        return (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        )
      }}
    />
  )
}

const App = ({user,...rest}) => {
  return (
    <>
      <Box style={{background: "url(https://www.racingclub.com.ar/img/fondo-hinchada.jpg) no-repeat center center"}} height="100%" width="100%" display="flex">
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
                user ? (
                  <Home user={user} {...routeProps} />
                ) : (
                  <Intro {...routeProps} />
                )
              }
            />
             <PrivateRoute user={user} exact path="/trivia" component={Trivia} />
            <Route component={NoMatch} />
          </Switch>
        </Box>
      </Box>
    </>
  );
};


const mapStateToProps = state => {
  return { user: state.user.user };
};

export default connect(
  mapStateToProps
)(App);

