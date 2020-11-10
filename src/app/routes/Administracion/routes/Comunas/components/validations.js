import * as yup from "yup";

export const validationSchema = yup.object().shape({
  codigo_comuna: yup.string().required("Ingresa un Código de Comuna"),
  nombre: yup.string().required("Ingresa un Nombre de Comuna"),
  provincia: yup.number().required("Seleccione la Provincia")
});
