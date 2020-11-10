import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    plantilla: yup.number().required('Seleccione una Plantilla'),
    tarea: yup.number().required('Seleccione un Tarea')
})