import React, { useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Index from "./components/Landing";
import Sidenav from "./components/Sidenav";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <Sidenav />
      <Switch>
        <Route path="/" exact>
          <Index />
        </Route>
        <Route path="/skills" exact>
          <Skills />
        </Route>
        <Route path="/projects" exact>
          <Projects />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
