import React, { useState } from "react";
import CardBox from "components/CardBox";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { CustomDialog } from "util/CustomDialog";
import { addComuna } from 'api/Mantenedores/Comunas/comunas';
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

const AgregarComuna = props => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDialogOpen = () => setIsOpen(true);
  const handeDialogClose = () => setIsOpen(false);
  const [open, setOpen] = React.useState(false);

  const {
    provincias,
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
 

  const agregarComuna = (data) => {
    addComuna(token, data)
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
                title='Agregar Nueva Comuna'
                submitForm={handleSubmit(agregarComuna)}
            >
                <Controller
                    as={TextField} 
                    control={control}
                    error={errors.codigo_comuna && true}
                    autoFocus
                    name="codigo_comuna"
                    label="Código"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                />
      <FormHelperText error>{errors.codigo_comuna && errors.codigo_comuna.message}</FormHelperText>     
               
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
                    Provincia
                </InputLabel>
                <Controller
                    as={ <Select 
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    name="provincia"
                    label="Provincia"
                    error={errors.provincia && true}
                >
                    {provincias.map((provincia, index) => (
                        <MenuItem value={provincia.id}>{provincia.nombre}</MenuItem>
                    ))}
                </Select>} 
                    name="provincia"
                    control={control}
                > 
                </Controller>                 
                </FormControl>   
                <FormHelperText error>{errors.provincia && errors.provincia.message}</FormHelperText>                 
                            
            </CustomDialog>
    </div>
  );
};

export default AgregarComuna;
