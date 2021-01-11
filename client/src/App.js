import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";


function App() {
    return (
      <Router>
        <main>
          <Nav />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route exact path="/saved">
              <Saved />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </main>
      </Router>
    );
  }



export default App;
