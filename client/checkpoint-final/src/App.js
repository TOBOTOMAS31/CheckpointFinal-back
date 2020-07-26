import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navigation from "./admin/Navigation";
import Home from './users/Home';
import Login from './users/Login';
import PicDetail from './users/PicDetail';
import "./App.css";

function App() {
  const [redirection, setRedirection] = useState(false);

  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/pic-detail/:pic_id">
          <PicDetail />
        </Route>

        <Route exact path="/login">
          <Login 
          redirection={redirection}
          setRedirection={setRedirection}
          />
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
