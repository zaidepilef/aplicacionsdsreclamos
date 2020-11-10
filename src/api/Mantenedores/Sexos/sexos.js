import axios from 'axios'
import { URL_GLOBAL } from '../../../constants/constants';



export const getAllSexos = async (token) => {

    
  const url = `${URL_GLOBAL}/api/sexos-all/`

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


export const addSexo = async (token, dataBody) =>{
 
  const resolved = {
      data: null,
      error: null
    }
    const url = `${URL_GLOBAL}/api/sexocreate/`
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


export const deleteSexo = async (token, id) =>{
 
  const resolved = {
      data: null,
      error: null
    }
    const url = `${URL_GLOBAL}/api/instanciasexo/${id}/`
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



export const getInstanciaSexoApi = async (token, id) => {

  const url = `${URL_GLOBAL}/api/instanciasexo/${id}/`

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

export const updateSexo = async (token, dataBody, id) => {

  const resolved = {
      data: null,
      error: null
  }

  const url = `${URL_GLOBAL}/api/instanciasexo/${id}/`

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

export const getAllSexosSearch = async (token, search) => {

  const url = `${URL_GLOBAL}/api/sexos-search/?desc_sexo=${search}`;
  
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