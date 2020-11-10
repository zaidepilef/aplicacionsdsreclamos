import React from 'react'
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

const AntecendetesReclamo = (props) => {

  const {instanciaData, classes} = props

  return (
    <>
      <Divider className={classes.dividerBody} />
          <h1 className="card-title">Fecha y periodo en que ocurrió el problema por el cual reclama</h1>
          <div className="row">
            <div className="col-md-6 col-12">
              <TextField
                name="fecha_inicio_reclamo"
                label="Fecha Desde"
                variant="outlined"
                margin="normal"
                fullWidth
                value={instanciaData.fecha_inicio_reclamo}
                disabled
              />
            </div>
            <div className="col-md-6 col-12">
              <TextField
                name="fecha_hasta"
                label="Fecha Hasta"
                variant="outlined"
                margin="normal"
                fullWidth
                value={instanciaData.fecha_hasta}
                disabled
              />
            </div>
            <div className="col-md-12 col-12">
              <Divider className={classes.dividerBody} />
              <h1 className="card-title font-weight-bold">DERECHO PRESUNTAMENTE VULNERADO</h1>
              <p>
                Se refiere a algunos de los derechos consagrados en la Ley N° 20.584 del 2012,
                que regula los derechos y deberes de las personas en realación con acciones
                vinculadas a su atención en salud.
              </p>
              <p>
                Derecho a una atención segura y de calidad.
              </p>
            </div>
            <Divider className={classes.dividerBody} />
            <div className="col-md-12 col-12">
              <TextField
                label="Descripción de la situación por la que se reclama"
                name="desc_problema"
                multiline
                rows="4"
                fullWidth
                variant="outlined"
                value={instanciaData.descripcion_problema}
                disabled
              />
            </div>
            <div className="col-md-12 col-12 mt-4">
              <TextField
                label="Petición concreta"
                name="peticion_concreta"
                multiline
                rows="4"
                fullWidth
                variant="outlined"
                value={instanciaData.explicacion}
                disabled
              />
            </div>
          </div> 
    </>
  )
}

export default AntecendetesReclamo
