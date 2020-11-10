import axios from 'axios'
import { URL_GLOBAL } from '../../../constants/constants'

export const getAllSubmaterias = async (token, page) => {
  const url = `${URL_GLOBAL}/api/submaterias-all/?page=${page}`

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

export const getAllSubmateriasSearch = async (token, search, page) => {
  const url = `${URL_GLOBAL}/api/submaterias-search/?nombre=${search}&page=${page}`

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

export const addSubmateria = async (token, dataBody) => {
  const resolved = {
    data: null,
    error: null,
  }
  const url = `${URL_GLOBAL}/api/submateriacreate/`
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

export const deleteSubmateria = async (token, id) => {
  const resolved = {
    data: null,
    error: null,
  }
  const url = `${URL_GLOBAL}/api/instanciasubmateria/${id}/`
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

export const getInstanciaSubmateriaApi = async (token, id) => {
  const url = `${URL_GLOBAL}/api/instanciasubmateria/${id}/`

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

export const updateSubmateria = async (token, dataBody, id) => {
  const resolved = {
    data: null,
    error: null,
  }

  const url = `${URL_GLOBAL}/api/instanciasubmateria/${id}/`

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
