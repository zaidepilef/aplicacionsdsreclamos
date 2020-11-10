import React, { useState } from "react";
import CardBox from "components/CardBox";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { CustomDialog } from "util/CustomDialog";
import { addTarea } from "api/Mantenedores/Tarea/tarea";
import { notificationsApi } from "util/Notifications";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import Buscador from '../../components/Buscador';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { useForm, Controller } from 'react-hook-form'; 
import { validationSchema } from './validations';
import { FormHelperText } from '@material-ui/core';

const AgregarTarea = props => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDialogOpen = () => setIsOpen(true);
  const handeDialogClose = () => setIsOpen(false);
  const [open, setOpen] = React.useState(false);

  const { control, handleSubmit, errors } = useForm({
    mode:'onBlur',
    validationSchema:validationSchema
  });

  const {
    procesos,
    token,
    loading,
    setLoading,
    setSearchInput,
    searchInput
  } = props;


  const agregarTarea = (data) => {
    addTarea(token, data)
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
                    title='Agregar Nueva Tarea'
                    submitForm={handleSubmit(agregarTarea)}
                >
                    <Controller
                        as={TextField}
                        control={control}
                        autoFocus
                        name="nombre"
                        label="Nombre"
                        variant="outlined"
                        margin="dense"
                        fullWidth
                        error={errors.nombre && true}
                    />
                    <FormHelperText error >{errors.nombre && errors.nombre.message}</FormHelperText>          

                    <Controller
                        as={TextField}
                        control={control} 
                        name="sla_dias"
                        label="SLA Días"
                        variant="outlined"
                        margin="dense"
                        fullWidth
                        error={errors.sla_dias && true}
                    />            
                    <FormHelperText error >{errors.sla_dias && errors.sla_dias.message}</FormHelperText>            

                    <FormControl variant="outlined" margin="normal" fullWidth value="">
                    <InputLabel>
                    Proceso
                    </InputLabel>
                    <Controller
                        as={
                        <Select 
                        open={open}
                        fullWidth
                        onClose={handleClose}
                        onOpen={handleOpen}
                        name="proceso"
                        label="Proceso"
                        error={errors.proceso && true}
                        >
                        {procesos.map((proceso, index) => (
                            <MenuItem value={proceso.id}>{proceso.nombre}</MenuItem>
                        ))}
                        </Select>}
                        name="proceso"
                        control={control}
                        />
                    </FormControl>
                    <FormHelperText error >{errors.proceso && errors.proceso.message}</FormHelperText>          
                </CustomDialog>
    </div>
  );
};

export default AgregarTarea;
