import React from "react";
import PropTypes from "prop-types";
// Cardbox es el estandar de las cajas en las vistas
import CardBox from "components/CardBox";
// Importamos los botones de Acciones para realizar las diferentes Acciones
import BotonAcciones from "util/BotonAcciones";
// Importamos la libreria React Hook Form para elaborar los formularios
import { useForm } from "react-hook-form";
// Importamos Yup para realizar schemas de validaciones
// import * as yup from "yup";
import DropZone from 'util/DropZone';

const SubeRespuestaSistemaDeAdmisibilidad = ({
  instanciaForm,
  handleSubmitForm
}) => {
  const { handleSubmit } = useForm();

  return (
    <>
      <CardBox styleName="col-lg-12">
        <h3 className="font-weight-light">
          <strong>Sube Respuesta Sistema de Admisibilidad</strong>
        </h3>
      </CardBox>
      {/* TODO: Revisar bien la logica de ip e if */}
      <CardBox styleName="col-lg-12">
          <DropZone instancia={instanciaForm.id}/>
      </CardBox>
      <CardBox styleName="col-lg-12">
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <BotonAcciones styleName="col-12 mt-4" />
        </form>
      </CardBox>
    </>
  );
};

SubeRespuestaSistemaDeAdmisibilidad.propTypes = {
  // Requerimos todos los datos de la instancia para manejar la lógica
  instanciaForm: PropTypes.object.isRequired,
  // Requerimos el submit del componente pattern para realizar el submit
  handleSubmitForm: PropTypes.func.isRequired
};

export default SubeRespuestaSistemaDeAdmisibilidad;
