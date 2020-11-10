import React, { useState, Fragment } from "react";
import CardBox from "components/CardBox";
import { addTipoCalle } from "api/Mantenedores/TipoCalle/tipoCalle";
import { CustomDialog } from "util/CustomDialog";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { notificationsApi } from "util/Notifications";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import Buscador from '../../components/Buscador';
import { useForm, Controller } from 'react-hook-form';
import { validationTipoCalleSchema }  from './validations';
import { FormHelperText } from '@material-ui/core';

const AgregarTipoCalle = (props) => {
  const { token,  searchInput, setSearchInput, setRefresh } = props;
  const [isOpen, setIsOpen] = useState(false);
  const handleDialogOpen = () => setIsOpen(true);
  const handeDialogClose = () => setIsOpen(false);
  const { handleSubmit, control, errors } = useForm({
      mode:'onBlur',
      validationSchema:validationTipoCalleSchema
  });


  const addingTipoCalle = (data) => {
    addTipoCalle(token, data)
      .then(() => {
        notificationsApi("success", "Agregado Correctamente");
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
        title="Agregar Nuevo Tipo Calle"
        submitForm={handleSubmit(addingTipoCalle)}
      >
        <Fragment>
          <Controller 
            as={TextField}
            name="dvi_descripcion"
            label="Tipo Calle"
            id="tipo_calle"
            defaultValue=""
            variant="outlined"
            margin="dense"
            fullWidth
            control={control}
            aria-describedby="tipo_calle_error"
            error={errors.dvi_descripcion && true}
          />
          <FormHelperText error id="tipo_calle_error">{errors.dvi_descripcion && errors.dvi_descripcion.message}</FormHelperText>
        </Fragment>
      </CustomDialog>
    </div>

  );
};

export default AgregarTipoCalle;
