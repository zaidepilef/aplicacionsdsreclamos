import React, { useState, Fragment } from 'react';
import { updateSexo, deleteSexo } from 'api/Mantenedores/Sexos/sexos'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { notificationsApi } from 'util/Notifications';
import TextField from '@material-ui/core/TextField';
import { CustomDialog } from 'util/CustomDialog';
import { getAccessToken } from 'api/auth';
import Swal from 'sweetalert2';
import Icon from '@mdi/react';
import { mdiFileEdit, mdiDelete } from '@mdi/js';
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

const ListaSexos = (props) => {
    const { key, sexo, setLoading, loading } = props;
    const [isOpen, setIsOpen] = useState(false);
    const handleDialogOpen = () => setIsOpen(true);
    const handeDialogClose = () => setIsOpen(false);
    const token = getAccessToken();

    const { control, handleSubmit, errors } = useForm({
        mode: 'onBlur',
        validationSchema: validationSchema
    });


    const editarSexo = (data) => {
        updateSexo(token, data, sexo.id).then(response => {
            notificationsApi('success', 'Editado Correctamente')
            setLoading(!loading);
        })
            .catch(err => {
                notificationsApi('error', err)
            })
        handeDialogClose();
    };

    const eliminarSexo = () => {
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
            .then((result) => {
                if (result.value) {
                    deleteSexo(token, sexo.desc_sexo).then(response => {
                        Swal.fire(
                            'Eliminado!',
                            'El sexo ha sido eliminado.',
                            'success'
                        )
                        setLoading(!loading)
                    })
                        .catch(err => {
                            notificationsApi('error', err)
                        })
                }
            })


        handeDialogClose();

    }
    return (
        <Fragment>
            <StyledTableRow style={{ tion: 'none' }}>
                <StyledTableCell align="center">{sexo.desc_sexo}</StyledTableCell>
                <StyledTableCell align="center" key={key}>
                    <Button
                        type="submit" variant="contained" color="primary"
                        className="jr-btn jr-btn-lg"
                        onClick={handleDialogOpen}
                    >
                        <Icon path={mdiFileEdit}
                            title="Editar"
                            size={1}
                        />
                    </Button>
                    <Button
                        type="submit"
                        onClick={eliminarSexo}
                        variant="contained"
                        color="primary"
                        className="jr-btn jr-btn-lg" >
                        <Icon path={mdiDelete}
                            title="Eliminar"
                            size={1}
                        />
                    </Button>
                </StyledTableCell>
                <CustomDialog
                    isOpen={isOpen}
                    handleClose={handeDialogClose}
                    title='Editar Sexo'
                    submitForm={handleSubmit(editarSexo)}
                >
                    <Controller
                        as={TextField}
                        control={control}
                        name="desc_sexo"
                        label="Sexo"
                        variant="outlined"
                        margin="dense"
                        fullWidth
                        defaultValue={sexo.desc_sexo}
                        error={errors.desc_sexo && true}
                    />
                    <FormHelperText error >{errors.desc_sexo && errors.desc_sexo.message}</FormHelperText>
                </CustomDialog>
            </StyledTableRow>
        </Fragment>
    );
}

export default ListaSexos;