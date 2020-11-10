import axios from 'axios'
import { URL_GLOBAL } from '../../../constants/constants'

export const getAllNacionalidades = async (token, page) => {
  const url = `${URL_GLOBAL}/api/nacionalidades-all/?page=${page}`

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

export const getAllNacionalidadesSearch = async (token, search, page) => {
  const url = `${URL_GLOBAL}/api/nacionalidades-search/?nombre=${search}&page=${page}`

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

export const addNacionalidad = async (token, dataBody) => {
  const resolved = {
    data: null,
    error: null,
  }
  const url = `${URL_GLOBAL}/api/nacionalidadcreate/`
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

export const deleteNacionalidad = async (token, id) => {
  const resolved = {
    data: null,
    error: null,
  }
  const url = `${URL_GLOBAL}/api/instancianacionalidad/${id}/`
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

export const getInstanciaNacionalidadApi = async (token, id) => {
  const url = `${URL_GLOBAL}/api/instancianacionalidad/${id}/`

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

export const updateNacionalidad = async (token, dataBody, id) => {
  const resolved = {
    data: null,
    error: null,
  }

  const url = `${URL_GLOBAL}/api/instancianacionalidad/${id}/`

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
