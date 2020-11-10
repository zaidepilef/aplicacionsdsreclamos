import React from "react";
import CardBox from "components/CardBox";
import BotonAcciones from "util/BotonAcciones";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import FormSelect from "./components/FormSelect";

const AnalizaRespuestaReclamante = ({ handleSubmitForm }) => {
  const analizarRespuesta = yup.object().shape({
    reclamanteRespondio: yup.string().required("Seleccione una opción")
  });

  const { handleSubmit, control, errors, watch } = useForm({
    defaultValues: {
      reclamanteRespondio: ""
    },
    validationSchema: analizarRespuesta
  });

  return (
    <>
      <CardBox styleName="col-lg-12">
        <FormSelect control={control} errors={errors} watch={watch} />
      </CardBox>
      <CardBox styleName="col-lg-12">
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <BotonAcciones styleName="col-12 mt-4" />
        </form>
      </CardBox>
    </>
  );
};

AnalizaRespuestaReclamante.propTypes = {
  instanciaForm: PropTypes.object.isRequired,
  handleSubmitForm: PropTypes.func.isRequired
};

export default AnalizaRespuestaReclamante;
