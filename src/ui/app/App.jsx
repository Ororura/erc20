import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "../../constants/Routes";
import { ContextWrapper } from "../../core/Context";

function App() {
  return (
    <Router>
      <ContextWrapper>
        <Switch>
          {Routes.map((el) => (
            <Route key={el.path} path={el.path} component={el.component} exact></Route>
          ))}
        </Switch>
      </ContextWrapper>
    </Router>
  );
}

export default App;
