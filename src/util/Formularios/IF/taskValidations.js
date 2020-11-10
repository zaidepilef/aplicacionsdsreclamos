import * as yup from "yup";
// COMPLETAR CARATULA
export const revisionReClasificacion = yup.object().shape({
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
  aseguradora: yup.object().required("Seleccione una Aseguradora").shape().nullable(),
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
// ANALIZAR ADMISIBILIDAD IF
export const analizarIfSchema = yup.object().shape({
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
  aseguradora: yup.object().required("Seleccione una Aseguradora").shape().nullable(),
  materia: yup.object().required("Seleccione un Materia").shape().nullable(),
  sub_materia: yup.object().required("Seleccione una Sub Materia").shape().nullable(),
  tipo_reclamo: yup.object().required("Seleccione un Tipo de Reclamo").shape().nullable(),
  analista_encargado: yup.string().required("Ingrese un analista"),
  correo_electronico_notificacion: yup
    .string()
    .required("Ingresa un correo"),
  fecha_inicio_reclamo: yup.string().required("Debe seleccionar una fecha"),
  origen_reclamo: yup.object().required("Seleccione una Tipo de Ingreso").shape().nullable(),
  unidad_responsable: yup.object().required("Seleccione una Unidad Responsable").shape().nullable()
});

// ANALIZAR ADMISIBILIDAD
export const analizarSchema = yup.object().shape({
  triage: yup.object().shape({
    descripcion: yup.string().required("Ingresa una Prioridad")
  }),
  cotizante: yup.object().shape({
    apellido_materno: yup.string().required("Ingresa un Apellido Materno"),
    apellido_paterno: yup.string().required("Ingresa un Apellido Paterno"),
    direccion_nombre_calle: yup.string().required("Ingresa un nombre de calle"),
    edad: yup
      .number()
      .positive("Ingrese una edad válida")
      .integer("Ingrese")
      .required("La edad es requerida"),
    fecha_nacimiento: yup.string().required("Ingresa una clasificación"),
    nombres: yup.string().required("Ingresa un Nombre"),
    full_rut: yup.string().required("Ingresa una Rut"),
    telefono_contacto_uno: yup.string().required("Ingresa el Telefono"),
    telefono_contacto_dos: yup.string().required("Ingresa el Telefono 2"),
    nacionalidad: yup.object().shape({
      gentilicio: yup.string().required("Ingresa una Nacionalidad")
    })
  }),
  comuna: yup.object().shape({
    nombre: yup.string().required("Ingresa una Comuna")
  }),
  materia: yup.object().shape({
    descripcion: yup.string().required("Ingresa una descripción")
  }),
  region: yup.object().shape({
    nombre: yup.string().required("Ingresa una Región")
  }),
  sub_materia: yup.object().shape({
    descripcion: yup.string().required("Ingresa una submateria")
  }),
  tipo_reclamo: yup.object().shape({
    tipo: yup.string().required("Ingresa una Tipo de Reclamo")
  }),
  analista_encargado: yup.string().required("Ingrese un analista"),
  correo_electronico_notificacion: yup
    .string()
    .required("Ingresa una clasificación"),
  fecha_limite: yup.string().required("Debe confirmar el correo"),
  notificacion_electronica: yup.string().required("Ingresa una clasificación"),
  origen_reclamo: yup.string().required("Ingresa una clasificación"),
  unidad_responsable: yup.string().required("Ingresa una clasificación")
});
// Visa Registra Observacion
export const visaRegistraSchema = yup.object().shape({
  encargadoVisa: yup.string().required("Seleccione una opción"),
  observacion: yup
    .string()
    .min(5, "La observación debe ser de mínimo 5 carácteres"),
  validateForm: yup.bool().when(["encargadoVisa", "observacion"], {
    is: (encargadoVisa, observacion) =>
      encargadoVisa === "false" && !observacion,
    then: yup
      .bool()
      .required("Agregue una observacion antes de realizar cualquier opción"),
    otherwise: yup.bool()
  })
});
