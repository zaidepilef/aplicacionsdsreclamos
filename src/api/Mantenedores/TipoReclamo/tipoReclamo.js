import axios from 'axios'
import { URL_GLOBAL } from '../../../constants/constants';


export const getAllTipoReclamoSearch = async (token, search="", page=1) => {

    const url = `${URL_GLOBAL}/api/tipo_reclamo?proceso=${search}&page=${page}`;
    
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


export const addTipoReclamo = async (token, dataBody) =>{
    const sendData = {
      tipo:dataBody.tipo,
      proceso:1
    }
    const resolved = {
        data: null,
        error: null
      }
      const url = `${URL_GLOBAL}/api/tipo_reclamo/`
      const params = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${token}`
        }
      }
      try {
        const res = await axios.post(url, sendData, params)
        resolved.data = res.data
      } catch (err) {
        resolved.error = err.response.data.message
      }
      return resolved
}

export const editTipoReclamo = async (token, dataBody, id) =>{
    //Fix: se deja como proceso 1 por defecto hasta que 
    //se establesca la logica de los procesos por el tipo
    const sendData = {
      tipo:dataBody.tipo,
      id,
      proceso:1
    }
    const resolved = {
        data: null,
        error: null
      }
      const url = `${URL_GLOBAL}/api/tipo_reclamo/${id}/`
      const params = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `JWT ${token}`
        }
      }
    
      try {
        const res = await axios.put(url, sendData, params)
        resolved.data = res.data
      } catch (err) {
        resolved.error = err.response.data.message
      }
      return resolved
}

export const deleteTipoReclamo = async (token, dataBody) =>{
   
    const resolved = {
        data: null,
        error: null
      }
      const url = `${URL_GLOBAL}/api/tipo_reclamo/${dataBody.id}/`
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