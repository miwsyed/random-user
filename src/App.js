import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Components/Landing";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>

        <Route>
          <div>Not found</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
