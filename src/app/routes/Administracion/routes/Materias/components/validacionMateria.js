/* eslint-disable no-template-curly-in-string */
import * as yup from 'yup'

export const validationMateriaSchema = yup.object().shape({
  descripcion: yup
    .string()
    .required('Ingresa una Descripción')
    .max(100, 'Máximo ${max} caracteres'),
  proceso: yup
    .number()
    .required('Seleccione un Proceso')
    .integer('Valor de Seleccion debe ser número entero')
    .positive('Seleccione un Proceso')
    .typeError('Seleccione un Proceso'),
})
