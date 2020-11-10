import React, { useState } from "react";
import CardBox from "components/CardBox";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { CustomDialog } from "util/CustomDialog";
import { addProvincia } from 'api/Mantenedores/Provincias/provincias';
import { notificationsApi } from "util/Notifications";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import Buscador from '../../components/Buscador';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useForm, Controller } from 'react-hook-form';
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel';
import { validationSchema } from './validations';
import { FormHelperText } from '@material-ui/core';

const AgregarProvincia = props => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDialogOpen = () => setIsOpen(true);
  const handeDialogClose = () => setIsOpen(false);
  const [open, setOpen] = useState(false);

  const {
    regiones,
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
 

  const agregarProvincia = (data) => {
    addProvincia(token, data)
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
        title='Agregar Nueva Provincia'
        submitForm={handleSubmit(agregarProvincia)}
      >
        <>
          <Controller
              as={TextField} 
              control={control}
              error={errors.codigo_provincia && true}
              autoFocus
              name="codigo_provincia"
              label="Código"
              variant="outlined"
              margin="dense"
              fullWidth
          />
          <FormHelperText error>{errors.codigo_provincia && errors.codigo_provincia.message}</FormHelperText>     
          
          <Controller
              as={TextField} 
              control={control}
              name="nombre"
              label="Nombre"
              variant="outlined"
              margin="dense"
              fullWidth
              error={errors.nombre && true}
          />
          <FormHelperText error>{errors.nombre && errors.nombre.message}</FormHelperText>     
          
          <FormControl variant="outlined" margin="normal" fullWidth value="">
          <InputLabel >
              Región
          </InputLabel>
          <Controller
              as={ <Select 
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              name="region"
              label="Región"
              error={errors.region && true}
          >
              {regiones.map((region, index) => (
                  <MenuItem value={region.id} key={index}>{region.nombre}</MenuItem>
              ))}
          </Select>} 
              name="region"
              control={control}
          > 
          </Controller>                 
          </FormControl>   
          <FormHelperText error>{errors.region && errors.region.message}</FormHelperText>                 
        </>                  
      </CustomDialog>
    </div>
  );
};

export default AgregarProvincia;
