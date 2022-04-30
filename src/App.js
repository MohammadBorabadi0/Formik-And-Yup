import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

// Components
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import User from "./Components/User";

const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/user" component={User} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Signup} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
