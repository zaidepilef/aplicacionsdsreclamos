import React, { useState, Fragment } from "react";
import CardBox from "components/CardBox";
import Button from "@material-ui/core/Button";
import { CustomDialog } from "util/CustomDialog";
import { notificationsApi } from "util/Notifications";
import { addTipoReclamo } from 'api/Mantenedores/TipoReclamo/tipoReclamo'
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import { useForm, Controller } from 'react-hook-form';
import BuscadorTipoReclamo from './BuscardorTipoReclamo';
import TextField from "@material-ui/core/TextField";
import { FormHelperText } from '@material-ui/core';
import { validationTipoReclamoSchema } from './validations';

const AgregarTipoReclamo = (props) => {

    const { handleSubmit, control, errors } = useForm({
        mode:'onBlur',
        validationSchema:validationTipoReclamoSchema
    });
    const {
        token,
        setSearchInput,
        searchInput,
        setRefresh
      } = props;

    const [isOpen, setIsOpen] = useState(false);
    const handleDialogOpen = () => setIsOpen(true);
    const handeDialogClose = () => setIsOpen(false);

    const agregarTipoReclamo = (data,e) => {
        e.preventDefault();
        addTipoReclamo(token, data)
        .then(() => {
          notificationsApi("success", "Agregado Correctamente");
          setRefresh(r=> !r);
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
                    <BuscadorTipoReclamo
                        searchInput={searchInput}
                        setSearchInput={setSearchInput}
                    />
                </form>
                
            </CardBox>
            <CustomDialog
                isOpen={isOpen}
                handleClose={handeDialogClose}
                title="Agregar Tipo Reclamo"
                submitForm={handleSubmit(agregarTipoReclamo)}
            >
                <Fragment>
                    <Controller
                        as={TextField}
                        autoFocus
                        name="tipo"
                        label="Tipo Reclamo"
                        variant="outlined"
                        margin="dense"
                        fullWidth
                        id="tipo_reclamo"
                        control={control}
                        error={errors.tipo && true}
                    />
                    <FormHelperText error id="tipo_reclamo">{errors.tipo && errors.tipo.message}</FormHelperText>
                </Fragment>
            </CustomDialog>
        </div>
    );
}
 
export default AgregarTipoReclamo;