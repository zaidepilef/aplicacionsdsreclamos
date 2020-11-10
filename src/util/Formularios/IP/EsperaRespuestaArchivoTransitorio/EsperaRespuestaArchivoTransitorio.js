import React from "react";
import CardBox from "components/CardBox";
import BotonAcciones from "../components/BotonAcciones";

import { useForm } from "react-hook-form";

const EsperaRespuestaArchivoTransitorio = ({ handleSubmitForm }) => {

  const { handleSubmit } = useForm();

  return (
    <>
      <CardBox styleName="col-lg-12">
        <h3 className="font-weight-light">
            <strong>Espera de Respuesta de Archivo Transitorio</strong>
          </h3>
        </CardBox>
        <CardBox styleName="col-lg-12">
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <BotonAcciones styleName="col-12 mt-4" />
        </form>
      </CardBox>
    </>
  );
};

export default EsperaRespuestaArchivoTransitorio;
