import React from "react";
import { TextField, Divider } from "@material-ui/core";
import SelectRHF from "util/SelectRHF";
import { ControlledAutocomplete } from "util/ControlledAutocomplete";

const AntecedentesPaciente = props => {
  const {
    register,
    setValue,
    control,
    watch,
    errors,
    classes,
    generos = [],
    nacionalidades = []
  } = props;

  // Genero
  const selectGenero = watch("cotizante.genero.desc_genero");
  const selectNacionalidades = watch("cotizante.nacionalidad.gentilicio");
  const handleChangeGenero = e =>
    setValue("cotizante.genero.desc_genero", e.target.value);
  const handleChangeNacionalidades = e =>
    setValue("cotizante.nacionalidad.gentilicio", e.target.value);

  return (
    <>
      <Divider className={classes.dividerBody} />
      <h1 className="card-title">Antecedentes del paciente</h1>
      <div className="row">
        <div className="col-md-4 col-12">
          <TextField
            name="cotizante.full_rut"
            label="Rut"
            variant="outlined"
            margin="normal"
            inputRef={register}
            fullWidth
          />
        </div>

        <div className="col-md-4 col-12">
          <TextField
            name="cotizante.nombres"
            label="Nombres"
            variant="outlined"
            margin="normal"
            fullWidth
            inputRef={register}
          />
        </div>
        <div className="col-md-4 col-12">
          <TextField
            name="cotizante.apellido_paterno"
            label="Apellido Paterno"
            variant="outlined"
            margin="normal"
            fullWidth
            inputRef={register}
          />
        </div>
        <div className="col-md-4 col-12">
          <TextField
            name="cotizante.apellido_materno"
            label="Apellido Materno"
            variant="outlined"
            margin="normal"
            fullWidth
            inputRef={register}
          />
        </div>
        <div className="col-md-4 col-12">
          <ControlledAutocomplete
            control={control}
            classes={classes}
            name="cotizante.genero"
            options={generos}
            getOptionLabel={option => option.desc_genero}
            renderInput={params => (
              <TextField
                {...params}
                variant="outlined"
                label="Géneros"
                margin="normal"
                error={errors.cotizante && errors.cotizante.genero}
              />
            )}
          >
            {errors.cotizante && errors.cotizante.genero && (
              <p className={classes.errorMessage}>
                {errors.cotizante.genero.message}
              </p>
            )}
          </ControlledAutocomplete>
        </div>
        <div className="col-md-4 col-12">
          <TextField
            name="cotizante.fecha_nacimiento"
            label="Fecha Nacimiento"
            variant="outlined"
            margin="normal"
            fullWidth
            inputRef={register}
          />
        </div>
        <div className="col-md-4 col-12">
          <TextField
            name="cotizante.edad"
            label="Edad"
            variant="outlined"
            margin="normal"
            fullWidth
            inputRef={register}
          />
        </div>
        <div className="col-md-4 col-12">
        <ControlledAutocomplete
            control={control}
            classes={classes}
            name="cotizante.nacionalidad"
            options={nacionalidades}
            getOptionLabel={option => option.gentilicio}
            renderInput={params => (
              <TextField
                {...params}
                variant="outlined"
                label="Nacionalidad"
                margin="normal"
                error={errors.cotizante && errors.cotizante.nacionalidad}
              />
            )}
          >
            {errors.cotizante && errors.cotizante.nacionalidad && (
              <p className={classes.errorMessage}>
                {errors.cotizante.nacionalidad.message}
              </p>
            )}
          </ControlledAutocomplete>
        </div>
        <div className="col-md-4 col-12">
          <TextField
            name="prestacion"
            label="Fonasa, Isapre u Otros"
            variant="outlined"
            margin="normal"
            fullWidth
            value={"Colmena Golden Cross"}
          />
        </div>
      </div>
    </>
  );
};

export default AntecedentesPaciente;
