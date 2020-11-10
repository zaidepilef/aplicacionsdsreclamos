import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  makeStyles
} from "@material-ui/core";
import { Controller } from "react-hook-form";

const useStyles = makeStyles(() => ({
  errorMessage: {
    color: "red"
  }
}));

const FormSelect = ({ control, errors, watch }) => {
  const classes = useStyles();

  const watchValue = watch("reclamanteAportaAntecedentes", "");

  return (
    <div>
      <FormControl component="fieldset" error={errors.reclamanteAportaAntecedentes}>
        <FormLabel component="legend">
          ¿Recibió nuevos antecedentes del solicitante?
        </FormLabel>
        <Controller
          as={
            <RadioGroup aria-label="gender">
              <FormControlLabel
                value="false"
                control={<Radio color="primary" />}
                label="No, avanzar a generar resolución"
              />
              <FormControlLabel
                value="true"
                control={<Radio color="primary" />}
                label="Si, volver a Analizar Admisibilidad"
              />
            </RadioGroup>
          }
          name="reclamanteAportaAntecedentes"
          control={control}
        />
        {errors.reclamanteAportaAntecedentes && (
          <p className={classes.errorMessage}>
            {errors.reclamanteAportaAntecedentes.message}
          </p>
        )}
      </FormControl>
    </div>
  );
};

export default FormSelect;
