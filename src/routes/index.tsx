import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../view/login/index";
import home from "../view/home/index";

import { AuthContextProvider } from "../context/AuthContext";

export const Routes = () => (
  <BrowserRouter>
    <AuthContextProvider>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={home} />
      </Switch>
    </AuthContextProvider>
  </BrowserRouter>
);
