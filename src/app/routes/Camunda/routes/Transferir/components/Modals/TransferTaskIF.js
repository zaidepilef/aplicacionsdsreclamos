import React, { useState, useEffect } from "react";
import { Button, InputLabel, Select, MenuItem } from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import LinearProgress from "@material-ui/core/LinearProgress";
import * as yup from "yup";
import { getTareasFilter } from "api/Tareas/tareas";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";
import { notificationsApi } from "util/Notifications";
import { tranferInstance } from "api/Instancias/camunda";

// const validationSchema = yup.object().shape({
//   username: yup.string().required("Ingresa un nombre de usuario")
// });

const TransferTaskIF = ({ procesos, selected, handeDialogClose }) => {
  const { handleSubmit, errors, control, watch, getValues } = useForm({
    mode: "onBlur",
    // validationSchema,
    defaultValues: {
      proceso: "Admisibilidad IF",
      id_tarea_destino: "",
      notificacionElectronica: false,
      intendenciaCompetente: false,
      requiereAntecedentes: false,
      reclamanteRespondio: false,
      derivacionAseguradora: false,
      falloNotificacion: false,
      ingresaReclamoSistemaReclamos: false,
      reintentarNotificacion: false,
      aseguradoraRespondio: false
    }
  });
  //propiedades del modal tareas
  const [openT, setOpenT] = useState(false);
  const handleCloseT = () => setOpenT(false);
  const handleOpenT = () => setOpenT(true);
  // propiedades modal procesos
  const [openS, setOpenS] = useState(false);
  const handleCloseS = () => setOpenS(false);
  const handleOpenS = () => setOpenS(true);

  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const getTareasProceso = async () => {
      const valor = getValues("proceso");
      if (valor.length > 0) {
        setTareas([]);
        const token = localStorage.getItem("access");
        const data = await getTareasFilter(token, valor);
        if (!data.error) {
          setTareas(data.data.results);
        } else {
          alert("Falla En carga de Tareas :( , Seleccione Proceso Nuevamente!");
        }
      }
    };
    getTareasProceso();
  }, [watch("proceso")]);

  const transferTaskApi = async data => {
    // TODO: se selecciona el primer id de las instancias hasta que se modifique el endpoint
    // TODO: para recibir un array de id xd
    const datos = {
      ...data,
      id_instancia: selected[0],
      proceso: "AdmisibilidadIF"
    };
    const transfer = await tranferInstance(datos);
    if (transfer.data === null) {
      notificationsApi("error", "Fallo en Transferir Tareas");
    } else {
      notificationsApi("success", transfer.data.observacion.descripcion);
      handeDialogClose();
    }
  };

  return (
    <form onSubmit={handleSubmit(transferTaskApi)} className="row">
      <div className="col-md-12 col-12">
        <FormControl variant="outlined" margin="normal" fullWidth value="">
          <InputLabel>Proceso</InputLabel>
          <Controller
            as={
              <Select
                id="proceso"
                open={openS}
                fullWidth
                label="Proceso"
                error={errors.proceso && true}
                onClose={handleCloseS}
                onOpen={handleOpenS}
                disabled
              >
                {procesos.map(pro => (
                  <MenuItem key={pro.id} value={pro.nombre}>
                    {pro.nombre}
                  </MenuItem>
                ))}
              </Select>
            }
            name="proceso"
            control={control}
          />
        </FormControl>
        <FormHelperText error id="proceso">
          {errors.proceso && errors.proceso.message}
        </FormHelperText>
      </div>
      <div className="col-md-12 col-12">
        <FormControl
          variant="outlined"
          margin="normal"
          fullWidth
          value=""
          disabled={tareas.length === 0 ? true : false}
        >
          <InputLabel>Tarea Destino</InputLabel>
          <Controller
            as={
              <Select
                id="id_tarea_destino"
                open={openT}
                fullWidth
                label="Tareas"
                onClose={handleCloseT}
                onOpen={handleOpenT}
              >
                {tareas.map((tarea, i) => (
                  <MenuItem key={tarea.id} value={tarea.activity_id}>
                    {tarea.nombre_camunda}
                  </MenuItem>
                ))}
              </Select>
            }
            name="id_tarea_destino"
            defaultValue={undefined}
            control={control}
          />
        </FormControl>
      </div>
      <div className="col-md-12 col-lg-12">
        <FormControl component="fieldset" className="mt-4">
          <FormLabel component="legend">Configurar Variables</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Controller
                  as={<Switch name="intendenciaCompetente" color="primary" />}
                  name="intendenciaCompetente"
                  control={control}
                />
              }
              label="Intendente Competente"
            />

            <FormControlLabel
              control={
                <Controller
                  as={<Switch name="reintentarNotificacion" color="primary" />}
                  name="reintentarNotificacion"
                  control={control}
                />
              }
              label="Reintenta Notificacion"
            />

            <FormControlLabel
              control={
                <Controller
                  as={<Switch name="notificacionElectronica" color="primary" />}
                  name="notificacionElectronica"
                  control={control}
                />
              }
              label="Notificación Electrónica"
            />

            <FormControlLabel
              control={
                <Controller
                  as={<Switch name="requiereAntecedentes" color="primary" />}
                  name="requiereAntecedentes"
                  control={control}
                />
              }
              label="Requiere Antecendetes"
            />

            <FormControlLabel
              control={
                <Controller
                  as={<Switch name="reclamanteRespondio" color="primary" />}
                  name="reclamanteRespondio"
                  control={control}
                />
              }
              label="Reclamante Respondió"
            />

            <FormControlLabel
              control={
                <Controller
                  as={<Switch name="derivacionAseguradora" color="primary" />}
                  name="derivacionAseguradora"
                  control={control}
                />
              }
              label="Derivación Aseguradora"
            />

            <FormControlLabel
              control={
                <Controller
                  as={<Switch name="falloNotificacion" color="primary" />}
                  name="falloNotificacion"
                  control={control}
                />
              }
              label="Fallo Notificación"
            />
            <FormControlLabel
              control={
                <Controller
                  as={<Switch name="aseguradoraRespondio" color="primary" />}
                  name="aseguradoraRespondio"
                  control={control}
                />
              }
              label="Aseguradora Respondio"
            />
            <FormControlLabel
              control={
                <Controller
                  as={
                    <Switch
                      name="ingresaReclamoSistemaReclamos"
                      color="primary"
                    />
                  }
                  name="ingresaReclamoSistemaReclamos"
                  control={control}
                />
              }
              label="Ingresa Reclamo Sistema Reclamos"
            />
          </FormGroup>
          {/* <FormHelperText>Be careful</FormHelperText> */}
        </FormControl>
      </div>

      <div className="col-md-12 col-12 d-flex flex-row-reverse">
        <Button
          className="jr-btn jr-btn-lg bg-indigo lighten-1 text-white"
          color="primary"
          type="submit"
        >
          Aceptar
        </Button>
      </div>
    </form>
  );
};

export default TransferTaskIF;
