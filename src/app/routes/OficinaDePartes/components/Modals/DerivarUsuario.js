import React from "react";
import TextField from "@material-ui/core/TextField";

const AsignarUsuario = () => {
  return (
    <div className="row">
      <div className="col-md-4 col-12">
        <TextField
          name="nombres"
          label="Nombre"
          variant="outlined"
          margin="normal"
          fullWidth
        />
      </div>
      <div className="col-md-4 col-12">
        <TextField
          name="apellido_paterno"
          label="Apellido"
          variant="outlined"
          margin="normal"
          fullWidth
        />
      </div>
      <div className="col-md-4 col-12">
        <TextField
          id="outlined-error-helper-text"
          name=""
          label="Data"
          variant="outlined"
          margin="normal"
          fullWidth
        />
      </div>
    </div>
  );
};

export default AsignarUsuario;