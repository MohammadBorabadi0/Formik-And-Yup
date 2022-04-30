import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";

// Components
import Login from "./Components/Login";
import Signup from "./Components/Signup";

const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Signup} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
