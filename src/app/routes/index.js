import React from "react";
import Home from "app/routes/Home";
import Tasks from "app/routes/Tasks";
import Mockups from "app/routes/Mockups";
import FirmaMasiva from "app/routes/FirmaMasiva";
import Camunda from "app/routes/Camunda";
import Administracion from "app/routes/Administracion";
import Perfil from "app/routes/Perfil";
import ConsultaGeneral from "app/routes/ConsultaGeneral";
import Pruebas from "app/routes/Pruebas";
import OficinaDePartes from "app/routes/OficinaDePartes";
import Reportes from "app/routes/Reportes";
// util
import Plantillas from "util/Plantillas/Plantillas";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";
import asyncComponent from "util/asyncComponent";


const Routes = ({ match }) => (
  <Switch>
    <Route path={`${match.url}/index`} component={Home} />
    <Route path={`${match.url}/tareas`} component={Tasks} />
    <Route path={`${match.url}/mockups`} component={Mockups} />
    <Route path={`${match.url}/firma-masiva`} component={FirmaMasiva} />
    <Route path={`${match.url}/perfil`} component={Perfil} />
    <Route path={`${match.url}/camunda`} component={Camunda} />
    <Route path={`${match.url}/administracion`} component={Administracion} />
    <Route path={`${match.url}/perfil`} component={Perfil} />
    <Route path={`${match.url}/plantillas`} component={Plantillas} />
    <Route path={`${match.url}/consulta-general`} component={ConsultaGeneral} />
    <Route path={`${match.url}/pruebas`} component={Pruebas} />
    <Route
      path={`${match.url}/oficina-de-partes`}
      component={OficinaDePartes}
    />
    <Route path={`${match.url}/reportes`} component={Reportes} />
    <Route
      component={asyncComponent(() =>
        import("app/routes/extraPages/routes/404")
      )}
    />
  </Switch>
);

export default withRouter(Routes);
