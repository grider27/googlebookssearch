import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import MainNav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <MainNav />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}



export default App;
