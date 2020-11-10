import React from 'react';
import ContainerHeader from 'components/ContainerHeader';

import FormularioNuevoProceso from './components/FormularioNuevoProceso'


const CrearProceso = ({ match }) => {

    return (
        <div className="app-wrapper">
            <ContainerHeader match={match} title="Crear Proceso" />
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                </div>
            </div>
            <div className="row">
                <FormularioNuevoProceso />
            </div>
        </div>
    );
}

export default CrearProceso






