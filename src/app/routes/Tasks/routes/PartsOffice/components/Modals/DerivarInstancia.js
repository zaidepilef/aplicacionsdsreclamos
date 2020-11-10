import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  FormHelperText,
  FormControl,
  Button,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import LinearProgress from "@material-ui/core/LinearProgress";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  admisibilidad: yup.string().required("Seleccione una Admisibilidad")
});

const DerivarInstancia = ({ handleSubmitForm, users }) => {
  const { handleSubmit, errors, control } = useForm({
    mode: "onBlur",
    validationSchema,
    defaultValues: {
      admisibilidad: ""
    }
  });

  const [openS, setOpenS] = useState(false);
  const handleCloseS = () => setOpenS(false);
  const handleOpenS = () => setOpenS(true);

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className="row">
      <div className="col-md-12 col-12">
        <FormControl variant="outlined" margin="normal" fullWidth value="" error={errors.admisibilidad}>
          <InputLabel>Admisibilidad</InputLabel>
          <Controller
            as={
              <Select
                id="admisibilidad"
                open={openS}
                fullWidth
                label="Admisibilidad"
                error={errors.admisibilidad && true}
                onClose={handleCloseS}
                onOpen={handleOpenS}
              >
                <MenuItem value="Process_admisibilidadIP">
                  Admisibilidad IP
                </MenuItem>
                <MenuItem value="Process_admisibilidadIF">
                Admisibilidad IF
                </MenuItem>
              </Select>
            }
            name="admisibilidad"
            control={control}
          />
        </FormControl>
        <FormHelperText error id="admisibilidad">
          {errors.admisibilidad && errors.admisibilidad.message}
        </FormHelperText>
      </div>
      <div className="col-md-12 col-12 d-flex flex-row-reverse">
        <Button
          className="jr-btn jr-btn-lg bg-indigo lighten-1 text-white"
          color="primary"
          type="submit"
        >
          Aceptar
        </Button>
      </div>
    </form>
  );
};

DerivarInstancia.propTypes = {
  task: PropTypes.object.isRequired,
  setDataTable: PropTypes.func.isRequired,
  handeDialogClose: PropTypes.func.isRequired
};

export default DerivarInstancia;
