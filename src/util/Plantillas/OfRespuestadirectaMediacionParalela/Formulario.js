import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const Formulario = props => {
  const {
    formPdf,
    firmante,
    region,
    comunas,
    provincia,
    handleChange,
    classes,
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
          label="N° de Solicitud"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf.n_reclamo && formPdf.n_reclamo}
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
          defaultValue={formPdf.folio && formPdf.folio}
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
          defaultValue={formPdf.fecha_desde}
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
          id="cotizante_direccion_nombre_calle"
          name="direccion_nombre_calle"
          label="Nombre de Calle"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={
            formPdf.cotizante && formPdf.cotizante.direccion_nombre_calle
          }
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          id="cotizante_direccion_numero_calle"
          name="direccion_numero_calle"
          label="Número de Calle"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={
            formPdf.cotizante && formPdf.cotizante.direccion_numero_calle
          }
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          id="cotizante_direccion_departamento"
          name="direccion_departamento"
          label="Departamento"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={
            formPdf.cotizante && formPdf.cotizante.direccion_departamento
          }
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
            name="region"
            id="provincia"
            label="Región"
            variant="outlined"
            onChange={handleChange}
            defaultValue={formPdf.region.id}
          >
            {region.map(region => (
              <MenuItem key={region.id} value={region.id}>
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
            name="provincia"
            id="provincia"
            label="Provincia"
            variant="outlined"
            onChange={handleChange}
            defaultValue={formPdf.provincia.id}
          >
            {provincia.map(provincia => (
              <MenuItem key={provincia.id} value={provincia.id}>
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
            name="comuna"
            id="comunas"
            label="Comuna"
            variant="outlined"
            onChange={handleChange}
            disabled={comunas.length > 0 ? false : true}
            defaultValue={formPdf.comuna.id}
          >
            {comunas.map(comuna => (
              <MenuItem key={comuna.id} value={comuna.id}>
                {comuna.nombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="col-md-6 col-12">
        <TextField
          id="paciente_nombres"
          name="nombres"
          label="Nombres de Paciente"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf.paciente && formPdf.paciente.nombres}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          id="paciente_apellido_paterno"
          name="apellido_paterno"
          label="Apellido Paterno de Paciente"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf.paciente && formPdf.paciente.apellido_paterno}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          id="paciente_apellido_materno"
          name="apellido_materno"
          label="Apellido Materno de Paciente"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf.paciente && formPdf.paciente.apellido_materno}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          id="prestador_nombre"
          name="nombre"
          label="Prestador"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf.prestador && formPdf.prestador.nombre}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          id="n_presentacion"
          name="n_presentacion"
          label="N° de Presentación"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf.n_presentacion && formPdf.n_presentacion}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          id="fecha_presentacion"
          name="fecha_presentacion"
          label="Fecha de Presentación"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={
            formPdf.fecha_presentacion && formPdf.fecha_presentacion
          }
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          id="n_formulario"
          name="n_formulario"
          label="N° de Formulario"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf.n_formulario && formPdf.n_formulario}
          onChange={handleChange}
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
