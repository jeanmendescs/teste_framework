import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Posts, Albums, Todos, Home } from "./pages";
import { useFetch, UsersContext } from "./utils";
import "./reset.scss";

const App = () => {
  const [users, setUsers] = useState();
  const { rawData } = useFetch({
    url: "https://jsonplaceholder.typicode.com/users",
  });

  useEffect(() => {
    if (rawData) {
      setUsers(rawData);
    }
  }, [rawData]);

  return (
    <UsersContext.Provider value={users}>
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
    </UsersContext.Provider>
  );
};

export default App;
