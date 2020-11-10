import React from 'react'
import { Route, Switch } from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';


const Administracion = ({ match }) => {
    return (
        <Switch>
            {/* <Redirect exact from={`${match.url}/`} to={`${match.url}/en-proceso`} /> */}
            <Route path={`${match.url}/regiones`} component={asyncComponent(() => import('./routes/Regiones'))} />
            <Route path={`${match.url}/provincias`} component={asyncComponent(() => import('./routes/Provincias'))} />
            <Route path={`${match.url}/comunas`} component={asyncComponent(() => import('./routes/Comunas'))} />
            <Route path={`${match.url}/prestadores`} component={asyncComponent(() => import('./routes/Prestadores'))} />
            <Route path={`${match.url}/materias`} component={asyncComponent(() => import('./routes/Materias'))} />
            <Route path={`${match.url}/submaterias`} component={asyncComponent(() => import('./routes/Submaterias'))} />
            <Route path={`${match.url}/sexos`} component={asyncComponent(() => import('./routes/Sexos'))} />
            <Route path={`${match.url}/nacionalidades`} component={asyncComponent(() => import('./routes/Nacionalidades'))} />                
            <Route path={`${match.url}/tipo-calle`} component={asyncComponent(() => import('./routes/TipoCalle'))} />
            <Route path={`${match.url}/genero`} component={asyncComponent(() => import('./routes/Genero'))} />
            <Route path={`${match.url}/procesos`} component={asyncComponent(() => import('./routes/Procesos'))} />
            <Route path={`${match.url}/tareas`} component={asyncComponent(() => import('./routes/MantenedorTareas'))} />
            <Route path={`${match.url}/estadoplantilla`} component={asyncComponent(() => import('./routes/EstadoPlantilla'))} />
            <Route path={`${match.url}/plantillas`} component={asyncComponent(() => import('./routes/Plantillas'))} />
            <Route path={`${match.url}/plantillatareas`} component={asyncComponent(() => import('./routes/PlantillaTareas'))} />
            <Route path={`${match.url}/via_tramitacion`} component={asyncComponent(() => import('./routes/ViaTramitacion'))} />
            <Route path={`${match.url}/tipo_reclamo`} component={asyncComponent(() => import('./routes/TipoReclamo'))} />
            <Route component={asyncComponent(() => import('app/routes/extraPages/routes/404'))} />
        </Switch>
    )
}

export default Administracion