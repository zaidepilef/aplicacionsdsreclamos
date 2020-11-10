import React from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";

const FormSelect = ({ control, register }) => {
  return (
    <div>
      <FormControlLabel
        control={<Checkbox color="primary" />}
        label="Derivar a aseguradora"
        inputRef={register}
        name="derivacionAseguradora"
      />
    </div>
  );
};

export default FormSelect;
