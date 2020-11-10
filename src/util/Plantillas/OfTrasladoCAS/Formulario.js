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
    region,
    comunas,
    provincia,
    formPdf,
    firmante,
    classes,
    handleChange,
    handleAdd,
    handleRemove
  } = props;

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const [openC, setOpenC] = useState(false);
  const handleCloseC = () => {
    setOpenC(false);
  };
  const handleOpenC = () => {
    setOpenC(true);
  };

  const [openP, setOpenP] = useState(false);
  const handleCloseP = () => {
    setOpenP(false);
  };
  const handleOpenP = () => {
    setOpenP(true);
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
          id="n_reclamo"
          name="n_reclamo"
          label="Reclamo"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf && formPdf.n_reclamo}
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
          defaultValue={formPdf && formPdf.folio}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
        id="fecha_desde"
          name="fecha_desde"
          label="Fecha"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf && formPdf.fecha_desde}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
        id="cotizante_full_rut"
          name="full_rut"
          label="Rut"
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
          label="Nombres"
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
          label="Apellido Paterno"
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
          label="Apellido Materno"
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
          label="Nombres del Reclamante"
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
          label="Apellido Paterno del Reclamante"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf.reclamante && formPdf.reclamante.apellido_paterno}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          id="reclamante_apellido_materno"
          name="apellido_materno"
          label="Apellido Materno del Reclamante"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf.reclamante && formPdf.reclamante.apellido_materno}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          id="reclamante_full_rut"
          name="full_rut"
          label="Rut del Reclamante"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf.reclamante && formPdf.reclamante.full_rut}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          id="prestador_nombre"
          name="nombre"
          label="Nombre de Prestador"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf.prestador && formPdf.prestador.nombre}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          id="prestador_direccion"
          name="direcion"
          label="Direccion de Prestador"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf.prestador && formPdf.prestador.direccion}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 col-12">
        <FormControl variant="outlined" margin="normal" fullWidth value="">
          <InputLabel>Región</InputLabel>
          <Select
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            name="nombre_region"
            label="Región"
            variant="outlined"
            onChange={handleChange}
            defaultValue={
              formPdf.region && formPdf.region.nombre
            }
          >
            {region.map((region, index) => (
              <MenuItem key={region.id} value={region.nombre}>
                {region.nombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="col-md-6 col-12">
        <FormControl variant="outlined" margin="normal" fullWidth value="">
          <InputLabel>Provincia</InputLabel>
          <Select
            open={openP}
            onClose={handleCloseP}
            onOpen={handleOpenP}
            name="nombre_provincia"
            label="Provincia"
            variant="outlined"
            onChange={handleChange}
            defaultValue={
              formPdf.provincia &&
              formPdf.provincia.nombre
            }
          >
            {provincia.map((provincia, index) => (
              <MenuItem key={provincia.id} value={provincia.nombre}>
                {provincia.nombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="col-md-6 col-12">
        <FormControl variant="outlined" margin="normal" fullWidth value="">
          <InputLabel>Comuna</InputLabel>
          <Select
            open={openC}
            onClose={handleCloseC}
            onOpen={handleOpenC}
            name="nombre_comuna"
            label="Comuna"
            variant="outlined"
            onChange={handleChange}
            defaultValue={
              formPdf.comuna && formPdf.comuna.nombre
            }
          >
            {comunas.map((comuna, index) => (
              <MenuItem key={comuna.id} value={comuna.nombre}>
                {comuna.nombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
