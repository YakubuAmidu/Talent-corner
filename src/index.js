import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Gold from "./components/Gold";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/gold" component={Gold} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
