import axios from 'axios'
import { URL_GLOBAL } from '../../../constants/constants'
import { getAccessToken } from "api/auth"

export const getAllPrestadores = async (token, page) => {
  const url = `${URL_GLOBAL}/api/prestadores-all/?page=${page}`

  const params = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    },
  }

  try {
    const res = await axios.get(url, params)
    return res.data
  } catch (err) {
    return err.message
  }
}

export const PrestadoresAPI = async (page=1, query ) => {
  const url = `${URL_GLOBAL}/api/prestadores?page=${page}&search=${query}`

  const token = getAccessToken();

  const params = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    },
  }

  try {
    const res = await axios.get(url, params)
    return res.data
  } catch (err) {
    return err.message
  }
}

export const addPrestador = async (token, dataBody) => {
  const resolved = {
    data: null,
    error: null,
  }
  const url = `${URL_GLOBAL}/api/prestadorcreate/`
  const params = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    },
  }
  try {
    const res = await axios.post(url, dataBody, params)
    resolved.data = res.data
  } catch (err) {
    resolved.error = err.response.data.message
  }
  return resolved
}

export const deletePrestador = async (token, id) => {
  const resolved = {
    data: null,
    error: null,
  }
  const url = `${URL_GLOBAL}/api/instanciaprestador/${id}/`
  const params = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    },
  }

  try {
    const res = await axios.delete(url, params)
    resolved.data = res.data
  } catch (err) {
    resolved.error = err.response.data.message
  }
  return resolved
}

export const getInstanciaPrestadorApi = async (token, id) => {
  const url = `${URL_GLOBAL}/api/instanciaprestador/${id}/`

  const params = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    },
  }

  try {
    const res = await axios.get(url, params)
    return res.data
  } catch (err) {
    return err.message
  }
}

export const updatePrestador = async (token, dataBody, id) => {
  const resolved = {
    data: null,
    error: null,
  }

  const url = `${URL_GLOBAL}/api/instanciaprestador/${id}/`

  const params = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    },
  }

  try {
    const res = await axios.put(url, dataBody, params)
    resolved.data = res.data
  } catch (err) {
    resolved.error = err.response.data.message
  }

  return resolved
}
