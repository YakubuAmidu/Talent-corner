import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import TalentScreen from "./screens/TalentScreen";
import JobScreen from "./screens/JobScreen";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/TalentScreen" component={TalentScreen} />
      <Route exact path="/JobScreen" component={JobScreen} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
