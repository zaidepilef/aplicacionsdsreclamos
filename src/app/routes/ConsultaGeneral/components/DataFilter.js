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
import { notificationsApi } from "util/Notifications";
import Switch from "@material-ui/core/Switch";
import { getAllTipoReclamoSearch } from "api/Mantenedores/TipoReclamo/tipoReclamo";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  }
}));

const DataFilter = props => {
  const { setQuery, procesos, createParams, token, region, tipoIngreso } = props;
  const classes = useStyles();
  const dataDetault = {
    n_reclamo: "",
    rut: "",
    tipo_admisibilidad: "",
    task_camunda: [],
    materia: "",
    sub_materia: "",
    nombre_reclamante: "",
    region_prestador: "",
    tipo_reclamo: [],
    is_admisible: false,
    via_ingreso:""
  };

  const { register, handleSubmit, control, reset, watch, getValues,  setValue } = useForm({
    defaultValues: dataDetault
  });

  const [tareas, setTareas] = useState([]);
  const [tipoReclamo, setTipoReclamo] = useState([]);
  useEffect(() => {
    const getTareasProceso = async () => {
      const valor = getValues("tipo_admisibilidad");
      if (valor.length > 0) {
        setTareas([]);
        const data = await getTareasFilter(token, valor);
        if (!data.error) {
          setTareas(data.data.results);
        } else {
          notificationsApi(
            "error",
            "Falla En carga de Tarea, Seleccione Proceso Nuevamente!"
          );
        }
      }
    };

    const tipoReclamoProceso = async () => {
      const valor = getValues("tipo_admisibilidad");
      if (valor.length > 0) {
        setTipoReclamo([]);
        const data = await getAllTipoReclamoSearch(token, valor);
        console.log(data.data.results);
        if (!data.error) {
          setTipoReclamo(data.data.results);
        } else {
          notificationsApi(
            "error",
            "Falla En carga de Tipo Reclamo, Seleccione Proceso Nuevamente!"
          );
        }
      }
    };
    tipoReclamoProceso();
    getTareasProceso();
  }, [watch("tipo_admisibilidad")]);

  const generarBusqueda = (data, e) => {
    let new_fecha_problema = "";
    data.fecha_inicio_reclamo
      ? (new_fecha_problema = parseDate(data.fecha_inicio_reclamo))
      : (new_fecha_problema = undefined);
    data.fecha_inicio_reclamo = new_fecha_problema;
    e.preventDefault();
    const requestParams = createParams(data);
    const busqueda = `${requestParams}`;
    setQuery({ page: 1, busqueda });
  };
  //propiedades del select procesos
  const [openP, setOpenP] = useState(false);
  const handleCloseP = () => setOpenP(false);
  const handleOpenP = () => setOpenP(true);

  //propiedades del select tareas
  const [openT, setOpenT] = useState(false);
  const handleCloseT = () => setOpenT(false);
  const handleOpenT = () => setOpenT(true);

  //propiedades del select region
  const [openR, setOpenR] = useState(false);
  const handleCloseR = () => setOpenR(false);
  const handleOpenR = () => setOpenR(true);

   //propiedades del select Tipo ingreso
   const [openTI, setOpenTI] = useState(false);
   const handleCloseTI = () => setOpenTI(false);
   const handleOpenTI = () => setOpenTI(true);

  // propiedades tipo reclamo select
  const [tipoReclamoSelected, setTipoReclamoSelected]  = useState([]);

  //propiedades tarea  select

  const [tareaSelected, setTareaSelected ] = useState([]);
  
  const handleReset = () => {
    reset(dataDetault);
    setQuery({
      page: 1,
      busqueda: "action=general"
    });
    setTareas([]);
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
                  Reclamo Admisible
                </Typography>
                <Controller
                  render={(props) => (
                    <Switch
                      onChange={(e) => props.onChange(e.target.checked)}
                      checked={props.value}
                      color="primary"
                    />
                  )}
                  name="is_admisible"
                  control={control}
                />
              </FormControl>
            </div>
            {/* Aqui empiza lo definitivo */}
            <div className="col-md-12 col-lg-12">
              <div className="row">
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
                  <FormControl
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value=""
                    disabled={tareas.length === 0 ? true : false}
                    className={classes.formControl}
                  >
                    <InputLabel>Tareas</InputLabel>
                    <Controller
                      as={
                        <Select
                          id="task_camunda"
                          style={{'overflow':'hidden'}}
                          open={openT}
                          fullWidth
                          multiple
                          label="Tareas"
                          onClose={handleCloseT}
                          onOpen={handleOpenT}
                          value={tareaSelected}
                          onChange={ (e) => {
                            setTareaSelected(e.target.value);
                            setValue("tarea", e.target.value);
                          }}
                        >
                          {tareas.map((tarea, i) => (
                            <MenuItem
                              key={tarea.id}
                              value={tarea.nombre_camunda}
                            >
                              {tarea.nombre_camunda}
                            </MenuItem>
                          ))}
                        </Select>
                      }
                      name="task_camunda"
                      defaultValue={undefined}
                      control={control}
                    />
                  </FormControl>
                </div>
                <div className="col-md-4 col-lg-4">
                  <FormControl
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    disabled={tipoReclamo.length === 0 ? true : false}
                  >
                    <InputLabel id="tipo_reclamo">Tipo Reclamo</InputLabel>
                    <Controller
                      as={
                        <Select
                          labelId="tipo_reclamo"
                          id="tipo_reclamo"
                          multiple
                          fullWidth
                          variant="outlined"
                          value={tipoReclamoSelected}
                          onChange={ (e) => {
                            setTipoReclamoSelected(e.target.value);
                            setValue("tipo_reclamo", e.target.value);
                          }}
                        >
                          {tipoReclamo.map(recl => (
                            <MenuItem key={recl.id} value={recl.tipo}>
                              {recl.tipo}
                            </MenuItem>
                          ))}
                        </Select>
                      }
                      name="tipo_reclamo"
                      defaultValue={[]}
                      control={control}
                      multiple
                    />
                  </FormControl>
                </div>
                <div className="col-md-4 col-lg-4">
                  <FormControl variant="outlined" margin="normal" fullWidth>
                    <InputLabel>Región</InputLabel>
                    <Controller
                      as={
                        <Select
                          id="region_prestador"
                          open={openR}
                          fullWidth
                          label="Region"
                          onClose={handleCloseR}
                          onOpen={handleOpenR}
                        >
                          {region.map((reg, i) => (
                            <MenuItem key={reg.id} value={reg.nombre}>
                              {reg.nombre}
                            </MenuItem>
                          ))}
                        </Select>
                      }
                      name="region_prestador"
                      defaultValue={undefined}
                      control={control}
                    />
                  </FormControl>
                </div>
                <div className="col-md-4 col-lg-4">
                  <FormControl
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value=""
                  >
                    <InputLabel>Tipo de Ingreso</InputLabel>
                    <Controller
                      as={
                        <Select
                          id="via_ingreso"
                          open={openTI}
                          fullWidth
                          label="Tipo de Ingreso"
                          onClose={handleCloseTI}
                          onOpen={handleOpenTI}
                        >
                          {tipoIngreso.map((ingreso, i) => (
                            <MenuItem
                              key={ingreso.id}
                              value={ingreso.nombre}
                            >
                              {ingreso.nombre}
                            </MenuItem>
                          ))}
                        </Select>
                      }
                      name="via_ingreso"
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
                          label="Fecha Inicio del Reclamo"
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
                          label="Fecha Fin del Reclamo"
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
                          label="Fecha Termino Reclamo"
                          margin="normal"
                          KeyboardButtonProps={{
                            "aria-label": "change date"
                          }}
                          fullWidth
                        />
                      }
                      name="fecha_fin_reclamo"
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
