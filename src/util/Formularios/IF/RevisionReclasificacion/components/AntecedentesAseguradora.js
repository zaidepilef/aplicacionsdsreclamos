import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import { ControlledAutocomplete } from "util/ControlledAutocomplete";

const AntecendetesAseguradora = props => {
  const {
    classes,
    register,
    errors,
    setValue,
    control,
    watch,
    aseguradoras = []
  } = props;

  useEffect(() => {
    const aseguradora = watch("aseguradora");
    if (!aseguradora) setValue("aseguradora.codigo_isapre", "");
    else setValue("aseguradora.codigo_isapre", aseguradora.codigo_isapre);
  }, [watch("aseguradora")]);

  return (
    <>
      <Divider className={classes.dividerBody} />
      <h1 className="card-title">Antecedentes de la Aseguradora</h1>
      <div className="row">
        <div className="col-md-6 col-12">
          <ControlledAutocomplete
            control={control}
            classes={classes}
            name="aseguradora"
            options={aseguradoras}
            getOptionLabel={option => option.nombre_isapre}
            renderInput={params => (
              <TextField
                {...params}
                variant="outlined"
                label="Aseguradora"
                margin="normal"
                error={errors.aseguradora}
              />
            )}
          >
            {errors.aseguradora && (
              <p className={classes.errorMessage}>
                {errors.aseguradora.message}
              </p>
            )}
          </ControlledAutocomplete>
        </div>
        <div className="col-md-6 col-12">
          <TextField
            name="aseguradora.codigo_isapre"
            label="Codigo Isapre"
            variant="outlined"
            margin="normal"
            disabled
            fullWidth
            inputRef={register}
          />
        </div>
      </div>
    </>
  );
};

export default AntecendetesAseguradora;
