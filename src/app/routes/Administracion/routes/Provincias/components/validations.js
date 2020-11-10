import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    codigo_provincia: yup.string().required('Ingresa un Código de Provincia'),
    nombre: yup.string().required('Ingresa un Nombre de Provincia'),
    region: yup.number().required('Seleccione la Región')
})