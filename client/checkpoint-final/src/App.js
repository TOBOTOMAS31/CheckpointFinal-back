import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navigation from "./admin/Navigation";
import Home from './users/Home';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>

          <Route exact path="/admin">
            <Navigation />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
