import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom';
import asyncComponent from '../../../util/asyncComponent';

const Mockups = ({match}) => {
    return (
        <div className="app-wrapper">
            <Switch>
                <Redirect exact from={`${match.url}/`} to={`${match.url}/formulario`} />
                <Route path={`${match.url}/formulario`} component={asyncComponent(() => import('./routes/Formulario'))} />
                <Route component={asyncComponent(() => import('app/routes/extraPages/routes/404'))} />
            </Switch>
        </div>
    )
}

export default Mockups
