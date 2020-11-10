import React, { useState, Fragment } from 'react';
import { editTarea, deleteTarea } from 'api/Mantenedores/Tarea/tarea'
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
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
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


const ListaTarea = (props) => {

    const { procesos, key, tareas, setLoading, loading, token } = props;
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = React.useState(false);


    const handleDialogOpen = () => setIsOpen(true);
    const handeDialogClose = () => setIsOpen(false);

    const { control, handleSubmit, errors } = useForm({
        mode:'onBlur',
        validationSchema:validationSchema
      });


    const editarTarea = (data) => {
        editTarea(token, data, tareas.id).then(response => {
            notificationsApi('success', 'Editado Correctamente')
            setLoading(!loading)
        })
            .catch(err => {
                notificationsApi('error', err)
            })
        handeDialogClose();
    }
    const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };

    const eliminarTarea = () => {
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
                    deleteTarea(token, tareas).then(response => {
                        Swal.fire(
                            'Eliminado!',
                            'La Tarea a sido eliminada.',
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
                <StyledTableCell align="center" >{tareas.sla_dias}</StyledTableCell>
                <StyledTableCell align="center">{tareas.nombre_proceso}</StyledTableCell>
                <StyledTableCell align="center">{tareas.nombre}</StyledTableCell>
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
                        onClick={eliminarTarea}
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
                    title='Editar Tarea'
                    submitForm={handleSubmit(editarTarea)}
                >
                    <Controller
                        as={TextField}
                        control={control}
                        autoFocus
                        name="nombre"
                        label="Nombre"
                        variant="outlined"
                        margin="dense"
                        fullWidth
                        defaultValue={tareas.nombre}
                        error={errors.nombre && true}
                    />
                    <FormHelperText error >{errors.nombre && errors.nombre.message}</FormHelperText>          

                    <Controller
                        as={TextField}
                        control={control} 
                        name="sla_dias"
                        label="SLA Días"
                        variant="outlined"
                        margin="dense"
                        fullWidth
                        defaultValue={tareas.sla_dias}
                        error={errors.sla_dias && true}
                    />
                    <FormHelperText error >{errors.sla_dias && errors.sla_dias.message}</FormHelperText>          

                    <FormControl variant="outlined" margin="normal" fullWidth value="">
                    <InputLabel>
                    Proceso
                    </InputLabel>
                    <Controller
                        as={
                        <Select 
                        open={open}
                        fullWidth
                        onClose={handleClose}
                        onOpen={handleOpen}
                        name="proceso"
                        label="Proceso"
                        error={errors.proceso && true}
                        >
                        {procesos.map((proceso, index) => (
                            <MenuItem value={proceso.id}>{proceso.nombre}</MenuItem>
                        ))}
                        </Select>}
                        name="proceso"
                        control={control}
                        />
                    </FormControl>
                    <FormHelperText error >{errors.proceso && errors.proceso.message}</FormHelperText>          
                </CustomDialog>
            </StyledTableRow>
        </Fragment>
    );
}

export default ListaTarea;