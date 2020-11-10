/* eslint-disable no-template-curly-in-string */
import * as yup from 'yup'

export const validationSubmateriaSchema = yup.object().shape({
  descripcion: yup
    .string()
    .required('Ingresa una Descripción')
    .max(100, 'Máximo ${max} caracteres'),
  materia: yup
    .number()
    .required('Seleccione una Materia')
    .integer('Valor de Seleccion debe ser número entero')
    .positive('Seleccione una Materia')
    .typeError('Seleccione una Materia'),
})
