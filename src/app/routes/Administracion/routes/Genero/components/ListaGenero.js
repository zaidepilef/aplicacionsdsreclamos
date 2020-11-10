import React, { useState, Fragment } from 'react';
import { editGenero, deleteGeneros } from 'api/Mantenedores/Genero/genero'
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
import { FormHelperText } from '@material-ui/core';
import { validationGeneroSchema } from './validations';

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


const ListaGenero = (props) => {

  const { generos, setLoading, token, setRefresh } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleDialogOpen = () => setIsOpen(true);
  const handeDialogClose = () => setIsOpen(false);
  const { handleSubmit, control, errors } = useForm({
    mode: 'onBlur',
    validationSchema: validationGeneroSchema
  });

  const editarGenero = (data) => {

    editGenero(token, data, generos.id).then(response => {
      notificationsApi('success', 'Editado Correctamente')
      setRefresh(r => !r);
    })
      .catch(err => {
        notificationsApi('error', err)
      })
    handeDialogClose();
  }
  const eliminarGenero = () => {
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
          setLoading(true);
          deleteGeneros(token, generos).then(response => {
            Swal.fire(
              'Eliminado!',
              'El género a sido eliminado.',
              'success'
            )
            setLoading(false);
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
        <StyledTableCell align="center" >{generos.id}</StyledTableCell>
        <StyledTableCell align="center">{generos.desc_genero}</StyledTableCell>
        <StyledTableCell align="center">
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
            onClick={eliminarGenero}
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
          title='Editar Género'
          submitForm={handleSubmit(editarGenero)}

        >
          <Fragment>
            <Controller
              as={TextField}
              autoFocus
              name="desc_genero"
              label="Género"
              variant="outlined"
              margin="dense"
              fullWidth
              control={control}
              error={errors.desc_genero && true}
            />
            <FormHelperText error id="tipo_calle_error">{errors.desc_genero && errors.desc_genero.message}</FormHelperText>
          </Fragment>
        </CustomDialog>
      </StyledTableRow>
    </Fragment>
  );
}

export default ListaGenero;