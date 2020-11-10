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
    region,
    comunas,
    provincia,
    firmante,
    formPdf,
    handleChange,
    handleAdd,
    handleRemove,
    classes
  } = props;

  console.log("pprops", props);

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
          id="cotizante_direccion_nombre_calle"
          name="direccion_nombre_calle"
          label="Dirección"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={
            formPdf.cotizante && formPdf.cotizante.direccion_nombre_calle
          }
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          onChange={handleChange}
          id="cotizante_direccion_numero_calle"
          name="direccion_numero_calle"
          label="Número"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={
            (formPdf.cotizante && formPdf.cotizante.direccion_numero_calle) ||
            ""
          }
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          onChange={handleChange}
          id="folio"
          name="folio"
          label="ORD. IP/N°"
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
          <InputLabel>Región</InputLabel>
          <Select
            onChange={handleChange}
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            defaultValue={formPdf && formPdf.region.id}
            name="region"
            id="region"
            label="Región"
            variant="outlined"
          >
            {region.map((regiones, index) => (
              <MenuItem value={regiones.id} key={index}>
                {regiones.nombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="col-md-6 col-12">
        <FormControl variant="outlined" margin="normal" fullWidth value="">
          <InputLabel>Provincias</InputLabel>
          <Select
            onChange={handleChange}
            open={openP}
            onClose={handleCloseP}
            onOpen={handleOpenP}
            label="Provincias"
            variant="outlined"
            defaultValue={formPdf && formPdf.provincia.id}
            name="provincia"
          >
            {provincia.map((provincias, i) => (
              <MenuItem value={provincias.id} key={i}>
                {" "}
                {provincias.nombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="col-md-6 col-12">
        <FormControl variant="outlined" margin="normal" fullWidth value="">
          <InputLabel>Comunas</InputLabel>
          <Select
            onChange={handleChange}
            open={openC}
            onClose={handleCloseC}
            onOpen={handleOpenC}
            label="Comunas"
            variant="outlined"
            defaultValue={formPdf && formPdf.comuna.id}
            name="comuna"
            disabled={comunas.length > 0 ? false : true}
          >
            {comunas.map((comuna, i) => (
              <MenuItem value={comuna.id} key={i}>
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
            defaultValue={1 || ""}
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
