import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Index from "./components/Landing";
import Sidenav from "./components/Sidenav";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

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
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/experience" exact>
          <Experience />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
