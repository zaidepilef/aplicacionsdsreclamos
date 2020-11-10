import axios from 'axios'
import { URL_GLOBAL } from '../../../constants/constants';
import { getAccessToken } from "../../auth";

export const getAllProvinciasPage = async (token, page) => {
    
  const url = `${URL_GLOBAL}/api/provincias-page/?page=${page}`

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


export const getAllProvinciasSearch = async (token, search) => {

  const url = `${URL_GLOBAL}/api/provincias-search/?nombre=${search}`;
  
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


export const getAllProvincias = async (token) => {

  const resolved = {
    data: null,
    error: null
  }
  const url = `${URL_GLOBAL}/api/provincias-all/`

  const params = {
      headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${token}`
      }
  }

  try {
      const res = await axios.get(url, params)
      resolved.data = res.data.results

  } catch (err) {
      resolved.error = err
  }
  return resolved

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

export const filterProvinciaComuna = async (provincia) =>{
 
  const resolved = {
      data: null,
      error: null
    }

    const token = await getAccessToken();
    const url = `${URL_GLOBAL}/api/provincias/${provincia}/`
    const params = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${token}`
      }
    }
  
    try {
      const res = await axios.get(url, params)
      resolved.data = res.data
    } catch (err) {
      resolved.error = err.response.data.message
    }
    return resolved
}
