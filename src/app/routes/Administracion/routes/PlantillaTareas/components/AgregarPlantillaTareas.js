import React, { useState } from "react";
import CardBox from "components/CardBox";
import Button from "@material-ui/core/Button";
import { CustomDialog } from "util/CustomDialog";
import { addPlantillaTarea } from "api/Mantenedores/PlantillaTareas/plantillatareas";
import { notificationsApi } from "util/Notifications";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import Buscador from '../../components/Buscador';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useForm, Controller } from 'react-hook-form';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { validationSchema } from './validations';
import { FormHelperText } from '@material-ui/core';


const AgregarPlantillaTarea = props => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDialogOpen = () => setIsOpen(true);
  const handeDialogClose = () => setIsOpen(false);
  const [open, setOpen] = React.useState(false);
  const [openS, setOpenS] = React.useState(false);

  const {
    plantillas,
    tareas, 
    token,
    loading,
    setLoading,
    setSearchInput,
    searchInput
  } = props;

  const { control, handleSubmit, errors } = useForm({
    mode:'onBlur',
    validationSchema:validationSchema
  });


  const agregarPlantillaTarea = (data) => {
    addPlantillaTarea(token, data)
      .then(response => {
        notificationsApi("success", "Agregado Correctamente");
        setLoading(!loading);
      })
      .catch(err => {
        notificationsApi("error", err);
      });
    handeDialogClose();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCloseS = () => {
    setOpenS(false);
  };

  const handleOpenS = () => {
    setOpenS(true);
  };



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
          <Buscador
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
        </form>

      </CardBox>
      <CustomDialog
        isOpen={isOpen}
        handleClose={handeDialogClose}
        title="Agregar Nueva Plantilla Tarea"
        submitForm={handleSubmit(agregarPlantillaTarea)}
      >    
      <FormControl variant="outlined" margin="normal" fullWidth value="">
        <InputLabel >
          Plantilla
        </InputLabel>
        <Controller
          as={<Select 
          open={open}
          fullWidth
          onClose={handleClose}
          onOpen={handleOpen}
          name="plantilla"
          label="Plantilla"
          error={errors.plantilla && true}
        >
        {plantillas.map((plantilla, index) => (
            <MenuItem value={plantilla.id}>{plantilla.nombre}</MenuItem>
        ))}
        </Select>} 
          name="plantilla"
          control={control}
        > 
        </Controller> 
      </FormControl>
      <FormHelperText error >{errors.plantilla && errors.plantilla.message}</FormHelperText>          
        
      <FormControl variant="outlined" margin="normal" fullWidth value="">
        <InputLabel >
          Tarea
        </InputLabel>
        <Controller
          as={<Select 
          open={openS}
          fullWidth
          onClose={handleCloseS}
          onOpen={handleOpenS}
          name="tarea"
          label="Tarea"
          error={errors.tarea && true}
        >
        {tareas.map((tarea, index) => (
            <MenuItem value={tarea.id}>{tarea.nombre}</MenuItem>
        ))}
        </Select>} 
          name="tarea"
          control={control}
        > 
        </Controller>
      </FormControl>
      <FormHelperText error >{errors.tarea && errors.tarea.message}</FormHelperText>          
        
      </CustomDialog>
    </div>
  );
};

export default AgregarPlantillaTarea;
