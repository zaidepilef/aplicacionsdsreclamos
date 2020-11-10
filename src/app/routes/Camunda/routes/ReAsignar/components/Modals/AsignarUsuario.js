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
  username: yup.string().required("Ingresa un nombre de usuario")
});

const DerivarUsuario = ({ handleSubmitForm, users }) => {
  const { handleSubmit, errors, control } = useForm({
    mode: "onBlur",
    validationSchema,
    defaultValues: {
      username: ""
    }
  });

  const [openS, setOpenS] = useState(false);
  const handleCloseS = () => setOpenS(false);
  const handleOpenS = () => setOpenS(true);

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className="row">
      <div className="col-md-12 col-12">
        <FormControl variant="outlined" margin="normal" fullWidth value="">
          <InputLabel>Usuarios</InputLabel>
          <Controller
            as={
              <Select
                id="username"
                open={openS}
                fullWidth
                label="Usuarios"
                error={errors.username && true}
                onClose={handleCloseS}
                onOpen={handleOpenS}
              >
                {users.map(user => (
                  <MenuItem key={user.id} value={user.id}>
                    {user.username}
                  </MenuItem>
                ))}
              </Select>
            }
            name="username"
            control={control}
          />
        </FormControl>
        <FormHelperText error id="username">
          {errors.username && errors.username.message}
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

DerivarUsuario.propTypes = {
  task: PropTypes.object.isRequired,
  setDataTable: PropTypes.func.isRequired,
  handeDialogClose: PropTypes.func.isRequired
};

export default DerivarUsuario;
