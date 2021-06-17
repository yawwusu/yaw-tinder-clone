import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chats">
            <Header />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
