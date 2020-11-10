import React from "react";
import CardBox from "components/CardBox";
import BotonAcciones from "../components/BotonAcciones";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import FormSelect from "./components/FormSelect";
import { visaRegistraSchema } from "../taskValidations";
import { yupResolver } from "@hookform/resolvers";

const Vista_Registra_Observacion = ({ handleSubmitForm }) => {
  const { handleSubmit, register, control, watch, errors } = useForm({
    defaultValues: {
      encargadoVisa: "",
      observacion_visa: ""
    },
    resolver: yupResolver(visaRegistraSchema),
    mode: "onBlur"
  });

  return (
    <>
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

Vista_Registra_Observacion.propTypes = {
  instanciaForm: PropTypes.object.isRequired,
  handleSubmitForm: PropTypes.func.isRequired
};

export default Vista_Registra_Observacion;
