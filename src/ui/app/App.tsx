import React from "react";
import "./App.css";
import Main from "../page/main/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "../../constants/Routes";
import { UserProvider } from "../../core/Context";

function App() {
  return (
    <Router>
      <UserProvider>
        <Switch>
          {Routes.map((el) => (
            <Route key={el.path} path={el.path} component={el.component} exact></Route>
          ))}
        </Switch>
      </UserProvider>
    </Router>
  );
}

export default App;
