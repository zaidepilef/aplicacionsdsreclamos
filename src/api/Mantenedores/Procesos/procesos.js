import axios from 'axios'
import { URL_GLOBAL } from '../../../constants/constants'

export const getAllProcesos = async (token, page) => {
  const url = `${URL_GLOBAL}/api/procesos/`

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

export const getAllProcesosSearch = async (token, search) => {
  const url = `${URL_GLOBAL}/api/procesos-search/?nombre=${search}`

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

export const addProceso = async (token, dataBody) => {
  const resolved = {
    data: null,
    error: null,
  }
  const url = `${URL_GLOBAL}/api/procesocreate/`
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

export const deleteProceso = async (token, id) => {
  const resolved = {
    data: null,
    error: null,
  }
  const url = `${URL_GLOBAL}/api/instanciaproceso/${id}/`
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

export const getInstanciaProcesoApi = async (token, id) => {
  const url = `${URL_GLOBAL}/api/instanciaproceso/${id}/`

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

export const updateProceso = async (token, dataBody, id) => {
  const resolved = {
    data: null,
    error: null,
  }

  const url = `${URL_GLOBAL}/api/instanciaproceso/${id}/`

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
