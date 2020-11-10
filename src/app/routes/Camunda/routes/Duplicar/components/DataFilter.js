import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import {
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Typography
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import FormControl from "@material-ui/core/FormControl";
import DeleteIcon from "@material-ui/icons/Delete";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import { es } from "date-fns/locale";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { parseDate } from "util/parseFunctions";
import Switch from "@material-ui/core/Switch";

const DataFilter = props => {
  const { setQuery, navbar_selected, procesos, createParams, token } = props;
  const dataDetault = {
    n_reclamo: "",
    rut: ""
  };

  const { register, handleSubmit, control, reset, watch, getValues } = useForm({
    defaultValues: dataDetault
  });

  const generarBusqueda = (data, e) => {
    let new_fecha_problema = "";
    data.fecha_inicio_reclamo
      ? (new_fecha_problema = parseDate(data.fecha_inicio_reclamo))
      : (new_fecha_problema = undefined);
    data.fecha_inicio_reclamo = new_fecha_problema;
    e.preventDefault();
    const requestParams = createParams(data);
    const busqueda = `?finalizada=0&tipo_admisibilidad=${navbar_selected}&first_task=${true}&${requestParams}`;
    setQuery({ page: 1, busqueda });
  };
  //propiedades del modal procesos
  const [openP, setOpenP] = useState(false);
  const handleCloseP = () => setOpenP(false);
  const handleOpenP = () => setOpenP(true);

  //propiedades del modal tareas
  const [openT, setOpenT] = useState(false);
  const handleCloseT = () => setOpenT(false);
  const handleOpenT = () => setOpenT(true);

  const handleReset = () => {
    reset(dataDetault);
    setQuery({
      page: 1,
      busqueda: ""
    });
  };

  return (
    <form onSubmit={handleSubmit(generarBusqueda)} className="mb-4">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          Filtrar
        </AccordionSummary>
        <AccordionDetails>
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <Button
                variant="contained"
                type="submit"
                size="small"
                className="btn bg-indigo text-white"
              >
                <SearchIcon />
                <span>Buscar</span>
              </Button>
              <Button
                onClick={handleReset}
                variant="contained"
                size="small"
                className="btn bg-indigo text-white"
              >
                <DeleteIcon />
                <span>Limpiar</span>
              </Button>
            </div>
            
            <div className="w-100 mt-3"></div>
            {/* Aqui empiza lo definitivo */}
            <div className="col-md-4 col-lg-4">
              <FormControl
                variant="outlined"
                margin="normal"
                fullWidth
                value=""
              >
                <InputLabel>Procesos</InputLabel>
                <Controller
                  as={
                    <Select
                      id="tipo_admisibilidad"
                      open={openP}
                      fullWidth
                      label="Procesos"
                      onClose={handleCloseP}
                      onOpen={handleOpenP}
                    >
                      {procesos.map((proceso, i) => (
                        <MenuItem key={proceso.id} value={proceso.nombre}>
                          {proceso.nombre}
                        </MenuItem>
                      ))}
                    </Select>
                  }
                  name="tipo_admisibilidad"
                  defaultValue={undefined}
                  control={control}
                />
              </FormControl>
            </div>
            <div className="col-md-4 col-lg-4">
              <TextField
                id="cotizante"
                name="cotizante"
                label="Rut Reclamante"
                variant="outlined"
                margin="normal"
                fullWidth
                inputRef={register}
              />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </form>
  );
};

export default DataFilter;
