import React from "react";
import CardBox from "components/CardBox";
import BotonAcciones from "../components/BotonAcciones";
import DropZone from 'util/DropZone';
import { useForm } from "react-hook-form";

const DespachaDocFisicaEntidadExterna = ({ handleSubmitForm, instanciaData }) => {

  const { handleSubmit } = useForm();

  return (
    <>
      <CardBox styleName="col-lg-12">
        <h3 className="font-weight-light">
          <strong>Despacho de Documentación Física</strong>
        </h3>
        <DropZone instancia={instanciaData.id} />
      </CardBox>
      <CardBox styleName="col-lg-12">
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <BotonAcciones styleName="col-12 mt-4" />
        </form>
      </CardBox>
    </>
  );
};

export default DespachaDocFisicaEntidadExterna;
