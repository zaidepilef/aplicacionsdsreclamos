import React from "react";
import PropTypes from "prop-types";
// Cardbox es el estandar de las cajas en las vistas
import CardBox from "components/CardBox";
// Importamos los botones de Acciones para realizar las diferentes Acciones
import BotonAcciones from "../components/BotonAcciones";
// Importamos la libreria React Hook Form para elaborar los formularios
import { useForm } from "react-hook-form";
// Importamos Yup para realizar schemas de validaciones
import * as yup from "yup";

const NombreTarea = ({ instanciaForm, handleSubmitForm }) => {
  return (
    <>
      <CardBox styleName="col-lg-12">
        <h1>Desde Demo</h1>
      </CardBox>
    </>
  );
};

NombreTarea.propTypes = {
  // Requerimos todos los datos de la instancia para manejar la lógica
  instanciaForm: PropTypes.object.isRequired,
  // Requerimos el submit del componente pattern para realizar el submit
  handleSubmitForm: PropTypes.func.isRequired
};

export default NombreTarea;
