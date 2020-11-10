import axios from 'axios'
import { URL_GLOBAL } from '../../../constants/constants';

export const getAllComunasPage = async (token, page) => {
    
  const url = `${URL_GLOBAL}/api/comunas-page/?page=${page}`

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


export const getAllComunasSearch = async (token, search, page=1) => {

  const url = `${URL_GLOBAL}/api/comunas-search/?nombre=${search}&page=${page}`;
  
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


export const getAllComunas = async (token) => {

  const resolved = {
    data: null,
    error: null
  }
  const url = `${URL_GLOBAL}/api/comunas-all/?limit=356&offset=0`

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