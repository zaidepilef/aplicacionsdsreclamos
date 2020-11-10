import React from "react";
import { TextField, FormControl, Divider } from "@material-ui/core";
import { ControlledAutocomplete } from "util/ControlledAutocomplete";

const DatosControl = props => {
  const {
    register,
    control,
    errors,
    classes,
    tipo_ingresos = [],
    prioridades = [],
    tipos_reclamo = [],
    materias = [],
    submaterias = [],
    unidades = []
  } = props;

  return (
    <>
      <h3 className="font-weight-light">
        <strong>Datos de Control</strong>
      </h3>
      <Divider className={classes.divider} />
      <div className="row">
        <div className="col-md-4 col-12">
          <ControlledAutocomplete
            control={control}
            classes={classes}
            name="triage"
            options={prioridades}
            getOptionLabel={option => option.descripcion}
            renderInput={params => (
              <TextField
                {...params}
                variant="outlined"
                label="Prioridad"
                margin="normal"
                error={errors.triage}
              />
            )}
          >
            {errors.triage && (
              <p className={classes.errorMessage}>{errors.triage.message}</p>
            )}
          </ControlledAutocomplete>
        </div>
        <div className="col-md-8 col-12"></div>
        {/* Tipo de Ingreso*/}
        <div className="col-md-4 col-12">
        <ControlledAutocomplete
            control={control}
            classes={classes}
            name="origen_reclamo"
            options={tipo_ingresos}
            getOptionLabel={option => option.nombre}
            renderInput={params => (
              <TextField
                {...params}
                variant="outlined"
                label="Tipo de Ingreso"
                margin="normal"
                error={errors.origen_reclamo}
              />
            )}
          >
            {errors.origen_reclamo && (
              <p className={classes.errorMessage}>{errors.origen_reclamo.message}</p>
            )}
          </ControlledAutocomplete>
        </div>
        {/* Unidad Responsable */}
        <div className="col-md-4 col-12">
          <ControlledAutocomplete
            control={control}
            classes={classes}
            name="unidad_responsable"
            options={unidades}
            getOptionLabel={option => option.nombre}
            renderInput={params => (
              <TextField
                {...params}
                variant="outlined"
                label="Unidad Responsable"
                margin="normal"
                error={errors.unidad_responsable}
              />
            )}
          >
            {errors.unidad_responsable && (
              <p className={classes.errorMessage}>
                {errors.unidad_responsable.message}
              </p>
            )}
          </ControlledAutocomplete>
        </div>
        {/* Analista Encargado */}
        <div className="col-md-4 col-12">
          <FormControl fullWidth>
            <TextField
              name="analista_encargado"
              inputRef={register}
              label="Analista encargado"
              margin="normal"
              variant="outlined"
              fullWidth
              error={errors.analista_encargado && true}
            />
            {errors.analista_encargado && (
              <p className={classes.errorMessage}>
                {errors.analista_encargado.message}
              </p>
            )}
          </FormControl>
        </div>
        {/* Fecha de presentacion del reclamo */}
        <div className="col-md-6 col-12">
          <FormControl fullWidth>
            <TextField
              name="fecha_inicio_reclamo"
              inputRef={register}
              label="Fecha de presentación del reclamo"
              margin="normal"
              variant="outlined"
              fullWidth
              error={errors.fecha_inicio_reclamo && true}
            />
            {errors.fecha_inicio_reclamo && (
              <p className={classes.errorMessage}>
                {errors.fecha_inicio_reclamo.message}
              </p>
            )}
          </FormControl>
        </div>
        <div className="col-md-6 col-12">
          <FormControl fullWidth>
            <TextField
              name="fecha_limite"
              inputRef={register}
              label="Fecha de presentación del reclamo en Superintendencia"
              margin="normal"
              variant="outlined"
              fullWidth
              error={errors.fecha_limite && true}
            />
            {errors.fecha_limite && (
              <p className={classes.errorMessage}>
                {errors.fecha_limite.message}
              </p>
            )}
          </FormControl>
        </div>
        {/* Tipo de Reclamo */}
        <div className="col-md-6 col-12">
          <ControlledAutocomplete
            control={control}
            classes={classes}
            name="tipo_reclamo"
            options={tipos_reclamo}
            getOptionLabel={option => option.tipo}
            renderInput={params => (
              <TextField
                {...params}
                variant="outlined"
                label="Tipo Reclamo"
                margin="normal"
                error={errors.tipo_reclamo}
              />
            )}
          >
            {errors.tipo_reclamo && (
              <p className={classes.errorMessage}>
                {errors.tipo_reclamo.message}
              </p>
            )}
          </ControlledAutocomplete>
        </div>
        {/* Materia */}
        <div className="col-md-6 col-12">
          <ControlledAutocomplete
            control={control}
            classes={classes}
            name="materia"
            options={materias}
            getOptionLabel={option => option.descripcion}
            renderInput={params => (
              <TextField
                {...params}
                variant="outlined"
                label="Materia"
                margin="normal"
                error={errors.materia}
              />
            )}
          >
            {errors.materia && (
              <p className={classes.errorMessage}>{errors.materia.message}</p>
            )}
          </ControlledAutocomplete>
        </div>
        <div className="col-md-6 col-12">
          <ControlledAutocomplete
            control={control}
            classes={classes}
            name="sub_materia"
            options={submaterias}
            getOptionLabel={option => option.descripcion}
            renderInput={params => (
              <TextField
                {...params}
                variant="outlined"
                label="Sub Materia"
                margin="normal"
                error={errors.sub_materia}
              />
            )}
          >
            {errors.sub_materia && (
              <p className={classes.errorMessage}>
                {errors.sub_materia.message}
              </p>
            )}
          </ControlledAutocomplete>
        </div>
      </div>
    </>
  );
};

export default DatosControl;
