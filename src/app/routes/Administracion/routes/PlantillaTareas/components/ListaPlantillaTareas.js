import React, { useState, Fragment } from "react";
import {
  editPlantillaTarea,
  deletePlantillaTarea
} from "api/Mantenedores/PlantillaTareas/plantillatareas";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { notificationsApi } from "util/Notifications";
import { CustomDialog } from "util/CustomDialog";
import Swal from "sweetalert2";
import Icon from "@mdi/react";
import { mdiDelete, mdiFileEdit } from "@mdi/js";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { useForm, Controller } from "react-hook-form";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import { validationSchema } from "./validations";
import { FormHelperText } from "@material-ui/core";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "rgb(33, 144, 171  )",
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

const ListaPlantillaTareas = props => {
  const {
    plantillas,
    tareas,
    key,
    plantillatarea,
    setLoading,
    loading,
    token
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [openS, setOpenS] = React.useState(false);

  const handleDialogOpen = () => setIsOpen(true);
  const handeDialogClose = () => setIsOpen(false);

  const { control, handleSubmit, errors } = useForm({
    mode: "onBlur",
    validationSchema: validationSchema
  });

  const editarPlantillaTarea = data => {
    editPlantillaTarea(token, data, plantillatarea.id)
      .then(response => {
        notificationsApi("success", "Editado Correctamente");
        setLoading(!loading);
      })
      .catch(err => {
        notificationsApi("error", err);
      });
    handeDialogClose();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCloseS = () => {
    setOpenS(false);
  };

  const handleOpenS = () => {
    setOpenS(true);
  };

  const eliminarPlantillaTarea = () => {
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
        deletePlantillaTarea(token, plantillatarea)
          .then(response => {
            Swal.fire(
              "Eliminado!",
              "La Plantilla Tarea a sido eliminada.",
              "success"
            );
            setLoading(!loading);
          })
          .catch(err => {
            notificationsApi("error", err);
          });
      }
    });
  };

  return (
    <Fragment>
      <StyledTableRow style={{ textDecoration: "none" }}>
        <StyledTableCell align="center">
          {plantillatarea.nombre_plantilla}
        </StyledTableCell>
        <StyledTableCell align="center">
          {plantillatarea.nombre_tarea}
        </StyledTableCell>
        <StyledTableCell align="center" key={key}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="jr-btn jr-btn-lg"
            onClick={handleDialogOpen}
          >
            <Icon path={mdiFileEdit} title="Editar" size={1} />
          </Button>
          <Button
            type="submit"
            onClick={eliminarPlantillaTarea}
            variant="contained"
            color="primary"
            className="jr-btn jr-btn-lg"
          >
            <Icon path={mdiDelete} title="Eliminar" size={1} />
          </Button>
        </StyledTableCell>
        <CustomDialog
          isOpen={isOpen}
          handleClose={handeDialogClose}
          title="Editar Plantilla Tarea"
          submitForm={handleSubmit(editarPlantillaTarea)}
        >
          <FormControl variant="outlined" margin="normal" fullWidth value="">
            <InputLabel>Plantilla</InputLabel>
            <Controller
              as={
                <Select
                  open={open}
                  fullWidth
                  onClose={handleClose}
                  onOpen={handleOpen}
                  name="plantilla"
                  label="Plantilla"
                  error={errors.plantilla && true}
                >
                  {plantillas.map((plantilla, index) => (
                    <MenuItem value={plantilla.id}>{plantilla.nombre}</MenuItem>
                  ))}
                </Select>
              }
              name="plantilla"
              control={control}
            ></Controller>
          </FormControl>
          <FormHelperText error>
            {errors.plantilla && errors.plantilla.message}
          </FormHelperText>

          <FormControl variant="outlined" margin="normal" fullWidth value="">
            <InputLabel>Tarea</InputLabel>
            <Controller
              as={
                <Select
                  open={openS}
                  fullWidth
                  onClose={handleCloseS}
                  onOpen={handleOpenS}
                  name="tarea"
                  label="Tarea"
                  error={errors.tarea && true}
                >
                  {tareas.map((tarea, index) => (
                    <MenuItem value={tarea.id}>{tarea.nombre}</MenuItem>
                  ))}
                </Select>
              }
              name="tarea"
              control={control}
            ></Controller>
          </FormControl>
          <FormHelperText error>
            {errors.tarea && errors.tarea.message}
          </FormHelperText>
        </CustomDialog>
      </StyledTableRow>
    </Fragment>
  );
};

export default ListaPlantillaTareas;
