import axios from 'axios'
import { URL_GLOBAL } from '../../../constants/constants';
import { getAccessToken } from "../../auth";

export const getAllRegiones = async (token) => {

  const resolved = {
    data: null,
    error: null
  }

  const url = `${URL_GLOBAL}/api/regiones-all/`

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

export const getAllRegionesPage = async (token, page) => {
    
  const url = `${URL_GLOBAL}/api/regiones-page/?page=${page}`

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


export const getAllRegionesSearch = async (token, search, page =1) => {

  const url = `${URL_GLOBAL}/api/regiones-search/?nombre=${search}&page=${page}`;
  
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

export const filterRegionProvincia = async () =>{
 
  const resolved = {
      data: null,
      error: null
    }

    const token = await getAccessToken();

    const url = `${URL_GLOBAL}/api/regiones`
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