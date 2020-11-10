import React, { useState,Fragment } from "react";
import CardBox from "components/CardBox";
import Button from "@material-ui/core/Button";
import { CustomDialog } from "util/CustomDialog";
import { notificationsApi } from "util/Notifications";
import { addViaTramitacion} from 'api/Mantenedores/ViaTramitacion/viaTramitacion'
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import BuscadorViaTramitacion from './BuscadorViaTramitacion';
import { useForm, Controller } from 'react-hook-form';
import { FormHelperText } from '@material-ui/core';
import { validationViaTramitacionSchema } from './validations';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { InputLabel,TextField } from "@material-ui/core";
import FormControl from '@material-ui/core/FormControl' 

const AgregarViaTramitacion = (props) => {

  const [openS, setOpenS] = useState(false);
  const { handleSubmit, control, errors } = useForm({
    mode:'onBlur',
    validationSchema:validationViaTramitacionSchema
  });
  const {
      token,
      setSearchInput,
      searchInput,
      tareas,
      setRefresh
    } = props;
    const [isOpen, setIsOpen] = useState(false);
    //Funciones para abrir y cerrar el modal
    const handleDialogOpen = () => setIsOpen(true);
    const handeDialogClose = () => setIsOpen(false);
    // Funciones para abrir y cerrar el select
    const handleCloseS = () => setOpenS(false);
    const handleOpenS = () => setOpenS(true);


    const addViaTramitacionForm = (data) => {
      addViaTramitacion(token, data)
      .then(response => {
        notificationsApi("success", "Agregado Correctamente");
        setRefresh(r => !r);
      })
      .catch(err => {
        notificationsApi("error", err);
      });
    handeDialogClose();
    }

    return (  
        <div className="row">
      <CardBox styleName="col-lg-12">
        <form className="row">
          <div className="col align-self-center">
            <Button
              variant="contained"
              color="primary"
              className="jr-btn jr-btn-lg"
              onClick={handleDialogOpen}
            >
              <Icon
                path={mdiPlus}
                size={1}
              />
              Agregar
            </Button>
            
          </div>
            <BuscadorViaTramitacion
              searchInput={searchInput}
              setSearchInput={setSearchInput}
            />
        </form>
        
      </CardBox>
      <CustomDialog
        isOpen={isOpen}
        handleClose={handeDialogClose}
        title="Agregar Vía Tramitación"
        submitForm={handleSubmit(addViaTramitacionForm)}
      >
        <Fragment>
          <Controller
              as={TextField}
              name="tipo"
              id="via_tramitacion"
              label="Vía Tramitación"
              control={control}
              variant="outlined"
              defaultValue=""
              margin="dense"
              error={errors.tipo && true}
              fullWidth
            />
            <FormHelperText error id="via_tramitacion">{errors.tipo && errors.tipo.message}</FormHelperText>
          <FormControl variant="outlined" margin="normal" fullWidth value="">
            <InputLabel >
              Tareas
            </InputLabel>
            <Controller 
              as={<Select
                id="tarea"
                open={openS}
                fullWidth
                label="Tareas"
                
                error={errors.tarea && true}
                onClose={handleCloseS} 
                onOpen={handleOpenS}
              >
                {tareas.map((tarea,i) => (
                  <MenuItem key={tarea.id} value={tarea.id}>{tarea.nombre}</MenuItem>
                ))}
              </Select>}
              name="tarea"
              defaultValue={undefined}
              control={control}
            />
            
          </FormControl>
          <FormHelperText error id="tarea">{errors.tarea && errors.tarea.message}</FormHelperText>
        </Fragment>
      </CustomDialog>
    </div>
    );
}
export default AgregarViaTramitacion;