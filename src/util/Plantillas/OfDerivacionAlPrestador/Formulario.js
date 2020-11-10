import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";


const Formulario = props => {
  const { firmante, formPdf, region, handleChange, classes, handleAdd, handleRemove } = props;

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

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
          id="materia_form"
          name="materia_form"
          label="Materia"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf && formPdf.materia_form}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          id="cotizante_full_rut"
          name="full_rut"
          label="Rut Afectado"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf.cotizante && formPdf.cotizante.full_rut}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          id="cotizante_nombres"
          name="nombres"
          label="Nombre Afectado"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf.cotizante && formPdf.cotizante.nombres}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          id="cotizante_apellido_paterno"
          name="apellido_paterno"
          label="Apellido Paterno Afectado"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf.cotizante && formPdf.cotizante.apellido_paterno}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          id="cotizante_apellido_materno"
          name="apellido_materno"
          label="Apellido Materno Afectado"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf.cotizante && formPdf.cotizante.apellido_materno}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          id="reclamante_nombres"
          name="nombres"
          label="Nombre Reclamante"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf.reclamante && formPdf.reclamante.nombres}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          id="reclamante_apellido_paterno"
          name="apellido_paterno"
          label="Apellido Reclamante"
          variant="outlined"
          margin="normal"
          defaultValue={formPdf.reclamante && formPdf.reclamante.apellido_paterno}
          fullWidth
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          id="reclamante_full_rut"
          name="full_rut"
          label="Rut Reclamante"
          variant="outlined"
          margin="normal"
          defaultValue={formPdf.reclamante && formPdf.reclamante.full_rut}
          fullWidth
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          id="n_reclamo"
          name="n_reclamo"
          label="N° Reclamo"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf && formPdf.n_reclamo}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          id="fecha_actual"
          name="fecha_actual"
          label="Fecha Reclamo Actual"
          variant="outlined"
          margin="normal"
          defaultValue={formPdf.fecha_desde}
          fullWidth
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          id="folio"
          name="folio"
          label="ORD. IP/N°"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={handleChange}
          defaultValue={formPdf && formPdf.folio}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          id="representante_legal"
          name="representante_legal"
          label="Representante Legal"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={handleChange}
          defaultValue={
            formPdf && formPdf.representante_legal
          }
        />
      </div>
      <div className="col-md-6 col-12">
        <FormControl variant="outlined" margin="normal" fullWidth value="">
          <InputLabel>Firmante</InputLabel>
          <Select
            open={openF}
            onClose={handleCloseF}
            onOpen={handleOpenF}
            label="Firmante"
            variant="outlined"
            name="firmante"
            id="firmante"
            onChange={handleChange}
            defaultValue={1}
          >
            {firmante.map((firm, i) => (
              <MenuItem value={firm.id} key={i}>
                {firm.nombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="col-md-6 col-12">
        <FormControl variant="outlined" margin="normal" fullWidth value="">
          <InputLabel>Región</InputLabel>
          <Select
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            id="region"
            label="Región"
            name="region"
            variant="outlined"
            onChange={handleChange}
            defaultValue={formPdf.region.id}
          >
            {region.map((regiones, index) => (
              <MenuItem value={regiones.id} key={index}>
                {regiones.nombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {formPdf.bodyState && formPdf.bodyState.map((parrafo, index) => (
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
              onChange={(e) => handleChange(e,index)}
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
