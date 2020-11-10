import * as yup from 'yup';

export const validationTipoReclamoSchema = yup.object().shape({
    tipo: yup.string().required('Ingresa un Tipo Reclamo'),
})