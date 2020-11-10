import * as yup from 'yup';

export const validationTipoCalleSchema = yup.object().shape({
    dvi_descripcion: yup.string().required('Ingresa un Tipo Calle'),
})