import React, { useState, Fragment } from "react";
import CardBox from "components/CardBox";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { CustomDialog } from "util/CustomDialog";
import { addGenero } from "api/Mantenedores/Genero/genero";
import { notificationsApi } from "util/Notifications";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import Buscador from '../../components/Buscador';
import { useForm, Controller } from 'react-hook-form';
import { FormHelperText } from '@material-ui/core';
import { validationGeneroSchema } from './validations';

const AgregarGenero = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDialogOpen = () => setIsOpen(true);
  const handeDialogClose = () => setIsOpen(false);
  const {
    token,
    setLoading,
    setSearchInput,
    searchInput,
    setRefresh 
  } = props;
  const { handleSubmit, control, errors } = useForm({
    mode:'onBlur',
    validationSchema:validationGeneroSchema
  });


  const agregarGenero = (data) => {
    setLoading(true)
    addGenero(token, data)
      .then(() => {
        notificationsApi("success", "Agregado Correctamente");
        setLoading(false);
        setRefresh(r => !r);
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
        title="Agregar Nuevo Género"
        submitForm={handleSubmit(agregarGenero)}
      >
        <Fragment>
          <Controller
            as={TextField}
            autoFocus
            name="desc_genero"
            label="Género"
            defaultValue=""
            variant="outlined"
            margin="dense"
            id="genero"
            fullWidth
            control={control}
            error={errors.desc_genero && true}
          />
          <FormHelperText error id="genero">{errors.desc_genero && errors.desc_genero.message}</FormHelperText>
        </Fragment>
      </CustomDialog>
    </div>
  );
};

export default AgregarGenero;
