import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    nombre: yup.string().required('Ingresa un Nombre de Tarea'),
    sla_dias: yup.string().required('Ingresa el/los día/s'),
    proceso: yup.number().required('Seleccione un Proceso')
})