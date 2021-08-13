import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../view/home/index";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  </BrowserRouter>
);
