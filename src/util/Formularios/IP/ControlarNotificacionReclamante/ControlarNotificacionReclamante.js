import React from "react";
import PropTypes from "prop-types";
// Cardbox es el estandar de las cajas en las vistas
import CardBox from "components/CardBox";
// Importamos los botones de Acciones para realizar las diferentes Acciones
import BotonAcciones from "util/BotonAcciones";
// Importamos la libreria React Hook Form para elaborar los formularios
import FormSelect from './components/FormSelect'
import { useForm } from "react-hook-form";
// Importamos Yup para realizar schemas de validaciones
// import * as yup from "yup";

const ControlarNotificacionReclamante = ({
  instanciaForm,
  handleSubmitForm
}) => {
  const { handleSubmit, register, control, watch, errors } = useForm();

  return (
    <>
    {errors.mail && (
      <div className="col d-flex justify-content-center">
        <h3>Mensaje de Error</h3>
        <p>This message was created automatically by mail delivery software</p>
        <p>A message that you sent could not be delivered to one or more of its recipients. This is a permanent error. The following address(es) failed:</p>
        <p>errors.emails</p>
        <p>retry timeout exceeded</p>
      </div>
    )}
      <CardBox styleName="col-lg-12">
        <FormSelect
          control={control}
          register={register}
          watch={watch}
          errors={errors}
        />
      </CardBox>
      <CardBox styleName="col-lg-12">
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <BotonAcciones styleName="col-12 mt-4" />
        </form>
      </CardBox>
    </>
  );
};

ControlarNotificacionReclamante.propTypes = {
  // Requerimos todos los datos de la instancia para manejar la lógica
  instanciaForm: PropTypes.object.isRequired,
  // Requerimos el submit del componente pattern para realizar el submit
  handleSubmitForm: PropTypes.func.isRequired
};

export default ControlarNotificacionReclamante;
