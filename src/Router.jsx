import React from "react";
import { Switch, Route } from "react-router";
import { Login, Home, SignUp, SignIn } from "./page";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/login"} component={Login}></Route>
      <Route exact path={"/signup"} component={SignUp}></Route>
      <Route exact path={"/signin"} component={SignIn}></Route>
      <Route exact path={"(/)?"} component={Home}></Route>
    </Switch>
  );
};

export default Router;
