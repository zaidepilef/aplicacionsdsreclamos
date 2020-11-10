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
import { getTareasFilter } from "api/Tareas/tareas";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
import { es } from "date-fns/locale";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { parseDate } from "util/parseFunctions";
import Switch from "@material-ui/core/Switch";

const DataFilter = props => {
  const { setQuery, procesos, createParams, token } = props;
  const defaultURL = `action=task&finalizada=0&tipo_admisibilidad=other`;

  const dataDetault = {
    n_reclamo: "",
    rut: "",
    tipo_admisibilidad: "",
    task_camunda: "",
    materia: "",
    sub_materia: "",
    nombre_reclamante: "",
    lotus: false
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
    const busqueda = `${defaultURL}&${requestParams}`;
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
      busqueda: defaultURL
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
          <div clasName="col-md-12 col-lg-12">
            <div className="col-md-6 col-lg-6 d-flex align-items-center mb-3">
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
              <FormControl className="d-flex flex-row">
                <Typography className="align-self-center">
                  Búscar en Lotus
                </Typography>
                <Controller
                  as={<Switch color="primary" />}
                  type="checkbox"
                  name="lotus"
                  control={control}
                />
              </FormControl>
            </div>
            {/* Aqui empiza lo definitivo */}
            <div className="col-md-12 col-lg-12">
              <div className="row">
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
                <div className="col-md-4 col-lg-4">
                  <TextField
                    id="n_reclamo"
                    name="n_reclamos"
                    label="N° Reclamo"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    inputRef={register}
                  />
                </div>
                <div className="col-md- col-lg-4">
                  <TextField
                    id="nombre_reclamante"
                    name="nombre_reclamante"
                    label="Nombre Reclamante"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    inputRef={register}
                  />
                </div>
                <div className="col-md-4 col-lg-4">
                  <TextField
                    id="materia"
                    name="materia"
                    label="Materia"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    inputRef={register}
                  />
                </div>
                <div className="col-md-4 col-lg-4">
                  <TextField
                    id="sub_materia"
                    name="sub_materia"
                    label="Sub-Materia"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    inputRef={register}
                  />
                </div>
                <div className="col-md-4 col-lg-4">
                  <MuiPickersUtilsProvider utils={DateFnsUtils} locale={es}>
                    <Controller
                      as={
                        <KeyboardDatePicker
                          clearable
                          cancelLabel={"Cancelar"}
                          clearLabel={"Limpiar"}
                          invalidDateMessage={"Fecha Inválida"}
                          format="dd/MM/yyyy"
                          inputVariant="outlined"
                          label="Fecha Desde"
                          margin="normal"
                          KeyboardButtonProps={{
                            "aria-label": "change date"
                          }}
                          fullWidth
                        />
                      }
                      name="fecha_inicio_reclamo"
                      control={control}
                    />
                  </MuiPickersUtilsProvider>
                </div>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </form>
  );
};

export default DataFilter;
