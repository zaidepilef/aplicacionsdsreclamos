import React from 'react'
import ContainerHeader from 'components/ContainerHeader';

const TrasladarTareas = ({ match }) => {
    return (
        <div>
            <ContainerHeader match={match} title="Traslado de Tareas" />
            <div className="row mb-md-3">
                <div className="col-12">
                    <div className="jr-card">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrasladarTareas
