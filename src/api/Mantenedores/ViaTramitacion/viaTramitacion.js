import axios from 'axios'
import { URL_GLOBAL } from '../../../constants/constants';

//Fix: se deja como proceso 1 por defecto hasta que 
//se establesca la logica de los procesos por el tipo
export const getAllViaTramitacionSearch = async (token, search, page=1) => {

    const url = `${URL_GLOBAL}/api/via_tramitacion/?tipo=${search}&page=${page}`;
    
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

export const addViaTramitacion = async (token, dataBody) =>{
    const sendData = {
      tipo:dataBody.tipo,
      tarea:dataBody.tarea
    }
    const resolved = {
        data: null,
        error: null
      }
      const url = `${URL_GLOBAL}/api/via_tramitacion/`
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

export const editViaTramitacion = async (token, dataBody, id) =>{
    //Fix: se deja como proceso 1 por defecto hasta que 
    //se establesca la logica de los procesos por el tipo
    const sendData = {
      tipo:dataBody.tipo,
      id,
      tarea:dataBody.tarea
    }
    const resolved = {
        data: null,
        error: null
      }
      const url = `${URL_GLOBAL}/api/via_tramitacion/${id}/`
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

export const deleteViaTramitacion = async (token, dataBody) =>{
   
    const resolved = {
        data: null,
        error: null
      }
      const url = `${URL_GLOBAL}/api/via_tramitacion/${dataBody.id}/`
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