import React from "react";
import { Divider, TextField, FormControl } from "@material-ui/core";
import { ControlledAutocomplete } from "util/ControlledAutocomplete";

const AntecedentesReclamanteRepresentante = props => {
  const {
    register,
    setValue,
    control,
    watch,
    errors,
    classes,
    sexos = [],
    generos = [],
    nacionalidades = [],
    regiones = [],
    comunasRepresentante = []
  } = props;

  const selectSexo = watch("cotizante.sexo.desc_sexo");
  const selectGenero = watch("cotizante.genero.desc_genero");
  const selectNacionalidades = watch("cotizante.nacionalidad.gentilicio");
  const selectRegiones = watch("cotizante.region.nombre");
  const selectComunas = watch("cotizante.comuna.nombre");

  const handleChangeSexo = e =>
    setValue("cotizante.sexo.desc_sexo", e.target.value);
  const handleChangeGenero = e =>
    setValue("cotizante.genero.desc_genero", e.target.value);
  const handleChangeNacionalidades = e =>
    setValue("cotizante.nacionalidad.gentilicio", e.target.value);
  const handleChangeRegiones = e =>
    setValue("cotizante.region.nombre", e.target.value);
  const handleChangeComunas = e =>
    setValue("cotizante.comuna.nombre", e.target.value);

  return (
    <>
      <Divider className={classes.dividerBody} />
      <h3 className="font-weight-light">
        <strong>Antecedentes del reclamante/representante</strong>
      </h3>
      <div className="row">
        <div className="col-md-4 col-12">
          <FormControl fullWidth>
            <TextField
              name="cotizante.full_rut"
              inputRef={register}
              label="Rut"
              margin="normal"
              variant="outlined"
              fullWidth
              error={errors.cotizante && errors.cotizante.full_rut && true}
            />
            {errors.cotizante && errors.cotizante.full_rut && (
              <p className={classes.errorMessage}>
                {errors.cotizante.full_rut.message}
              </p>
            )}
          </FormControl>
        </div>
        <div className="col-md-8 col-12"></div>
        <div className="col-md-4 col-12">
          <FormControl fullWidth>
            <TextField
              name="cotizante.nombres"
              inputRef={register}
              label="Nombre"
              margin="normal"
              variant="outlined"
              fullWidth
              error={errors.cotizante && errors.cotizante.nombres && true}
            />
            {errors.cotizante && errors.cotizante.nombres && (
              <p className={classes.errorMessage}>
                {errors.cotizante.nombres.message}
              </p>
            )}
          </FormControl>
        </div>
        <div className="col-md-4 col-12">
          <FormControl fullWidth>
            <TextField
              name="cotizante.apellido_paterno"
              inputRef={register}
              label="Apellido Paterno"
              margin="normal"
              variant="outlined"
              fullWidth
              error={
                errors.cotizante && errors.cotizante.apellido_paterno && true
              }
            />
            {errors.cotizante && errors.cotizante.apellido_paterno && (
              <p className={classes.errorMessage}>
                {errors.cotizante.apellido_paterno.message}
              </p>
            )}
          </FormControl>
        </div>
        <div className="col-md-4 col-12">
          <FormControl fullWidth>
            <TextField
              name="cotizante.apellido_materno"
              inputRef={register}
              label="Apellido Materno"
              margin="normal"
              variant="outlined"
              fullWidth
              error={
                errors.cotizante && errors.cotizante.apellido_materno && true
              }
            />
            {errors.cotizante && errors.cotizante.apellido_materno && (
              <p className={classes.errorMessage}>
                {errors.cotizante.apellido_materno.message}
              </p>
            )}
          </FormControl>
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
          <ControlledAutocomplete
            control={control}
            classes={classes}
            name="cotizante.sexo"
            options={sexos}
            getOptionLabel={option => option.desc_sexo}
            renderInput={params => (
              <TextField
                {...params}
                variant="outlined"
                label="Sexo"
                margin="normal"
                error={errors.cotizante && errors.cotizante.sexo}
              />
            )}
          >
            {errors.cotizante && errors.cotizante.sexo && (
              <p className={classes.errorMessage}>
                {errors.cotizante.sexo.message}
              </p>
            )}
          </ControlledAutocomplete>
        </div>
        <div className="col-md-4 col-12">
          <FormControl fullWidth>
            <TextField
              name="cotizante.fecha_nacimiento"
              inputRef={register}
              label="Fecha de nacimiento"
              margin="normal"
              variant="outlined"
              fullWidth
              error={
                errors.cotizante && errors.cotizante.fecha_nacimiento && true
              }
            />
            {errors.cotizante && errors.cotizante.fecha_nacimiento && (
              <p className={classes.errorMessage}>
                {errors.cotizante.fecha_nacimiento.message}
              </p>
            )}
          </FormControl>
        </div>
        <div className="col-md-4 col-12">
          <FormControl fullWidth>
            <TextField
              name="cotizante.edad"
              inputRef={register}
              label="Edad"
              margin="normal"
              variant="outlined"
              fullWidth
              type="number"
              error={errors.cotizante && errors.cotizante.edad && true}
            />
            {errors.cotizante && errors.cotizante.edad && (
              <p className={classes.errorMessage}>
                {errors.cotizante.edad.message}
              </p>
            )}
          </FormControl>
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
          <FormControl fullWidth>
            <TextField
              name="cotizante.telefono_contacto_uno"
              inputRef={register}
              label="Télefono Contacto 1"
              margin="normal"
              variant="outlined"
              fullWidth
              type="number"
              onInput={e => {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 9);
              }}
              error={
                errors.cotizante &&
                errors.cotizante.telefono_contacto_uno &&
                true
              }
            />
            {errors.cotizante && errors.cotizante.telefono_contacto_uno && (
              <p className={classes.errorMessage}>
                {errors.cotizante.telefono_contacto_uno.message}
              </p>
            )}
          </FormControl>
        </div>
        <div className="col-md-4 col-12">
          <FormControl fullWidth>
            <TextField
              name="cotizante.telefono_contacto_dos"
              inputRef={register}
              label="Télefono Contacto 2"
              margin="normal"
              variant="outlined"
              fullWidth
              type="number"
              onInput={e => {
                e.target.value = Math.max(0, parseInt(e.target.value))
                  .toString()
                  .slice(0, 9);
              }}
              error={
                errors.cotizante &&
                errors.cotizante.telefono_contacto_dos &&
                true
              }
            />
            {errors.cotizante && errors.cotizante.telefono_contacto_dos && (
              <p className={classes.errorMessage}>
                {errors.cotizante.telefono_contacto_dos.message}
              </p>
            )}
          </FormControl>
        </div>
        <div className="col-md-12 col-12">
          <FormControl fullWidth>
            <TextField
              name="cotizante.direccion_nombre_calle"
              inputRef={register}
              label="Domicilio"
              margin="normal"
              variant="outlined"
              fullWidth
              error={
                errors.cotizante &&
                errors.cotizante.direccion_nombre_calle &&
                true
              }
            />
            {errors.cotizante && errors.cotizante.direccion_nombre_calle && (
              <p className={classes.errorMessage}>
                {errors.cotizante.direccion_nombre_calle.message}
              </p>
            )}
          </FormControl>
        </div>
        <div className="col-md-4 col-12">
          <ControlledAutocomplete
            control={control}
            classes={classes}
            name="cotizante.region"
            options={regiones}
            getOptionLabel={option => option.nombre}
            renderInput={params => (
              <TextField
                {...params}
                variant="outlined"
                label="Region"
                margin="normal"
                error={errors.cotizante && errors.cotizante.region}
              />
            )}
          >
            {errors.cotizante && errors.cotizante.region && (
              <p className={classes.errorMessage}>
                {errors.cotizante.region.message}
              </p>
            )}
          </ControlledAutocomplete>
        </div>
        <div className="col-md-4 col-12">
          <ControlledAutocomplete
            control={control}
            classes={classes}
            name="cotizante.comuna"
            options={comunasRepresentante}
            getOptionLabel={option => option.nombre}
            renderInput={params => (
              <TextField
                {...params}
                variant="outlined"
                label="Comuna"
                margin="normal"
                error={errors.cotizante && errors.cotizante.comuna}
              />
            )}
          >
            {errors.cotizante && errors.cotizante.comuna && (
              <p className={classes.errorMessage}>
                {errors.cotizante.comuna.message}
              </p>
            )}
          </ControlledAutocomplete>
        </div>

        <div className="col-md-4 col-12">
          <FormControl fullWidth>
            <TextField
              name="correo_electronico_notificacion"
              inputRef={register}
              label="Correo Electrónico"
              margin="normal"
              variant="outlined"
              fullWidth
              error={errors.correo_electronico_notificacion && true}
            />
            {errors.correo_electronico_notificacion && (
              <p className={classes.errorMessage}>
                {errors.correo_electronico_notificacion.message}
              </p>
            )}
          </FormControl>
        </div>
      </div>
    </>
  );
};

export default AntecedentesReclamanteRepresentante;
