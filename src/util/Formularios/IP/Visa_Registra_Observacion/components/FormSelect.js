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
  const watchShowObservation = watch("encargadoVisa", null);

  return (
    <div>
      <FormControl component="fieldset" error={errors.encargadoVisa}>
        <FormLabel component="legend">Seleccionar camino a seguir</FormLabel>
        <Controller
          as={
            <RadioGroup aria-label="visa">
              <FormControlLabel
                value="true"
                control={<Radio color="primary" />}
                label="Visar resolución"
              />
              <FormControlLabel
                value="false"
                control={<Radio color="primary" />}
                label="No visar resolución y registrar observación"
              />
            </RadioGroup>
          }
          name="encargadoVisa"
          control={control}
        />
        {errors.encargadoVisa && (
          <p className={classes.errorMessage}>{errors.encargadoVisa.message}</p>
        )}
      </FormControl>

      {watchShowObservation === "false" && (
        <div className={classes.root}>
          <FormControl error={errors.observacion_visa} fullWidth>
          <TextField
            label="Observacion"
            name="observacion_visa"
            inputRef={register}
            multiline
            rows="4"
            variant="outlined"
            error={errors.observacion_visa}
          />
          {errors.validateForm && (
            <p className={classes.errorMessage}>
              {errors.validateForm.message}
            </p>
          )}
          {!errors.validateForm && errors.observacion_visa &&(
            <p className={classes.errorMessage}>
              {errors.observacion_visa.message}
            </p>
          )}
          </FormControl>
        </div>
      )}
    </div>
  );
};

export default FormSelect;
