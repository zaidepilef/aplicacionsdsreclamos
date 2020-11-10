import axios from 'axios'
import { URL_GLOBAL } from '../../../constants/constants';


export const getAllGeneroSearch = async (token, search, page = 1) => {

  const resolved = {
    data: null,
    error: null
  }
  const url = `${URL_GLOBAL}/api/generos-all/?desc_genero=${search}&page=${page}`;

  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`
    }
  }

  try {
    const res = await axios.get(url, params)
    resolved.data = res.data
  } catch (err) {
    resolved.error = true
  }
  return resolved
}

export const addGenero = async (token, dataBody) => {

  const resolved = {
    data: null,
    error: null
  }
  const url = `${URL_GLOBAL}/api/generos/`
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

export const editGenero = async (token, dataBody, id) => {

  const resolved = {
    data: null,
    error: null
  }
  const url = `${URL_GLOBAL}/api/generos/${id}/`
  const params = {
    headers: {
      'Content-Type': 'application/json',
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

export const deleteGeneros = async (token, dataBody) => {

  const resolved = {
    data: null,
    error: null
  }
  const url = `${URL_GLOBAL}/api/generos/${dataBody.id}/`
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