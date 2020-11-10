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

const TransferTaskIP = ({ procesos, selected, handeDialogClose }) => {
  const { handleSubmit, errors, control, watch, getValues } = useForm({
    mode: "onBlur",
    // validationSchema,
    defaultValues: {
      proceso: "Admisibilidad IP",
      id_tarea_destino: "",
      notificacionElectronica: false,
      derivacionAseguradora: false,
      reclamanteRespondio: false,
      falloNotificacion: false,
      encargadoVisa: false,
      intendenteFirma: false,
      notificoResolucion: false,
      reclamanteAportaAntecedentes: false
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

  const transferTaskApi = async(data) => {

    // TODO: se selecciona el primer id de las instancias hasta que se modifique el endpoint
    // TODO: para recibir un array de id xd
    const datos = {...data, id_instancia:selected[0], proceso: 'AdmisibilidadIP', clasificacion:'Faltan Antecedentes'};
    const transfer = await tranferInstance(datos); 
    if(transfer.data === null){
      notificationsApi('error', 'Fa00000llo en Transferir Tareas');
    }
    else {
      notificationsApi('success', transfer.data.observacion.descripcion);
      handeDialogClose();
    }

  }


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
                  as={<Switch name="notificacionElectronica" color="primary" />}
                  name="notificacionElectronica"
                  control={control}
                />
              }
              label="Notificacion Electronica"
            />
            <FormControlLabel
              control={
                <Controller
                  as={<Switch name="derivacionAseguradora" color="primary" />}
                  name="derivacionAseguradora"
                  control={control}
                />
              }
              label="Derivacion Aseguradora"
            />

            <FormControlLabel
              control={
                <Controller
                  as={<Switch name="reclamanteRespondio" color="primary" />}
                  name="reclamanteRespondio"
                  control={control}
                />
              }
              label="Reclamante Respondio"
            />

            <FormControlLabel
              control={
                <Controller
                  as={<Switch name="falloNotificacion" color="primary" />}
                  name="falloNotificacion"
                  control={control}
                />
              }
              label="Fallo Notificacion"
            />

            <FormControlLabel
              control={
                <Controller
                  as={<Switch name="encargadoVisa" color="primary" />}
                  name="encargadoVisa"
                  control={control}
                />
              }
              label="Encargado Visa"
            />

            <FormControlLabel
              control={
                <Controller
                  as={<Switch name="intendenteFirma" color="primary" />}
                  name="intendenteFirma"
                  control={control}
                />
              }
              label="Intendente Firma"
            />

            <FormControlLabel
              control={
                <Controller
                  as={<Switch name="notificoResolucion" color="primary" />}
                  name="notificoResolucion"
                  control={control}
                />
              }
              label="Notifico Resolucion"
            />
            <FormControlLabel
              control={
                <Controller
                  as={
                    <Switch
                      name="reclamanteAportaAntecedentes"
                      color="primary"
                    />
                  }
                  name="reclamanteAportaAntecedentes"
                  control={control}
                />
              }
              label="Reclamante Aporta Antecendetes"
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

export default TransferTaskIP;
