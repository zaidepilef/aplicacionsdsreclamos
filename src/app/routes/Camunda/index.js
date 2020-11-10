import React from 'react'
import { Route, Switch } from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';


const Administracion = ({ match }) => {
    return (
        <Switch>
            {/* <Redirect exact from={`${match.url}/`} to={`${match.url}/en-proceso`} /> */}
            <Route path={`${match.url}/re-asignar`} component={asyncComponent(() => import('./routes/ReAsignar'))} />
            <Route path={`${match.url}/duplicar`} component={asyncComponent(() => import('./routes/Duplicar'))} />
            <Route path={`${match.url}/transferir`} component={asyncComponent(() => import('./routes/Transferir'))} />
            <Route component={asyncComponent(() => import('app/routes/extraPages/routes/404'))} />
        </Switch>
    )
}

export default Administracion