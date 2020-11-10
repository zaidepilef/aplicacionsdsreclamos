import React, { useState } from "react";
import CardBox from "components/CardBox";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { CustomDialog } from "util/CustomDialog";
import { addRegion } from 'api/Mantenedores/Regiones/regiones';
import { notificationsApi } from "util/Notifications";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import Buscador from '../../components/Buscador';
import { useForm, Controller } from 'react-hook-form';
import { validationSchema } from './validations';
import { FormHelperText } from '@material-ui/core';

const AgregarRegion = props => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDialogOpen = () => setIsOpen(true);
  const handeDialogClose = () => setIsOpen(false);

  const {
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
 

  const agregarRegion = (data) => {
    addRegion(token, data)
      .then(response => {
        notificationsApi("success", "Agregado Correctamente");
        setLoading(!loading);
      })
      .catch(err => {
        notificationsApi("error", err);
      });
    handeDialogClose();
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
        title='Agregar Nueva Región'
        submitForm={handleSubmit(agregarRegion)}
      >
        <>
          <Controller
              as={TextField} 
              control={control}
              error={errors.codigo_region && true}
              autoFocus
              name="codigo_region"
              label="Código"
              variant="outlined"
              margin="dense"
              fullWidth
          />
          <FormHelperText error>{errors.codigo_region && errors.codigo_region.message}</FormHelperText>     
                  
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
                  
          <Controller
            as={TextField} 
            control={control}
            name="region_ordinal"
            label="Región ordinal"
            variant="outlined"
            margin="dense"
            fullWidth
            error={errors.region_ordinal && true}
          />
          <FormHelperText error>{errors.region_ordinal && errors.region_ordinal.message}</FormHelperText>     
        </>   
      </CustomDialog>
    </div>
  );
};

export default AgregarRegion;
