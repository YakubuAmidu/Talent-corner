import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createBrowserHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <Router history={createBrowserHistory()}>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
