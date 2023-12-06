import React from "react";
import { Route, Switch } from "react-router";
import { Home, ProductEdit, Reset, SignIn, SignUp } from "./page";
import Auth from "./Auth";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/signup"} component={SignUp}></Route>
      <Route exact path={"/signin"} component={SignIn}></Route>
      <Route exact path={"/signin/reset"} component={Reset}></Route>
      <Auth>
        <Route exact path={"(/)?"} component={Home}></Route>
        <Route path={"/product/edit(/:id)?"} component={ProductEdit}></Route>
      </Auth>
    </Switch>
  );
};

export default Router;
