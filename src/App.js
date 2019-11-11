import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from './components/Home'

const NoMatch = () => <div>NO match</div>

export default () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </>
  );
}
