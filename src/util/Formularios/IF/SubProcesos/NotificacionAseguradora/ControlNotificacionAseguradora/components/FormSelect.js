import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  TextField,
  FormControlLabel,
  Radio,
  makeStyles
} from "@material-ui/core";
import { Controller } from "react-hook-form";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "100%"
    }
  },
  errorMessage: {
    color: "red"
  }
}));

const FormSelect = ({ control, register, watch, errors }) => {
  const classes = useStyles();
  const watchShowReintentarNotificacion = watch("reintentarNotificacion", null);
  const watchShowActualizarCorreo = watch("actualizarCorreo", null);

  return (
    <div>
      <FormControl component="fieldset" className="col-lg-12" error={errors.reintentarNotificacion}>
        <FormLabel component="legend">¿Reintentar notificacion?</FormLabel>
        <Controller
          as={
            <RadioGroup aria-label="visa">
              <FormControlLabel
                value="true"
                control={<Radio color="primary" />}
                label="Si"
              />
              <FormControlLabel
                value="false"
                control={<Radio color="primary" />}
                label="No"
              />
            </RadioGroup>
          }
          name="reintentarNotificacion"
          control={control}
        />
        {errors.reintentarNotificacion && (
          <p className={classes.errorMessage}>{errors.reintentarNotificacion.message}</p>
        )}
      </FormControl>

      {watchShowReintentarNotificacion === "true" && (
        <>
        <FormControl component="fieldset" className="col-lg-12" error={errors.actualizarCorreo}>
        <FormLabel component="legend">¿Desea actualizar el correo de contacto?</FormLabel>
        <Controller
          as={
            <RadioGroup aria-label="visa">
              <FormControlLabel
                value="true"
                control={<Radio color="primary" />}
                label="Si"
              />
              <FormControlLabel
                value="false"
                control={<Radio color="primary" />}
                label="No"
              />
            </RadioGroup>
          }
          name="actualizarCorreo"
          control={control}
        />
        {errors.actualizarCorreo && (
          <p className={classes.errorMessage}>{errors.actualizarCorreo.message}</p>
        )}
      </FormControl>
        </>
      )}
      {watchShowActualizarCorreo === "true" && (
        <>
        <div className={classes.root}>
          <TextField
            label="correo electronico nuevo"
            name="correo_electronico_notificacion"
            inputRef={register}
            variant="outlined"
            error={errors.validateForm}
          />
          {errors.validateForm && (
            <p className={classes.errorMessage}>
              {errors.validateForm.message}
            </p>
          )}
          {!errors.validateForm && errors.correo_electronico_notificacion &&(
            <p className={classes.errorMessage}>
              {errors.correo_electronico_notificacion.message}
            </p>
          )}
        </div>
        </>
      )}
    </div>
  );
};

export default FormSelect;
