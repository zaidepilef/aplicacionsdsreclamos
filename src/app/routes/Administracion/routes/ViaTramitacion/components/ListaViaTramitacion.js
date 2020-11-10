import React, { useState, Fragment } from 'react';
import { editViaTramitacion, deleteViaTramitacion } from 'api/Mantenedores/ViaTramitacion/viaTramitacion'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { notificationsApi } from 'util/Notifications';
import { CustomDialog } from 'util/CustomDialog';
import Swal from 'sweetalert2';
import Icon from "@mdi/react";
import { mdiDelete, mdiFileEdit } from "@mdi/js";
import { useForm, Controller } from 'react-hook-form';
import { InputLabel,TextField } from "@material-ui/core";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { FormHelperText } from '@material-ui/core';
import { validationViaTramitacionSchema } from './validations';
import FormControl from '@material-ui/core/FormControl' 

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

const ListaViaTramitacion = (props) => {

    const { handleSubmit, control, errors } = useForm({
        mode:'onBlur',
        validationSchema:validationViaTramitacionSchema
    });
    const {viaTramitacion, setLoading, loading, token, tareas, setRefresh } = props
    const [isOpen, setIsOpen] = useState(false);
    const [openS, setOpenS] = useState(false);

    const handleDialogOpen = () => setIsOpen(true);
    const handeDialogClose = () => setIsOpen(false);

    // Funciones para abrir y cerrar el select
    const handleCloseS = () => setOpenS(false);
    const handleOpenS = () => setOpenS(true);

    const editarViaTramitacion = (data) => {
        editViaTramitacion(token, data, viaTramitacion.id).then(response => {
            notificationsApi('success', 'Editado Correctamente')
            setLoading(!loading)  
        })
        .catch(err => {
            notificationsApi('error', err)
        });
        handeDialogClose();
    }

    const borrarViaTramitacion = () => {
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
                    deleteViaTramitacion(token, viaTramitacion).then(response => {
                        Swal.fire(
                            'Eliminado!',
                            'El Vía Tramitación a sido eliminado.',
                            'success'
                        )
                        setRefresh(r => !r);
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
                <StyledTableCell align="center" >{viaTramitacion.id}</StyledTableCell>
                <StyledTableCell align="center">{viaTramitacion.nombre_tarea}</StyledTableCell>
                <StyledTableCell align="center">{viaTramitacion.tipo}</StyledTableCell>
                <StyledTableCell align="center" >
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
                        onClick={borrarViaTramitacion}
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
                    title='Editar Vía Tramitación'
                    submitForm={handleSubmit(editarViaTramitacion)}

                >
                    <Fragment>
                        <Controller
                            as={TextField}
                            name="tipo"
                            id="via_tramitacion"
                            label="Vía Tramitación"
                            control={control}
                            variant="outlined"
                            margin="dense"
                            error={errors.tipo && true}
                            fullWidth
                            />
                            <FormHelperText error id="via_tramitacion">{errors.tipo && errors.tipo.message}</FormHelperText>
                        <FormControl variant="outlined" margin="normal" fullWidth value="">
                            <InputLabel >
                            Tareas
                            </InputLabel>
                            <Controller 
                            as={<Select
                                id="tarea"
                                open={openS}
                                fullWidth
                                label="Tareas"
                                error={errors.tarea && true}
                                onClose={handleCloseS} 
                                onOpen={handleOpenS}
                            >
                                {tareas.map((tarea,i) => (
                                <MenuItem key={tarea.id} value={tarea.id}>{tarea.nombre}</MenuItem>
                                ))}
                            </Select>}
                            name="tarea"
                            control={control}
                            />
                            
                        </FormControl>
                        <FormHelperText error id="tarea">{errors.tarea && errors.tarea.message}</FormHelperText>
                    </Fragment>
                </CustomDialog>
            </StyledTableRow>
        </Fragment>
    );
}
 
export default ListaViaTramitacion;