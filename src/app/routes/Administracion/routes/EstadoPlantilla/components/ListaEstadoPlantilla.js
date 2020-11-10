import React, { useState, Fragment } from 'react';
import { editEstadoPlantilla, deleteEstadoPlantilla } from 'api/Mantenedores/EstadoPlantilla/estadoplantilla'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { notificationsApi } from 'util/Notifications';
import TextField from '@material-ui/core/TextField';
import { CustomDialog } from 'util/CustomDialog';
import Swal from 'sweetalert2';
import Icon from "@mdi/react";
import { mdiDelete, mdiFileEdit } from "@mdi/js"; 
import { useForm, Controller } from 'react-hook-form';
import { validationSchema } from './validations';
import { FormHelperText } from '@material-ui/core';


const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: 'rgb(33, 144, 171  )',
        color: 'rgb(39, 70, 77)',
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);


const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
        '&:hover': {
            backgroundColor: '#EDEDF3'
        }
    },
}))(TableRow);


const ListaEstadoPlantilla = (props) => {

    const { key, estadoplantilla, setLoading, loading, token } = props;
    const [isOpen, setIsOpen] = useState(false);

    const handleDialogOpen = () => setIsOpen(true);
    const handeDialogClose = () => setIsOpen(false);

    const { control, handleSubmit, errors } = useForm({
        mode:'onBlur',
        validationSchema:validationSchema
      });

 
    const editarEstadoPlantilla = (data) => {
        editEstadoPlantilla(token, data, estadoplantilla.id).then(response => {
            notificationsApi('success', 'Editado Correctamente')
            setLoading(!loading)
        })
            .catch(err => {
                notificationsApi('error', err)
            })
        handeDialogClose();
    }
    const eliminarEstadoPlantilla = () => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "Esta accion no se puede revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, Eliminar'
        })
            .then(result => {
                if (result.value) {
                    deleteEstadoPlantilla(token, estadoplantilla).then(response => {
                        Swal.fire(
                            'Eliminado!',
                            'El estado plantilla a sido eliminado.',
                            'success'
                        )
                        setLoading(!loading)
                    })
                        .catch(err => {
                            notificationsApi('error', err)
                        })
                }
            })
    }

    return (
        <Fragment>
            <StyledTableRow style={{ textDecoration: 'none' }}>
                <StyledTableCell align="center">{estadoplantilla.nombre}</StyledTableCell>
                <StyledTableCell align="center" key={key}>
                    <Button
                        type="submit" variant="contained" color="primary"
                        className="jr-btn jr-btn-lg"
                        onClick={handleDialogOpen}
                    >
                        <Icon
                            path={mdiFileEdit}
                            title="Editar"
                            size={1}
                        />
                    </Button>
                    <Button
                        type="submit"
                        onClick={eliminarEstadoPlantilla}
                        variant="contained"
                        color="primary"
                        className="jr-btn jr-btn-lg" >
                        <Icon
                            path={mdiDelete}
                            title="Eliminar"
                            size={1}
                        />
                    </Button>
                </StyledTableCell>
                <CustomDialog
                    isOpen={isOpen}
                    handleClose={handeDialogClose}
                    title='Editar Estado Plantilla'
                    submitForm={handleSubmit(editarEstadoPlantilla)}
                >
                    <Controller
                        as={TextField}
                        control={control}
                        autoFocus
                        defaultValue={estadoplantilla.nombre}
                        name="nombre"
                        label="Estado"
                        variant="outlined"
                        margin="dense"
                        fullWidth  
                        error={errors.nombre && true}
                    />
                    <FormHelperText error >{errors.nombre && errors.nombre.message}</FormHelperText>          
                </CustomDialog>
            </StyledTableRow>
        </Fragment>
    );
}

export default ListaEstadoPlantilla;