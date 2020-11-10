import React, { useState } from "react";
import CardBox from "components/CardBox";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { CustomDialog } from "util/CustomDialog";
import { addSexo } from 'api/Mantenedores/Sexos/sexos';
import { notificationsApi } from "util/Notifications";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import Buscador from '../../components/Buscador';
import { useForm, Controller } from 'react-hook-form';
import { validationSchema } from './validations';
import { FormHelperText } from '@material-ui/core';

const AgregarSexo = props => {
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

  const agregarSexo = (data) => {
    addSexo(token, data)
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
            <form className="row" >
                    <div className="col align-self-center">
                        <Button
                            variant="contained" color="primary"
                            className="jr-btn jr-btn-lg" 
                            onClick={handleDialogOpen}
                            >
                            <Icon path={mdiPlus}
                            title="Agregar"
                            size={1} 
                            /> Agregar
                        </Button>
                    </div>
                    <div>
                    <Buscador   
                        searchInput={searchInput}
                        setSearchInput={setSearchInput}
                            />
                    </div>
            </form>
            </CardBox>
                    <CustomDialog
                        isOpen={isOpen}
                        handleClose={handeDialogClose}
                        title='Agregar Nuevo Sexo'
                        submitForm={handleSubmit(agregarSexo)}
                    >
                        <Controller
                            as={TextField}
                            control={control}
                            autoFocus
                            name="desc_sexo"
                            label="Sexo"
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            error={errors.desc_sexo && true}
                        /> 
                        <FormHelperText error >{errors.desc_sexo && errors.desc_sexo.message}</FormHelperText>          
            </CustomDialog>
    </div>
  );
};

export default AgregarSexo;
