import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./view/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
