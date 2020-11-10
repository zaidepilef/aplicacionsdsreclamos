import axios from 'axios'

import { URL_GLOBAL } from 'constants/constants';

// CARPETA DIGITAL
export const getHistory = async (token, id) => {

    const url = `${URL_GLOBAL}/api/historias/${id}`

    const params = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${token}`
        }
    }

    try {
        const res = await axios.get(url, params)
        return res.data

    } catch (err) {
        return err.response
    }

}