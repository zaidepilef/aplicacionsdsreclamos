import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CardBox from "components/CardBox";

import { useForm, Controller } from "react-hook-form";

import PropTypes from "prop-types";

const PerfilData = props => {
  const { profileData, updatePerfilSubmit } = props;

  const methods = useForm();

  const { handleSubmit, control } = methods;

  var campoRut = "";

  if (profileData.rut !== null) {
    campoRut = profileData.rut + "-" + profileData.dv;
  }

  return (
    <div className="row">
      <CardBox styleName="col-lg-12">
        <form className="row" onSubmit={handleSubmit(updatePerfilSubmit)}>
          <div className="col-md-4 col-12">
            <Controller
              as={TextField}
              name="rut"
              label="Rut"
              control={control}
              defaultValue={campoRut}
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </div>

          <div className="col-md-4 col-12">
            <Controller
              as={TextField}
              name="iniciales_responsabilidad"
              label="Iniciales Responsabilidad"
              control={control}
              defaultValue={profileData.iniciales_responsabilidad}
              variant="outlined"
              margin="normal"
              fullWidth
            />
          </div>
          <div className="col-md-4 col-12">
            <Controller
              as={TextField}
              name="name"
              label="Nombre"
              control={control}
              defaultValue={profileData.name}
              variant="outlined"
              margin="normal"
              fullWidth
              disabled
            />
          </div>
          <div className="col-md-4 col-12">
            <Controller
              as={TextField}
              name="departamento"
              label="Departamento"
              control={control}
              defaultValue={profileData.departamento}
              variant="outlined"
              margin="normal"
              fullWidth
              disabled
            />
          </div>
          <div className="col-md-4 col-12">
            <Controller
              as={TextField}
              name="entidad"
              label="Entidad"
              control={control}
              defaultValue={profileData.entidad}
              variant="outlined"
              margin="normal"
              fullWidth
              disabled
            />
          </div>
          <div className="col-md-4 col-12">
            <Controller
              as={TextField}
              name="pais"
              label="Pais"
              control={control}
              defaultValue={profileData.pais}
              variant="outlined"
              margin="normal"
              fullWidth
              disabled
            />
          </div>
          <div className="col-md-4 col-12">
            <Controller
              as={TextField}
              name="siglaEntidad"
              label="Sigla Entidad"
              control={control}
              defaultValue={profileData.siglaEntidad}
              variant="outlined"
              margin="normal"
              fullWidth
              disabled
            />
          </div>
          <div className="col-md-4 col-12">
            <Controller
              as={TextField}
              name="subdepartamento"
              label="Sub Departamento"
              control={control}
              defaultValue={profileData.subdepartamento}
              variant="outlined"
              margin="normal"
              fullWidth
              disabled
            />
          </div>
          <div className="col-md-4 col-12">
            <Controller
              as={TextField}
              name="unidad"
              label="Unidad"
              control={control}
              defaultValue={profileData.unidad}
              variant="outlined"
              margin="normal"
              fullWidth
              disabled
            />
          </div>
          <div className="col align-self-center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="jr-btn jr-btn-lg"
            >
              Actualizar Perfil
            </Button>
          </div>
        </form>
      </CardBox>
    </div>
  );
};

PerfilData.propTypes = {
  profileData: PropTypes.object.isRequired,
  setProfileData: PropTypes.func.isRequired,
  updatePerfilSubmit: PropTypes.func.isRequired
};

export default PerfilData;
