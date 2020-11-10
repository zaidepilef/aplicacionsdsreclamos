import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { FormHelperText } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { editPlantilla } from 'api/Mantenedores/Plantillas/plantillas';
import { validationSchema } from '../validations';
import { notificationsApi } from 'util/Notifications';

const EditarPlantilla = (props) => {

  const { estados, token, plantilla, handeDialogClose, setPlantillas } = props;
  const { control, handleSubmit, errors } = useForm({
    mode: 'onBlur',
    validationSchema: validationSchema
  });

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const editarPlantilla = (data) => {
    
    editPlantilla(token, data, plantilla.id).then(response => {
      const newEstado = estados.find(es => es.id === data.estado);
       const newData = {
        ...plantilla,
        ...data,
        nombre_estado: newEstado.nombre
       }
      console.log(newData);
      notificationsApi('success', 'Editado Correctamente')
      setPlantillas(prevState => prevState.map(pl => pl.id === plantilla.id ? (pl=newData) : pl));
    })
      .catch(err => {
        notificationsApi('error', err)
      })
    handeDialogClose();
  }

  return (
    <>

      <Controller
        as={TextField}
        name="nombre"
        label="Nombre"
        variant="outlined"
        margin="dense"
        fullWidth
        control={control}
        defaultValue={plantilla.nombre}
        error={errors.nombre && true}
      />
      <FormHelperText error >{errors.nombre && errors.nombre.message}</FormHelperText>

      <Controller
        as={TextField}
        name="filename"
        label="Nombre Archivo"
        variant="outlined"
        margin="dense"
        fullWidth
        control={control}
        defaultValue={plantilla.filename}
        error={errors.filename && true}
        disabled
      />
      <FormHelperText error >{errors.filename && errors.filename.message}</FormHelperText>

      <Controller
        as={TextField}
        name="version"
        label="Versión"
        variant="outlined"
        margin="dense"
        fullWidth
        control={control}
        defaultValue={plantilla.version}
        error={errors.version && true}
      />
      <FormHelperText error >{errors.version && errors.version.message}</FormHelperText>

      <Controller
        as={TextField}
        name="descripcion"
        label="Descripción"
        variant="outlined"
        margin="dense"
        fullWidth
        control={control}
        defaultValue={plantilla.descripcion}
        error={errors.descripcion && true}
      />
      <FormHelperText error >{errors.descripcion && errors.descripcion.message}</FormHelperText>

      <FormControl variant="outlined" margin="normal" fullWidth value="">
        <InputLabel >
          Estado
        </InputLabel>
        <Controller
          as={<Select
            open={open}
            fullWidth
            onClose={handleClose}
            onOpen={handleOpen}
            name="estado"
            label="Estado"
            error={errors.estado && true}
            
          >
            {estados.map((estado, index) => (
              <MenuItem value={estado.id}>{estado.nombre}</MenuItem>
            ))}
          </Select>}
          name="estado"
          defaultValue={plantilla.estado}
          control={control}
        >
        </Controller>
      </FormControl>
      <FormHelperText error >{errors.estado && errors.estado.message}</FormHelperText>
      <Button
        variant="contained"
        color="primary"
        className="jr-btn jr-btn-lg"
        onClick={handleSubmit(editarPlantilla)}>Aceptar</Button>
    </>
  )
}

export default EditarPlantilla
