import React, { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import AddIcon from "@material-ui/icons/Add";
import Select from "@material-ui/core/Select";
import RemoveIcon from "@material-ui/icons/Remove";


const Formulario = props => {
  const { handleChange, firmante, formPdf, handleAdd, handleRemove, classes } = props;
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
          onChange={handleChange}
          id="n_reclamo"
          name="reclamo"
          label="Reclamo N°"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf && formPdf.n_reclamo}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          onChange={handleChange}
          id="folio"
          name="folio"
          label="Orden IP/N°"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf && formPdf.folio}
        />
      </div>
      <div className="col-md-6 col-12">
        <TextField
          onChange={handleChange}
          id="fecha_representacion"
          name="fecha_representacion"
          label="Fecha Representacion"
          variant="outlined"
          margin="normal"
          fullWidth
          defaultValue={formPdf && formPdf.fecha_representacion}
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
