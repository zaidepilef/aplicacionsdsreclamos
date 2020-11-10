import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    codigo_region: yup.string().required('Ingresa un Código de Región'),
    nombre: yup.string().required('Ingresa un Nombre de Región'),
    region_ordinal: yup.string().required('Ingresa la Región Ordinal')
})