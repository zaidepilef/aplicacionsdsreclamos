import React, { useState } from "react";
import CardBox from "components/CardBox";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { CustomDialog } from "util/CustomDialog";
import { addPlantilla } from "api/Mantenedores/Plantillas/plantillas";
import { notificationsApi } from "util/Notifications";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import Buscador from '../../components/Buscador';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useForm, Controller } from 'react-hook-form';
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import { validationSchema } from './validations';
import { FormHelperText } from '@material-ui/core';

const AgregarPlantilla = props => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDialogOpen = () => setIsOpen(true);
  const handeDialogClose = () => setIsOpen(false);
  const [open, setOpen] = useState(false);

  const {
    estados,
    token,
    setLoading,
    setSearchInput,
    searchInput
  } = props;

  const { control, handleSubmit, errors } = useForm({
    mode:'onBlur',
    validationSchema:validationSchema
  });
 

  const onSubmit = (data) => {
    setLoading(true)
    addPlantilla(token, data)
      .then(response => {
        notificationsApi("success", "Agregado Correctamente");
        setLoading(false);
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
        title="Agregar Nueva Plantilla"
        submitForm={handleSubmit(onSubmit)}
      >
        <>        
      <Controller
          as={TextField}
          name="nombre"
          label="Nombre"
          variant="outlined"
          margin="dense"
          fullWidth
          control={control}
          error={errors.nombre && true}
        />
      <FormHelperText error >{errors.nombre && errors.nombre.message}</FormHelperText>          
      <Controller
          as={TextField}
          name="filename"
          label="Nombre Archivo"
          variant="outlined"
          margin="dense"
          fullWidth
          control={control}
          error={errors.filename && true}
        />
      <FormHelperText error>{errors.filename && errors.filename.message}</FormHelperText>                      
      <Controller
          as={TextField}
          name="version"
          label="Versión"
          variant="outlined"
          margin="dense"
          fullWidth
          control={control}
          error={errors.version && true}
        />
      <FormHelperText error  >{errors.version && errors.version.message}</FormHelperText>
                   
      <Controller
          as={TextField}
          name="descripcion"
          label="Descripción"
          variant="outlined"
          margin="dense"
          fullWidth
          control={control}
          error={errors.descripcion && true}
        /> 
      <FormHelperText error >{errors.descripcion && errors.descripcion.message}</FormHelperText>

        <FormControl variant="outlined" margin="normal" fullWidth value="">
          <InputLabel>
            Estado
          </InputLabel>
          <Controller
            as={<Select 
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            name="estado"
            label="Estado"
            error={errors.estado && true}
          >
          {estados.map((estado) => (
              <MenuItem value={estado.id} key={estado.id}>{estado.nombre}</MenuItem>
          ))}
          </Select>} 
            name="estado"
            control={control}
          > 
          </Controller>
        </FormControl>
      <FormHelperText error >{errors.estado && errors.estado.message}</FormHelperText>
        </>
      </CustomDialog>
    </div>
  );
};

export default AgregarPlantilla;
