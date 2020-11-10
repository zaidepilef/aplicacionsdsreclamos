import React from 'react';
import TextField from "@material-ui/core/TextField";

const OtherForm = ({other}) => {
  return (
    <>
      <div className="col-md-5 col-lg-5 col-12">
          <TextField
            id="receiver_rut"
            label="Rut Persona Natural/Jurídica"
            name="receiver_rut"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            disabled={!other}
          />
        </div>
        <div className="col-md-12 col-lg-12 col-12">
          <TextField
            id="receiver_fullname"
            label="Nombre Completo"
            name="receiver_fullname"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            disabled={!other}
          />
        </div>
        <div className="col-md-8 col-12">
          <TextField
            id="email"
            label="Correo Electrónico"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            disabled={!other}
          />
        </div>
        <div className="col-md-6 col-12">
          <TextField
            id="phone"
            name="phone"
            label="Teléfono Fijo"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            disabled={!other}
          />
        </div>
        <div className="col-md-6 col-12">
          <TextField
            name="cellphone"
            id="cellphone"
            label="Teléfono Celular"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            disabled={!other}
          />
        </div>
    </>
  )
}

export default OtherForm
