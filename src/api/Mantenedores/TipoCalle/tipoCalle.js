import axios from 'axios'
import { URL_GLOBAL } from '../../../constants/constants';


export const getAllTipoCalleSearch = async (token, search, page = 1) => {

  const url = `${URL_GLOBAL}/api/tipo-calle-all/?dvi_descripcion=${search}&page=${page}`;

  const resolved = {
    data: null,
    error: null
  }
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

export const addTipoCalle = async (token, dataBody) => {

  const resolved = {
    data: null,
    error: null
  }
  const url = `${URL_GLOBAL}/api/tipo_calle/`
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

export const editTipoCalle = async (token, dataBody, id) => {

  const resolved = {
    data: null,
    error: null
  }
  const url = `${URL_GLOBAL}/api/tipo_calle/${id}/`
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

export const deleteTipoCalle = async (token, dataBody) => {

  const resolved = {
    data: null,
    error: null
  }
  const url = `${URL_GLOBAL}/api/tipo_calle/${dataBody.id}/`
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

