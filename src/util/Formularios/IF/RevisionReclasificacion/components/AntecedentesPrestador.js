import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import { ControlledAutocomplete } from "util/ControlledAutocomplete";

const AntecendetesPrestador = props => {
  const {
    classes,
    register,
    errors,
    setValue,
    watch,
    control,
    regiones = [],
    comunasPrestador = [],
    prestadores = []
  } = props;

  useEffect(() => {
    const prestador = watch("prestador");
    if (!prestador) setValue("prestador.direccion", "");
    else setValue("prestador.direccion", prestador.direccion);
  }, [watch("prestador")]);

  return (
    <>
      <Divider className={classes.dividerBody} />
      <h1 className="card-title">Antecedentes del prestador</h1>
      <div className="row">
        <div className="col-md-6 col-12">
          <ControlledAutocomplete
            control={control}
            classes={classes}
            name="prestador.comuna.provincia.region"
            options={regiones}
            getOptionLabel={option => option.nombre}
            renderInput={params => (
              <TextField
                {...params}
                variant="outlined"
                label="Región"
                margin="normal"
                error={
                  errors.prestador &&
                  errors.prestador.comuna &&
                  errors.prestador.comuna.provincia &&
                  errors.prestador.comuna.provincia.region
                }
              />
            )}
          >
            {errors.prestador &&
              errors.prestador.comuna &&
              errors.prestador.comuna.provincia &&
              errors.prestador.comuna.provincia.region && (
                <p className={classes.errorMessage}>
                  {errors.prestador.comuna.provincia.region.message}
                </p>
              )}
          </ControlledAutocomplete>
        </div>
        <div className="col-md-6 col-12">
          <ControlledAutocomplete
            control={control}
            classes={classes}
            name="prestador.comuna"
            options={comunasPrestador}
            getOptionLabel={option => option.nombre}
            renderInput={params => (
              <TextField
                {...params}
                variant="outlined"
                label="Comuna"
                margin="normal"
                error={errors.prestador && errors.prestador.comuna}
              />
            )}
          >
            {errors.prestador && errors.prestador.comuna && (
              <p className={classes.errorMessage}>
                {errors.prestador.comuna.message}
              </p>
            )}
          </ControlledAutocomplete>
        </div>
        <div className="col-md-6 col-12">
          <ControlledAutocomplete
            control={control}
            classes={classes}
            name="prestador"
            options={prestadores}
            getOptionLabel={option => option.nombre}
            renderInput={params => (
              <TextField
                {...params}
                variant="outlined"
                label="Establecimiento de Salud"
                margin="normal"
                error={errors.prestador}
              />
            )}
          >
            {errors.prestador && (
              <p className={classes.errorMessage}>{errors.prestador.message}</p>
            )}
          </ControlledAutocomplete>
        </div>
        <div className="col-md-6 col-12">
          <TextField
            name="prestador.direccion"
            label="Direccion Establecimiento de Salud"
            variant="outlined"
            margin="normal"
            inputRef={register}
            fullWidth
            disabled
          />
        </div>
      </div>
    </>
  );
};

export default AntecendetesPrestador;
