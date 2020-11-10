import axios from 'axios'
import { URL_GLOBAL } from '../../constants/constants';


export const getAllRegiones = async (token) => {

    
    const url = `${URL_GLOBAL}/api/regiones-all/`

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


export const addRegion = async (token, dataBody) =>{
   
    const resolved = {
        data: null,
        error: null
      }
      const url = `${URL_GLOBAL}/api/regioncreate/`
      const params = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${token}`
        }
      }
      try {
        const res = await axios.post(url, dataBody, params)
        resolved.data = res.data
      } catch (err) {
        resolved.error = err.response.data.message
      }
      return resolved
}


export const deleteRegion = async (token, codigo_region) =>{
   
    const resolved = {
        data: null,
        error: null
      }
      const url = `${URL_GLOBAL}/api/instanciaregion/${codigo_region}/`
      const params = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${token}`
        }
      }
    
      try {
        const res = await axios.delete(url, params)
        resolved.data = res.data
      } catch (err) {
        resolved.error = err.response.data.message
      }
      return resolved
}



export const getInstanciaRegionApi = async (token, id) => {

    const url = `${URL_GLOBAL}/api/instanciaregion/${id}/`

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

export const updateRegion = async (token, dataBody, id) => {

    const resolved = {
        data: null,
        error: null
    }

    const url = `${URL_GLOBAL}/api/instanciaregion/${id}/`

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



export const getAllProvincias = async (token) => {

    
    const url = `${URL_GLOBAL}/api/provincias-all/`

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


export const addProvincia = async (token, dataBody) =>{
   
    const resolved = {
        data: null,
        error: null
      }
      const url = `${URL_GLOBAL}/api/provinciacreate/`
      const params = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${token}`
        }
      }
      try {
        const res = await axios.post(url, dataBody, params)
        resolved.data = res.data
      } catch (err) {
        resolved.error = err.response.data.message
      }
      return resolved
}


export const deleteProvincia = async (token, codigo_provincia) =>{
   
    const resolved = {
        data: null,
        error: null
      }
      const url = `${URL_GLOBAL}/api/instanciaprovincia/${codigo_provincia}/`
      const params = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${token}`
        }
      }
    
      try {
        const res = await axios.delete(url, params)
        resolved.data = res.data
      } catch (err) {
        resolved.error = err.response.data.message
      }
      return resolved
}



export const getInstanciaProvinciaApi = async (token, id) => {

    const url = `${URL_GLOBAL}/api/instanciaprovincia/${id}/`

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

export const updateProvincia = async (token, dataBody, id) => {

    const resolved = {
        data: null,
        error: null
    }

    const url = `${URL_GLOBAL}/api/instanciaprovincia/${id}/`

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






export const getAllComunas = async (token) => {

    
    const url = `${URL_GLOBAL}/api/comunas-all/`

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


export const addComuna = async (token, dataBody) =>{
   
    const resolved = {
        data: null,
        error: null
      }
      const url = `${URL_GLOBAL}/api/comunacreate/`
      const params = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${token}`
        }
      }
      try {
        const res = await axios.post(url, dataBody, params)
        resolved.data = res.data
      } catch (err) {
        resolved.error = err.response.data.message
      }
      return resolved
}


export const deleteComuna = async (token, codigo_comuna) =>{
   
    const resolved = {
        data: null,
        error: null
      }
      const url = `${URL_GLOBAL}/api/instanciacomuna/${codigo_comuna}/`
      const params = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${token}`
        }
      }
    
      try {
        const res = await axios.delete(url, params)
        resolved.data = res.data
      } catch (err) {
        resolved.error = err.response.data.message
      }
      return resolved
}



export const getInstanciaComunaApi = async (token, id) => {

    const url = `${URL_GLOBAL}/api/instanciacomuna/${id}/`

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

export const updateComuna = async (token, dataBody, id) => {

    const resolved = {
        data: null,
        error: null
    }

    const url = `${URL_GLOBAL}/api/instanciacomuna/${id}/`

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