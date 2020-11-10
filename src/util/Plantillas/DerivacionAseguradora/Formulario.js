import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const Formulario = props => {
  const {
    firmante,
    formPdf,
    handleChange,
    handleAdd,
    handleRemove,
    classes
  } = props;

  const [openF, setOpenF] = useState(false);
  const handleCloseF = () => {
    setOpenF(false);
  };
  const handleOpenF = () => {
    setOpenF(true);
  };

  return (
    <div className="row">
      <div className="col-md-6 col-12">
        <TextField
          id="cotizante_nombres"
          name="nombres"
          label="Nombre"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf.cotizante && formPdf.cotizante.nombres}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          onChange={handleChange}
          id="cotizante_apellido_paterno"
          name="apellido_paterno"
          label="Apellido"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf.cotizante && formPdf.cotizante.apellido_paterno}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          onChange={handleChange}
          id="aseguradora_nombre_isapre"
          name="nombre_isapre"
          label="Aseguradora"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf.aseguradora && formPdf.aseguradora.nombre_isapre}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          onChange={handleChange}
          id="folio"
          name="folio"
          label="ORD. IF/N°"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf && formPdf.folio}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          onChange={handleChange}
          id="n_reclamo"
          name="n_reclamo"
          label="N° Reclamo"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf && formPdf.n_reclamo}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          onChange={handleChange}
          id="fecha_desde"
          name="fecha_desde"
          label="Fecha"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf && formPdf.fecha_desde}
        />
      </div>

      <div className="col-md-6 col-12">
        <FormControl variant="outlined" margin="normal" fullWidth value="">
          <InputLabel>Firmante</InputLabel>
          <Select
            open={openF}
            onChange={handleChange}
            onClose={handleCloseF}
            onOpen={handleOpenF}
            label="Firmante"
            variant="outlined"
            id="firmante"
            defaultValue={1 || ""}
            name="firmante"
          >
            {firmante.map((firm, i) => (
              <MenuItem value={firm.id} key={i}>
                {firm.nombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {formPdf.bodyState &&
        formPdf.bodyState.map((parrafo, index) => (
          <div className="col-md-12 col-12" key={index}>
            <div className={classes.root} noValidate autoComplete="off">
              <TextField
                label={`Parrafo ${index + 1}`}
                name={parrafo}
                multiline
                rows="6"
                variant="outlined"
                id="textfield"
                value={parrafo}
                onChange={e => handleChange(e, index)}
              />
            </div>
            <div className="d-flex flex-row">
              <RemoveIcon onClick={() => handleRemove(index)} />
            </div>
          </div>
        ))}
      <div className="col-md-12 col-12 d-flex flex-row-reverse">
        <AddIcon onClick={handleAdd} />
      </div>
    </div>
  );
};

export default Formulario;
