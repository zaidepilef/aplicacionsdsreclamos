import * as yup from "yup";
// COMPLETAR CARATULA
export const completarCaratulaSchema = yup.object().shape({
  triage: yup.object().required("Seleccione una Prioridad").shape().nullable(),
  cotizante: yup.object().shape({
    apellido_materno: yup.string().required("Ingresa un Apellido Materno"),
    apellido_paterno: yup.string().required("Ingresa un Apellido Paterno"),
    direccion_nombre_calle: yup.string().required("Ingresa un nombre de calle"),
    genero: yup.object().required("Seleccione un Genero").shape().nullable(),
    sexo: yup.object().required("Seleccione un Sexo").shape().nullable(),
    edad: yup
      .number()
      .positive("Ingrese una edad válida")
      .integer("Ingrese")
      .required("La edad es requerida"),
    fecha_nacimiento: yup.string().required("Ingresa una clasificación"),
    nombres: yup.string().required("Ingresa un Nombre"),
    full_rut: yup.string().required("Ingresa un Rut"),
    telefono_contacto_uno: yup.number().required("Ingresa el Telefono"),
    telefono_contacto_dos: yup.number(),
    nacionalidad: yup.object().required("Seleccione una Nacionalidad").shape().nullable(),
    region: yup.object().required("Seleccione una Region").shape().nullable(),
    comuna: yup.object().required("Seleccione una Comuna").shape().nullable(),
  }),
  prestador: yup.object().required("Seleccione un Prestador").shape().nullable(),
  materia: yup.object().required("Seleccione un Materia").shape().nullable(),
  sub_materia: yup.object().required("Seleccione una Sub Materia").shape().nullable(),
  tipo_reclamo: yup.object().required("Seleccione un Tipo de Reclamo").shape().nullable(),
  analista_encargado: yup.string().required("Ingrese un analista"),
  correo_electronico_notificacion: yup
    .string()
    .required("Ingresa un correo"),
  fecha_inicio_reclamo: yup.string().required("Debe seleccionar una fecha"),
  notificacion_electronica: yup.string().required("Ingresa una clasificación"),
  origen_reclamo: yup.object().required("Seleccione una Tipo de Ingreso").shape().nullable(),
  unidad_responsable: yup.object().required("Seleccione una Unidad Responsable").shape().nullable()
});
// ANALIZAR ADMISIBILIDAD
export const analizarSchema = yup.object().shape({
  triage: yup.object().required("Seleccione una Prioridad").shape().nullable(),
  cotizante: yup.object().shape({
    apellido_materno: yup.string().required("Ingresa un Apellido Materno"),
    apellido_paterno: yup.string().required("Ingresa un Apellido Paterno"),
    direccion_nombre_calle: yup.string().required("Ingresa un nombre de calle"),
    genero: yup.object().required("Seleccione un Genero").shape().nullable(),
    sexo: yup.object().required("Seleccione un Sexo").shape().nullable(),
    edad: yup
      .number()
      .positive("Ingrese una edad válida")
      .integer("Ingrese")
      .required("La edad es requerida"),
    fecha_nacimiento: yup.string().required("Ingresa una clasificación"),
    nombres: yup.string().required("Ingresa un Nombre"),
    full_rut: yup.string().required("Ingresa un Rut"),
    telefono_contacto_uno: yup.number().required("Ingresa el Telefono"),
    telefono_contacto_dos: yup.number(),
    nacionalidad: yup.object().required("Seleccione una Nacionalidad").shape().nullable(),
    region: yup.object().required("Seleccione una Region").shape().nullable(),
    comuna: yup.object().required("Seleccione una Comuna").shape().nullable(),
  }),
  prestador: yup.object().required("Seleccione un Prestador").shape().nullable(),
  materia: yup.object().required("Seleccione un Materia").shape().nullable(),
  sub_materia: yup.object().required("Seleccione una Sub Materia").shape().nullable(),
  tipo_reclamo: yup.object().required("Seleccione un Tipo de Reclamo").shape().nullable(),
  analista_encargado: yup.string().required("Ingrese un analista"),
  correo_electronico_notificacion: yup
    .string()
    .required("Ingresa un correo"),
  fecha_inicio_reclamo: yup.string().required("Debe seleccionar una fecha"),
  notificacion_electronica: yup.string().required("Ingresa una clasificación"),
  origen_reclamo: yup.object().required("Seleccione una Tipo de Ingreso").shape().nullable(),
  unidad_responsable: yup.object().required("Seleccione una Unidad Responsable").shape().nullable(),
  via_tramitacion: yup.object().required("Seleccione una Via de Tramitación").shape().nullable(),
});
// Visa Registra Observacion
export const visaRegistraSchema = yup.object().shape({
  encargadoVisa: yup.string().required("Seleccione una opción"),
  observacion_visa: yup
    .string()
    .min(5, "La observación debe ser de mínimo 5 carácteres"),
  validateForm: yup.bool().when(["encargadoVisa", "observacion_visa"], {
    is: (encargadoVisa, observacion_visa) =>
      encargadoVisa === "false" && !observacion_visa,
    then: yup
      .bool()
      .required("Agregue una observacion antes de realizar cualquier opción"),
    otherwise: yup.bool()
  })
});
