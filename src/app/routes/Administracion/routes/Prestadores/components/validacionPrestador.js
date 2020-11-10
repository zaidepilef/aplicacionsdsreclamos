/* eslint-disable no-template-curly-in-string */
import * as yup from 'yup'

export const validationPrestadorSchema = yup.object().shape({
  /*nombre: yup
    .string()
    .required('Ingresa un Nombre de Prestador')
    .max(100, 'Máximo ${max} caracteres'),*/
  region: yup
    .number()
    .required('Seleccione una Region')
    .integer('Valor de Seleccion debe ser número entero')
    .positive('Seleccione una Region')
    .typeError('Seleccione una Region'),
  provincia: yup
    .number()
    .required('Seleccione una Provincia')
    .integer('Valor de Seleccion debe ser número entero')
    .positive('Seleccione una Provincia')
    .typeError('Seleccione una Provincia'),
  comuna: yup
    .number()
    .required('Seleccione una Comuna')
    .integer('Valor de Seleccion debe ser número entero')
    .positive('Seleccione una Comuna')
    .typeError('Seleccione una Comuna'),
})
