/* eslint-disable no-template-curly-in-string */
import * as yup from 'yup'

export const validationNacionalidadSchema = yup.object().shape({
  codigo: yup
    .number()
    .required('Ingresa un Codigo')
    .integer('Número debe ser entero')
    .positive('Número debe ser positivo')
    .max(2147483647, 'Máximo ${max}')
    .typeError('Ingresa un Codigo'),
  nombre: yup
    .string()
    .required('Ingresa un Nombre de Nacionalidad')
    .max(100, 'Máximo ${max} caracteres'),
  gentilicio: yup
    .string()
    .required('Ingresa un Gentilicio de Nacionalidad')
    .max(100, 'Máximo ${max} caracteres'),
})
