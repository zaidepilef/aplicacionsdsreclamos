import AxiosGeneral from '../axiosConf/axios';

import { URL_GLOBAL } from 'constants/constants';

// CARPETA DIGITAL
export const uploadFile = async (formFirma) => {

    const distpach = {
        data:null,
        error: null
    }

    const url = `${URL_GLOBAL}/api/firmar-documentos`

    try {
        const res = await AxiosGeneral.post(url, formFirma);
        distpach.data = res.data;

    } catch (err) {
        distpach.error = err;
    }

    return distpach;

}

