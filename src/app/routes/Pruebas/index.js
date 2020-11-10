import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import asyncComponent from "../../../util/asyncComponent";

const Pruebas = ({ match }) => {
  return (
    <div className="app-wrapper">
      <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/plantilla`} />
        <Route
          path={`${match.url}/plantilla`}
          component={asyncComponent(() => import("./routes/Plantilla"))}
        />
        <Route
          component={asyncComponent(() =>
            import("app/routes/extraPages/routes/404")
          )}
        />
      </Switch>
    </div>
  );
};

export default Pruebas;
