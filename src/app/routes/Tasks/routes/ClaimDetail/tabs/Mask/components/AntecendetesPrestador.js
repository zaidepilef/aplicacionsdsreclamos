import React from 'react'
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

const AntecendetesPrestador = (props) => {

  const {instanciaData, classes} = props

  return (
    <>
      <Divider className={classes.dividerBody} />
          <h1 className="card-title">Antecedentes del prestador</h1>
          <div className="row">
            <div className="col-md-6 col-12">
              <TextField
                name="prestador_region"
                label="Región"
                variant="outlined"
                margin="normal"
                fullWidth
                value={instanciaData.region.nombre}
                disabled
              />
            </div>
            <div className="col-md-6 col-12">
              <TextField
                name="prestador_comuna"
                label="Comuna"
                variant="outlined"
                margin="normal"
                fullWidth
                value={instanciaData.comuna.nombre}
                disabled
              />
            </div>
            <div className="col-md-6 col-12">
              <TextField
                name="prestador_establecimineto_salud"
                label="Establecimiento de Salud"
                variant="outlined"
                margin="normal"
                fullWidth
                value={"Clinica Alemana de Temuco"}
                disabled
              />
            </div>
            <div className="col-md-6 col-12">
              <TextField
                name="prestador_establecimineto_salud_direccion"
                label="Direccion Establecimiento de Salud"
                variant="outlined"
                margin="normal"
                fullWidth
                value={"Calle Senador Estebanez 645"}
                disabled
              />
            </div>
          </div> 
    </>
  )
}

export default AntecendetesPrestador
