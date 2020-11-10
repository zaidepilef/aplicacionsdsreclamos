import React, {useState} from "react";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const Formulario = props => {
  const { formPdf, firmante, handleChange, handleAdd, handleRemove,classes } = props;
  const [openE, setOpenE] = useState(false);
  const handleCloseE = () => {
    setOpenE(false);
  };
  const handleOpenE = () => {
    setOpenE(true);
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
          onChange={handleChange}
          id="fecha_desde"
          name="fecha_desde"
          label="Fecha Reclamo"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf && formPdf.fecha_desde }
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          onChange={handleChange}
          id="reclamante_nombres"
          name="nombres"
          label="Nombre Reclamante"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf.reclamante && formPdf.reclamante.nombres}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          onChange={handleChange}
          id="reclamante_apellido"
          name="apellido_paterno"
          label="Apellido Reclamante"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf.reclamante && formPdf.reclamante.apellido_paterno}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          onChange={handleChange}
          id="reclamante_full_rut"
          name="full_rut"
          label="Rut Reclamante"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf.reclamante && formPdf.reclamante.full_rut}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          onChange={handleChange}
          id="cotizante_nombres"
          name="nombres"
          label="Nombre Cotizante"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf.cotizante && formPdf.cotizante.nombres}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          onChange={handleChange}
          id="cotizante_apellido_paterno"
          name="apellido_paterno"
          label="Apellido Cotizante"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf.cotizante && formPdf.cotizante.apellido_paterno}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          onChange={handleChange}
          id="cotizante_full_rut"
          name="full_rut"
          label="Rut Cotizante"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf.cotizante && formPdf.cotizante.full_rut}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          onChange={handleChange}
          id="prestador_nombre"
          name="nombre"
          label="Prestador"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf.prestador && formPdf.prestador.nombre}
        />
      </div>
      <div className="col-md-12 col-12">
        <FormControl variant="outlined" margin="normal" fullWidth value="">
          <InputLabel>Entidad</InputLabel>
          <Select
            open={openE}
            onClose={handleCloseE}
            onOpen={handleOpenE}
            id="tipo_prestador"
            label="Entidad"
            name="tipo_prestador"
            variant="outlined"
            onChange={handleChange}
            defaultValue={formPdf && formPdf.tipo_prestador}
          >
            <MenuItem value={0}>
              Publica
            </MenuItem>
            <MenuItem value={1}>
              Privada
            </MenuItem>
           
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
