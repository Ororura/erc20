import React from "react";
import "./App.css";
import Main from "../page/main/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "../../constants/Routes";

function App() {
  return (
    <Router>
      <Switch>
        {Routes.map((el) => (
          <Route key={el.path} path={el.path} component={el.component} exact></Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
