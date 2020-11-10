import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import asyncComponent from "../../../util/asyncComponent";

const Tareas = ({ match }) => {
  return (
    <div className="app-wrapper">
      <Switch>
        <Redirect exact from={`${match.url}/`} to={`${match.url}/en-proceso`} />
        <Route
          path={`${match.url}/en-proceso`}
          component={asyncComponent(() => import("./routes/ClaimInProcess"))}
        />
        <Route
          path={`${match.url}/finalizadas`}
          component={asyncComponent(() => import("./routes/ClaimCompleted"))}
        />
        <Route
          path={`${match.url}/oficina-partes`}
          component={asyncComponent(() => import("./routes/PartsOffice"))}
        />
        <Route
          path={`${match.url}/traslado`}
          component={asyncComponent(() => import("./routes/TrasladarTareas"))}
        />
        <Route
          path={`${match.url}/detalle/:id`}
          component={asyncComponent(() => import("./routes/ClaimDetail"))}
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

export default Tareas;
