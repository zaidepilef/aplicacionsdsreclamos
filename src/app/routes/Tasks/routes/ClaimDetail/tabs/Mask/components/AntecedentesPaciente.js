import React from 'react'
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

const AntecedentesPaciente = (props) => {

  const {instanciaData, classes} = props

  return (
    <>
      <Divider className={classes.dividerBody} />
          <h1 className="card-title">Antecedentes del paciente</h1>
          <div className="row">
            <div className="col-md-4 col-12">
              <TextField
                name="paciente_rut"
                label="Rut"
                variant="outlined"
                margin="normal"
                fullWidth
                value={instanciaData.es_reclamante_y_afectado ? instanciaData.cotizante.full_rut : "111111-1"}
                disabled
              />
            </div>
            <div className="col-md-4 col-12">
              <TextField
                name="paciente_nombres"
                label="Nombres"
                variant="outlined"
                margin="normal"
                fullWidth
                value={instanciaData.es_reclamante_y_afectado ? instanciaData.cotizante.nombres : "Otro Nombre"}
                disabled
              />
            </div>
            <div className="col-md-4 col-12">
              <TextField
                name="paciente_apellido_paterno"
                label="Apellido Paterno"
                variant="outlined"
                margin="normal"
                fullWidth
                value={instanciaData.es_reclamante_y_afectado ? instanciaData.cotizante.apellido_paterno : "Otro Apellido Paterno"}
                disabled
              />
            </div>
            <div className="col-md-4 col-12">
              <TextField
                name="paciente_apellido_materno"
                label="Apellido Materno"
                variant="outlined"
                margin="normal"
                fullWidth
                value={instanciaData.es_reclamante_y_afectado ? instanciaData.cotizante.apellido_materno : "Otro Apellido Materno"}
                disabled
              />
            </div>
            <div className="col-md-4 col-12">
              <TextField
                name="paciente_genero"
                label="Género"
                variant="outlined"
                margin="normal"
                fullWidth
                value={instanciaData.es_reclamante_y_afectado ? instanciaData.cotizante.genero.desc_genero : "Otro Género"}
                disabled
              />
            </div>
            <div className="col-md-4 col-12">
              <TextField
                name="paciente_fecha_nacimiento"
                label="Fecha Nacimiento"
                variant="outlined"
                margin="normal"
                fullWidth
                value={instanciaData.es_reclamante_y_afectado ? instanciaData.cotizante.fecha_nacimiento : "Otra fecha de nacimiento"}
                disabled
              />
            </div>
            <div className="col-md-4 col-12">
              <TextField
                name="paciente_edad"
                label="Edad"
                variant="outlined"
                margin="normal"
                fullWidth
                value={instanciaData.es_reclamante_y_afectado ? instanciaData.cotizante.edad : "Otra edad"}
                disabled
              />
            </div>
            <div className="col-md-4 col-12">
              <TextField
                name="paciente_nacionalidad"
                label="Nacionalidad"
                variant="outlined"
                margin="normal"
                fullWidth
                value={instanciaData.es_reclamante_y_afectado ? instanciaData.cotizante.nacionalidad.gentilicio : "Otra nacionalidad"}
                disabled
              />
            </div>
            <div className="col-md-4 col-12">
              <TextField
                name="paciente_nacionalidad"
                label="Fonsa, Isapre u Otros"
                variant="outlined"
                margin="normal"
                fullWidth
                value={instanciaData.es_reclamante_y_afectado ? instanciaData.prestador : "Otra Prestacion"}
                disabled
              />
            </div>

          </div>
    </>
  )
}

export default AntecedentesPaciente
