import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import {
  TextField,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import FormControl from "@material-ui/core/FormControl";
import DeleteIcon from "@material-ui/icons/Delete";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { parseDate } from "util/parseFunctions";
import { getTareasFilter } from "api/Tareas/tareas";
import { notificationsApi } from "util/Notifications";

const DataFilter = props => {
  const { setQuery, createParams, token, navbar_selected } = props;
  const dataDetault = {
    n_reclamo: "",
    rut: "",
    tipo_admisibilidad: navbar_selected,
    task_camunda: "",
  };

  const { register, handleSubmit, control, reset,} = useForm({
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
    const busqueda = `${requestParams}&tipo_admisibilidad=${navbar_selected}`;
    setQuery({ page: 1, busqueda });
  };

  //propiedades del modal tareas
  const [openT, setOpenT] = useState(false);
  const handleCloseT = () => setOpenT(false);
  const handleOpenT = () => setOpenT(true);

  const handleReset = () => {
    reset(dataDetault);
    setQuery({
      page: 1,
      busqueda: `tipo_admisibilidad=${navbar_selected}`
    });
  };

  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const getTareasProceso = async () => {
      const valor = navbar_selected;
      const data = await getTareasFilter(token, valor);
      if (!data.error) {
        setTareas(data.data.results);
      } else {
        notificationsApi('error',"Falla En carga de Tareas :( , Seleccione Proceso Nuevamente!");
      }
      
    };

    getTareasProceso();
  }, [navbar_selected]);

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
            <div className="col-md-4 col-lg-4">
                  <FormControl
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value=""
                    disabled={tareas.length === 0 ? true : false}
                  >
                    <InputLabel>Tareas</InputLabel>
                    <Controller
                      as={
                        <Select
                          id="task_camunda"
                          open={openT}
                          fullWidth
                          label="Tareas"
                          onClose={handleCloseT}
                          onOpen={handleOpenT}
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
