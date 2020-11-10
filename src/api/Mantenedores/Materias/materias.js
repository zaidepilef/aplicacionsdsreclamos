import axios from 'axios'
import { URL_GLOBAL } from '../../../constants/constants'

export const getAllMaterias = async (token, page) => {
  const url = `${URL_GLOBAL}/api/materias-all/?page=${page}`

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

export const getAllMateriass = async (token) => {
  const resolved = {
    data: null,
    error: null,
  }

  const url = `${URL_GLOBAL}/api/materias-all/`

  const params = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    },
  }

  try {
    const res = await axios.get(url, params)
    resolved.data = res.data.results
  } catch (err) {
    resolved.error = err
  }
  return resolved
}

export const getAllMateriasSearch = async (token, search, page) => {
  const url = `${URL_GLOBAL}/api/materias-search/?nombre=${search}&page=${page}`

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

export const addMateria = async (token, dataBody) => {
  const resolved = {
    data: null,
    error: null,
  }
  const url = `${URL_GLOBAL}/api/materiacreate/`
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

export const deleteMateria = async (token, id) => {
  const resolved = {
    data: null,
    error: null,
  }
  const url = `${URL_GLOBAL}/api/instanciamateria/${id}/`
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

export const getInstanciaMateriaApi = async (token, id) => {
  const url = `${URL_GLOBAL}/api/instanciamateria/${id}/`

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

export const updateMateria = async (token, dataBody, id) => {
  const resolved = {
    data: null,
    error: null,
  }

  const url = `${URL_GLOBAL}/api/instanciamateria/${id}/`

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
