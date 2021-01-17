import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useFetch } from "./utils";
import { Posts, Albums, Todos, Home } from "./pages";
import "./reset.scss";

const App = () => {
  const [users, setUsers] = useState();

  const { rawData } = useFetch({
    url: "https://jsonplaceholder.typicode.com/users",
  });

  useEffect(() => {
    if (rawData) {
      setUsers(rawData);
    } else {
      return;
    }
  }, [rawData]);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/posts" exact>
          <Posts users={users} />
        </Route>
        <Route path="/albums" exact>
          <Albums users={users} />
        </Route>
        <Route path="/todos" exact>
          <Todos users={users} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
