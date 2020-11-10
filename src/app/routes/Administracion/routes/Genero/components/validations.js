import * as yup from 'yup';

export const validationGeneroSchema = yup.object().shape({
    desc_genero: yup.string().required('Ingresa un Género'),
})