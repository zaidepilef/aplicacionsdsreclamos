import axios from 'axios'
import { URL_GLOBAL } from '../../../constants/constants';


export const getAllTareaSearch = async (token, search) => {

    const url = `${URL_GLOBAL}/api/tareas/?nombre=${search}`;
    
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
export const getAllTareaPage = async (token, page) => {

  const url = `${URL_GLOBAL}/api/tareas/?nombre=&page=${page}`;
  
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

export const addTarea = async (token, dataBody) =>{
   
    const resolved = {
        data: null,
        error: null
      }
      const url = `${URL_GLOBAL}/api/tareas/`
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

export const editTarea = async (token, dataBody, id) =>{
   
    const resolved = {
        data: null,
        error: null
      }
      const url = `${URL_GLOBAL}/api/tareas/${id}/`
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

export const deleteTarea = async (token, dataBody) =>{
   
    const resolved = {
        data: null,
        error: null
      }
      const url = `${URL_GLOBAL}/api/tareas/${dataBody.id}/`
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


export const getAllTareas = async (token) => {

  const resolved = {
    data: null,
    error: null
  }
  const url = `${URL_GLOBAL}/api/tareas/`

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
