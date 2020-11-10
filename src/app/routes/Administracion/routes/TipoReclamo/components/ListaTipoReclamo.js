import React, { useState, Fragment } from 'react';
import { editTipoReclamo, deleteTipoReclamo } from 'api/Mantenedores/TipoReclamo/tipoReclamo'
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
import TextField from "@material-ui/core/TextField";
import { FormHelperText } from '@material-ui/core';
import { validationTipoReclamoSchema } from './validations';
// import Collapse from '@material-ui/core/Collapse';
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// import Box from '@material-ui/core/Box';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableHead from '@material-ui/core/TableHead';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';

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

const ListaTipoReclamo = (props) => {

    const { handleSubmit, control, errors } = useForm({
        mode: 'onBlur',
        validationSchema: validationTipoReclamoSchema
    });
    const { tipoReclamo, setLoading, loading, token } = props
    const [isOpen, setIsOpen] = useState(false);
    // const [open, setOpen] = useState(false);
    // const history = [
    //     { date: '2020-01-05', customerId: '11091700', amount: 3 },
    //     { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
    // ];
    const handleDialogOpen = () => setIsOpen(true);
    const handeDialogClose = () => setIsOpen(false);

    const editarTipoReclamo = (data) => {
        editTipoReclamo(token, data, tipoReclamo.id).then(response => {
            notificationsApi('success', 'Editado Correctamente')
            setLoading(!loading)
        })
            .catch(err => {
                notificationsApi('error', err)
            });
        handeDialogClose();
    }

    const borrarTipoReclamo = () => {
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
                    deleteTipoReclamo(token, tipoReclamo).then(response => {
                        Swal.fire(
                            'Eliminado!',
                            'El Tipo Reclamo a sido eliminado.',
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
            {/* <TableRow >
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    nombres
        </TableCell>
                <TableCell >ll</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>ID</TableCell>
                                        <TableCell>Tipo Reclamo</TableCell>
                                        <TableCell>Acciones</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>{historyRow.customerId}</TableCell>
                                            <TableCell><Button
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
                                                    onClick={borrarTipoReclamo}
                                                    variant="contained"
                                                    color="primary"
                                                    className="jr-btn jr-btn-lg" >
                                                    <Icon
                                                        path={mdiDelete}
                                                        title="Eliminar"
                                                        size={1}
                                                    />
                                                </Button></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow> */}
            <StyledTableRow style={{ textDecoration: 'none' }}>
                <StyledTableCell align="center" >{tipoReclamo.id}</StyledTableCell>
                <StyledTableCell align="center" >{tipoReclamo.tipo}</StyledTableCell>
                
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
                        onClick={borrarTipoReclamo}
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
                    title='Editar Tipo Reclamo'
                    submitForm={handleSubmit(editarTipoReclamo)}

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
            </StyledTableRow>
        </Fragment>
    );
}

export default ListaTipoReclamo;