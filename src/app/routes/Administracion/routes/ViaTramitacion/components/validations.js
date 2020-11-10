import * as yup from 'yup';

export const validationViaTramitacionSchema = yup.object().shape({
    tipo: yup.string().required('Ingresa un Vía de Tramitación'),
    tarea: yup.number().required('Seleccione una Tarea')
})