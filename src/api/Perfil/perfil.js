import axios from 'axios'


import { URL_GLOBAL } from 'constants/constants';

// OBTENER INSTANCIAS DEL USUARIO
export const getTaskInstance = async (token) => {

    const url = `${URL_GLOBAL}/api/camunda/process-instance/user`

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
        return err.message
    }

}

// CARPETA DIGITAL
export const getDigitalFoldier = async (token, dataBody) => {

    const url = `${URL_GLOBAL}/api/ecm/file`

    const params = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${token}`
        }
    }

    try {
        const res = await axios.post(url, dataBody, params)
        return res.data

    } catch (err) {
        return err.response
    }

}

export const signatureApi = async (token, formulario, arrayId) => {

    const url = `${URL_GLOBAL}/api/firmamasiva/documentos`

    const formData = new FormData()
    formData.append("otp", formulario.otp)
    formData.append("rut", formulario.rut)
    formData.append("purpose", formulario.purpose)
    formData.append("archivo", arrayId)

    const params = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${token}`
        }
    }

    try {
        const res = await axios.post(url, formData, params)
        return res.data

    } catch (err) {
        return err.message
    }
}



export const getInstanciaApiPerfil = async (token) => {

    const url = `${URL_GLOBAL}/api/perfil`

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
        return err.message
    }

}

export const updatePerfil = async (token, dataBody) => {

    const resolved = {
        data: null,
        error: null
    }

    const url = `${URL_GLOBAL}/api/perfil`

    const params = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${token}`
        }
    }

    try {
        const res = await axios.put(url, dataBody, params)
        resolved.data = res.data
    } catch (err) {
        resolved.error = err.response.data.message
    }
    
    return resolved
}