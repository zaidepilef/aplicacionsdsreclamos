import React from 'react'
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import SelectRHF from "util/SelectRHF";

const AntecendetesAseguradora = (props) => {

  const { classes, register, errors, watch, setValue, control, aseguradoras = [] } = props

  const selectAseguradora = watch("cotizante.nacionalidad.gentilicio");
  const handleChangeAseguradora = e =>
    setValue("cotizante.sexo.desc_sexo", e.target.value);

  return (
    <>
      <Divider className={classes.dividerBody} />
      <h1 className="card-title">Antecedentes de la Aseguradora</h1>
      <div className="row">
        <div className="col-md-6 col-12">
        <SelectRHF
            name="aseguradora.id"
            label="Isapre"
            options={aseguradoras}
            valueMenu="nombre_isapre"
            error={errors.aseguradora && errors.aseguradora.nombre_isapre}
            control={control}
            selectOption={selectAseguradora}
            handleChange={handleChangeAseguradora}
          >
            {errors.aseguradora && errors.aseguradora.nombre_isapre && (
              <p className={classes.errorMessage}>
                {errors.aseguradora.id.message}
              </p>
            )}
          </SelectRHF>

        </div>
        <div className="col-md-6 col-12">
          <TextField
            name="aseguradora.codigo_isapre"
            label="Codigo Isapre"
            variant="outlined"
            margin="normal"
            fullWidth
            inputRef={register}
            error={
              errors.aseguradora && errors.aseguradora.codigo_isapre && true
            }
          />
          {errors.aseguradora && errors.aseguradora.codigo_isapre && (
            <p className={classes.errorMessage}>
              {errors.aseguradora.codigo_isapre.message}
            </p>
          )}
        </div>
      </div>
    </>
  )
}

export default AntecendetesAseguradora
