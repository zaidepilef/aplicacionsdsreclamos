import React from "react";
import Chip from "@material-ui/core/Chip";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";
import CardBox from "components/CardBox";
import * as yup from "yup";
import { FormHelperText } from "@material-ui/core";

const ChipForm = ({ arrayEmail, setArrayEmail }) => {
  const { register, handleSubmit, reset, errors } = useForm({
    mode: "onBlur",
    validationSchema: validacionSchema
  });

  const agregarCorreo = (data, e) => {
    e.preventDefault();
    if (arrayEmail.includes(data.email)) {
      return;
    }
    setArrayEmail(actual => [...actual, data.email]);
    reset();
  };

  const handleDelete = data => {
    setArrayEmail(state => state.filter(email => email !== data));
  };

  return (
    <CardBox styleName="col-xl-12 col-md-12">
      <div className="row">
        <div className="col-md-12 col-xl-12 mb-2">
          <h3>Destinatarios</h3>
          <div className="manage-margin d-flex flex-wrap">
            {arrayEmail &&
              arrayEmail.map((data, i) => {
                return (
                  <Chip
                    label={data}
                    key={i}
                    color="primary"
                    icon={<MailOutlineIcon />}
                    onDelete={() => {
                      handleDelete(data);
                    }}
                  />
                );
              })}
          </div>
        </div>
        <div className="col-md-12 col-xl-12 mt-2">
          <form className="d-flex align-items-center">
            <div className="">
              <TextField
                inputRef={register}
                name="email"
                label="Correo Electronico"
                variant="outlined"
                margin="dense"
                id="email"
                error={errors.email && true}
              />
              <FormHelperText error id="email">
                {errors.email && errors.email.message}
              </FormHelperText>
            </div>
            <Button
              variant="contained"
              color="primary"
              className="btn ml-2"
              onClick={handleSubmit(agregarCorreo)}
            >
              <Icon path={mdiPlus} size={1} />
            </Button>
          </form>
        </div>
      </div>
    </CardBox>
  );
};

export default ChipForm;

const validacionSchema = yup.object().shape({
  email: yup.string().email("Ingresa correo valido")
});
