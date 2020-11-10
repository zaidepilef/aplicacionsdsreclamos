import React from 'react'
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

const DatosControl = (props) => {

  const { instanciaData, classes } = props;

  return (
    <>
      <h3 className="font-weight-light"><strong>Datos de Control</strong></h3>
      <Divider className={classes.divider} />
      <div className="row">
        <div className="col-md-4 col-12">
          <TextField
            name=""
            label="Prioridad"
            variant="outlined"
            margin="normal"
            fullWidth
            value={instanciaData.triage.descripcion}
            disabled
          />
        </div>
        <div className="col-md-8 col-12">
        </div>
        <div className="col-md-4 col-12">
          <TextField

            name=""
            label="Tipo de Ingreso"
            variant="outlined"
            margin="normal"
            fullWidth
            value={instanciaData.origen_reclamo}
            disabled
          />
        </div>
        <div className="col-md-4 col-12">
          <TextField

            name=""
            label="Unidad Responsable"
            variant="outlined"
            margin="normal"
            fullWidth
            disabled
          />
        </div>
        <div className="col-md-4 col-12">
          <TextField

            name=""
            label="Analista encargado"
            variant="outlined"
            margin="normal"
            fullWidth
            disabled
          />
        </div>
        <div className="col-md-6 col-12">
          <TextField

            name=""
            label="Fecha de presentación del reclamo"
            variant="outlined"
            margin="normal"
            fullWidth
            value={instanciaData.fecha_limite}
            disabled
          />
        </div>

        <div className="col-md-6 col-12">
          <TextField

            name=""
            label="Fecha de notificación del reclamante"
            variant="outlined"
            margin="normal"
            fullWidth
            value={instanciaData.fecha_reclamo_prestador}
            disabled
          />
        </div>
        <div className="col-md-6 col-12">
          <TextField

            name=""
            label="Tipo de Reclamo"
            variant="outlined"
            margin="normal"
            fullWidth
            value={instanciaData.tipo_reclamo.tipo}
            disabled
          />
        </div>
        <div className="col-md-6 col-12">
          <TextField

            name=""
            label="Via de tramitación"
            variant="outlined"
            margin="normal"
            fullWidth
            disabled
          />
        </div>
        <div className="col-md-6 col-12">
          <TextField

            name=""
            label="Materia"
            variant="outlined"
            margin="normal"
            fullWidth
            value={instanciaData.materia.descripcion}
            disabled
          />
        </div>
        <div className="col-md-6 col-12">
          <TextField

            name=""
            label="Submateria"
            variant="outlined"
            margin="normal"
            fullWidth
            value={instanciaData.materia.descripcion}
            disabled
          />
        </div>
      </div>
    </>
  )
}

export default DatosControl
