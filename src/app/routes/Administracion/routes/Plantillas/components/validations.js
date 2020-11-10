import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    nombre: yup.string().required('Ingresa un Nombre de Plantilla'),
    filename: yup.string().required('Ingresa un Nombre de Archivo'),
    version: yup.string().required('Ingresa una Versión'),
    descripcion: yup.string().required('Ingresa una Descripción'),
    estado: yup.number().required('Seleccione un Estado')
})