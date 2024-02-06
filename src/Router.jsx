import React from "react";
import { Route, Switch } from "react-router";
import { authRoutes, routes } from "../src/config/routes";
import Auth from "./Auth";

const Router = () => {
  return (
    <Switch>
      {routes.map((item) => (
        <Route {...item}></Route>
      ))}
      <Auth>
        {authRoutes.map((item) => (
          <Route {...item}></Route>
        ))}
      </Auth>
    </Switch>
  );
};

export default Router;
