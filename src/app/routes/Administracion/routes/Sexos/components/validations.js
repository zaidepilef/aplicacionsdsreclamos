import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    desc_sexo: yup.string().required('Ingresa un Nombre de Sexo')
})