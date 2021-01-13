import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Posts from "./Posts";
import Albums from "./Albums";
import Todos from "./Todos";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/posts" exact>
          <Posts />
        </Route>
        <Route path="/albums" exact>
          <Albums />
        </Route>
        <Route path="/todos" exact>
          <Todos />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
