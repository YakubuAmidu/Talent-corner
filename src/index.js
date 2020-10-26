import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import TalentScreen from "./screens/TalentScreen";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/TalentScreen" component={TalentScreen} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
