import React, { useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute: React.FC<{
  component: React.FC;
  path: string;
  exact: boolean;
}> = (props) => {
  const { user, setUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      const uid = localStorage.getItem("id");
      const displayName = localStorage.getItem("name");
      const photoURL = localStorage.getItem("avatar");
      if (uid && displayName && photoURL) {
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        });
      } else {
        history.push("/");
      }
    }
  }, [history, setUser, user]);

  return (
    <Route path={props.path} exact={props.exact} component={props.component} />
  );
};
export default PrivateRoute;
