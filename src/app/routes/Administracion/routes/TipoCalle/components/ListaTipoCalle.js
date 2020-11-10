import React, { useState, Fragment } from "react";
import {
  editTipoCalle,
  deleteTipoCalle
} from "api/Mantenedores/TipoCalle/tipoCalle";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { notificationsApi } from "util/Notifications";
import TextField from "@material-ui/core/TextField";
import { CustomDialog } from "util/CustomDialog";
import Swal from "sweetalert2";
import Icon from "@mdi/react";
import { mdiDelete, mdiFileEdit } from "@mdi/js";
import { useForm, Controller } from 'react-hook-form';
import { FormHelperText } from '@material-ui/core';
import { validationTipoCalleSchema }  from './validations';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "rgb(33, 144, 171)",
    color: "rgb(39, 70, 77)"
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    },
    "&:hover": {
      backgroundColor: "#EDEDF3"
    }
  }
}))(TableRow);

const ListaTipoCalle = props => {
  const {
    tipoCalle,
    token,
    setRefresh
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const handleDialogOpen = () => setIsOpen(true);
  const handeDialogClose = () => setIsOpen(false);
  const { handleSubmit, control, errors } = useForm({
    mode:'onBlur',
    validationSchema:validationTipoCalleSchema
  });

  const editartipoCalle = (data) => {
    editTipoCalle(token, data, tipoCalle.id)
      .then(() => {
        notificationsApi("success", "Editado Correctamente");
        setRefresh(r => !r);
      })
      .catch(err => {
        notificationsApi("error", err);
      });
    handeDialogClose();
  };

  const elimiarTipoCalle = () => {
    Swal.fire({
      title: "Estas seguro?",
      text: "Esta accion no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Si, Eliminar"
    }).then(result => {
      if (result.value) {
        deleteTipoCalle(token, tipoCalle)
          .then(response => {
            Swal.fire("Eliminado!", "El tipo calle a sido eliminado.", "success");
            setRefresh(r => !r);
          })
          .catch(err => {
            notificationsApi("error", err);
          });
      }
    });

    handeDialogClose();
  };
  return (
    <Fragment>
      <StyledTableRow style={{ textDecoration: "none" }}>
        <StyledTableCell align="center">{tipoCalle.id}</StyledTableCell>
        <StyledTableCell align="center">{tipoCalle.dvi_descripcion}</StyledTableCell>
        <StyledTableCell align="center">
          <Button
            type="submit"
            variant="contained"
            color="primary"
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
            onClick={elimiarTipoCalle}
            variant="contained"
            color="primary"
            className="jr-btn jr-btn-lg"
          >
            <Icon
              path={mdiDelete}
              title="Eliminar"
              size={1}
            />
          </Button>
        </StyledTableCell>
      </StyledTableRow>
      <CustomDialog
        isOpen={isOpen}
        handleClose={handeDialogClose}
        title="Editar Tipo Calle"
        submitForm={handleSubmit(editartipoCalle)}
      >
        <Fragment>
          <Controller 
            as={TextField}
            name="dvi_descripcion"
            label="Tipo Calle"
            id="tipo_calle"
            variant="outlined"
            margin="dense"
            defaultValue=""
            fullWidth
            control={control}
            aria-describedby="tipo_calle_error"
            error={errors.dvi_descripcion && true}
          />
          <FormHelperText error id="tipo_calle_error">{errors.dvi_descripcion && errors.dvi_descripcion.message}</FormHelperText>
        </Fragment>
      </CustomDialog>
    </Fragment>
  );
};

export default ListaTipoCalle;
