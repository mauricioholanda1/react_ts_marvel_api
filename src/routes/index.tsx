import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../view/login/index";
import home from "../view/home/index";
import characterDetail from "../view/characterDetail/index";

import { AuthContextProvider } from "../context/AuthContext";
import PrivateRoute from "./privateRoute";

export const Routes = () => (
  <BrowserRouter>
    <AuthContextProvider>
      <Switch>
        <Route path="/" exact component={Login} />
        <PrivateRoute path="/home" exact component={home} />
        <PrivateRoute
          path="/characterDetail/:id"
          exact
          component={characterDetail}
        />
      </Switch>
    </AuthContextProvider>
  </BrowserRouter>
);
