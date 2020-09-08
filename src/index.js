import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Home from "./Home";

import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route
        exact
        path="/dashboard"
        render={(props) => <Home {...props} username="Pratik" />}
      />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
