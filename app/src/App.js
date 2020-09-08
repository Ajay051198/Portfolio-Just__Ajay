import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Index from "./components/Index";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Index />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
