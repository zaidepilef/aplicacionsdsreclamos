import React, { useState } from "react";
import PropTypes from 'prop-types'
import {
  FormHelperText,
  FormControl,
  Button,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import { asignateInstanceApi } from "api/Instancias/instancia";
import { useForm, Controller } from "react-hook-form";
import { notificationsApi } from "util/Notifications";
import * as yup from "yup";


const validationSchema = yup.object().shape({
  username: yup.string().required("Ingresa un nombre de usuario")
});

const DerivarUsuario = ({ task, setDataTable, handeDialogClose, users }) => {

  const { handleSubmit, errors, control } = useForm({
    mode: "onBlur",
    validationSchema,
    defaultValues:{
      username: task.usuario_id ? task.usuario_id : ''
    }
  });

  const [openS, setOpenS] = useState(false);
  const handleCloseS = () => setOpenS(false);
  const handleOpenS = () => setOpenS(true);

  const handleSubmitForm = async data => {
    const { id } = task;
    const { username } = data;
    const usr_filter = users.find(usr => usr.id === Number(username));
    
    const res = await asignateInstanceApi(id, usr_filter.username);

    if (res.error) return notificationsApi("error", res.error.message);

    if (res.data) {
      const newTask = {
        ...task,
        usuario: usr_filter.username
      };

      setDataTable(prevState =>
        prevState.map(data => (data.id === id ? (data = newTask) : data))
      );

      notificationsApi("success", res.data.message);
      handeDialogClose()
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className="row">
      <div className="col-md-12 col-12">
        <FormControl variant="outlined" margin="normal" fullWidth value="">
          <InputLabel >
            Usuarios
          </InputLabel>
          <Controller
            as={<Select
              id="username"
              open={openS}
              fullWidth
              label="Usuarios"
              error={errors.username && true}
              onClose={handleCloseS}
              onOpen={handleOpenS}
              
            >
              {users.map((user) => (
                <MenuItem key={user.id} value={user.id}>{user.username}</MenuItem>
              ))}
            </Select>}
            name="username"
            control={control}
          />

        </FormControl>
        <FormHelperText error id="username" >{errors.username && errors.username.message}</FormHelperText>
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
}

export default DerivarUsuario;
