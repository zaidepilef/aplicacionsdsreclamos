import React from 'react'
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

const AntecendetesDelReclamanteORepresentante = (props) => {

  const {instanciaData, classes} = props
  let newDate = new Date()
  let year = newDate.getFullYear()

  let añoActual = year - parseInt(instanciaData.cotizante.fecha_nacimiento)
  return (
    <>
      <Divider className={classes.dividerBody} />
          <h1 className="card-title">Antecedentes del reclamante o representante</h1>
          <div className="row">
            <div className="col-md-4 col-12">
              <TextField

                name=""
                label="Rut"
                variant="outlined"
                margin="normal"
                fullWidth
                value={instanciaData.cotizante.rut}
                disabled
              />
            </div>
            <div className="col-md-8 col-12">
            </div>
            <div className="col-md-4 col-12">
              <TextField

                name=""
                label="Nombres"
                variant="outlined"
                margin="normal"
                fullWidth
                value={instanciaData.cotizante.nombres}
                disabled
              />
            </div>
            <div className="col-md-4 col-12">
              <TextField

                name=""
                label="Apellido Paterno"
                variant="outlined"
                margin="normal"
                fullWidth
                value={instanciaData.cotizante.apellido_paterno}
                disabled
              />
            </div>
            <div className="col-md-4 col-12">
              <TextField

                name=""
                label="Apellido Materno"
                variant="outlined"
                margin="normal"
                fullWidth
                value={instanciaData.cotizante.apellido_materno}
                disabled
              />
            </div>
            <div className="col-md-4 col-12">
              <TextField

                name=""
                label="Género"
                variant="outlined"
                margin="normal"
                fullWidth
                value={instanciaData.cotizante.nombres}
                disabled
              />
            </div>
            <div className="col-md-4 col-12">
              <TextField

                name=""
                label="Género"
                variant="outlined"
                margin="normal"
                fullWidth
                value={instanciaData.cotizante.fecha_nacimiento}
                disabled
              />
            </div>
            <div className="col-md-4 col-12">
              <TextField

                name="edad"
                label="Edad"
                variant="outlined"
                margin="normal"
                fullWidth
                value={añoActual}
                disabled
              />
            </div>
            <div className="col-md-4 col-12">
              <TextField

                name="nacionalidad"
                label="Nacionalidad"
                variant="outlined"
                margin="normal"
                fullWidth
                value={instanciaData.cotizante.nacionalidad.gentilicio}
                disabled
              />
            </div>
            <div className="col-md-4 col-12">
              <TextField

                name="edad"
                label="Télefono Contacto 1"
                variant="outlined"
                margin="normal"
                fullWidth
                value={instanciaData.cotizante.telefono_contacto_uno}
                disabled
              />
            </div>
            <div className="col-md-4 col-12">
              <TextField

                name="edad"
                label="Télefono Contacto 2"
                variant="outlined"
                margin="normal"
                fullWidth
                value={instanciaData.cotizante.telefono_contacto_dos === "0" ? "" : instanciaData.cotizante.telefono_contacto_dos}
                disabled
              />
            </div>
            <div className="col-md-12 col-12">
              <TextField

                name="edad"
                label="Domicilio"
                variant="outlined"
                margin="normal"
                fullWidth
                value={instanciaData.cotizante.nombres}
                disabled
              />
            </div>
            <div className="col-md-4 col-12">
              <TextField

                name="edad"
                label="Region"
                variant="outlined"
                margin="normal"
                fullWidth
                value={instanciaData.region.nombre}
                disabled
              />
            </div>
            <div className="col-md-4 col-12">
              <TextField

                name="edad"
                label="Region"
                variant="outlined"
                margin="normal"
                fullWidth
                value={instanciaData.provincia.nombre}
                disabled
              />
            </div>
            <div className="col-md-4 col-12">
              <TextField

                name="edad"
                label="Comuna"
                variant="outlined"
                margin="normal"
                fullWidth
                value={instanciaData.comuna.nombre}
                disabled
              />
            </div>
            <div className="col-md-4 col-12">
              <TextField

                name="edad"
                label="Notificacion Electrónica"
                variant="outlined"
                margin="normal"
                fullWidth
                value=""
                disabled
              />
            </div>
            <div className="col-md-4 col-12">
              <TextField

                name="edad"
                label="Correo Electrónico"
                variant="outlined"
                margin="normal"
                fullWidth
                value={instanciaData.cotizante.correo_electronico}
                disabled
              />
            </div>
            <div className="col-md-4 col-12">
              <TextField

                name="edad"
                label="Confirmar Correo Electrónico"
                variant="outlined"
                margin="normal"
                fullWidth
                value={instanciaData.cotizante.correo_electronico}
                disabled
              />
            </div>
          </div>
    </>
  )
}

export default AntecendetesDelReclamanteORepresentante
