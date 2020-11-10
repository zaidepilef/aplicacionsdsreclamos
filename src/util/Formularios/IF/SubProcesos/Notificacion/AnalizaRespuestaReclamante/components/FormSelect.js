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
  return (
    <div>
      <FormControl component="fieldset" error={errors.reclamanteRespondio}>
        <FormLabel component="legend">
          ¿Recibió nuevos antecedentes del solicitante?
        </FormLabel>
        <Controller
          as={
            <RadioGroup aria-label="gender">
              <FormControlLabel
                value="true"
                control={<Radio color="primary" />}
                label="Sí, Reclamante Respondió"
              />
              <FormControlLabel
                value="false"
                control={<Radio color="primary" />}
                label="No, Reclamante no respondió"
              />
            </RadioGroup>
          }
          name="reclamanteRespondio"
          control={control}
        />
        {errors.reclamanteRespondio && (
          <p className={classes.errorMessage}>
            {errors.reclamanteRespondio.message}
          </p>
        )}
      </FormControl>
    </div>
  );
};

export default FormSelect;
