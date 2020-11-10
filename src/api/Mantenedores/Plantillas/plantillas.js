import axios from 'axios'
import { URL_GLOBAL } from '../../../constants/constants';


export const getAllPlantillasSearch = async (token, search) => {

    const url = `${URL_GLOBAL}/api/plantillas-all/?nombre=${search}`;
    
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
export const getAllPlantillasPage = async (token, page) => {

  const url = `${URL_GLOBAL}/api/plantillas-all/?nombre=&page=${page}`;
  
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

export const addPlantilla = async (token, dataBody) =>{
   
    const resolved = {
        data: null,
        error: null
      }
      const url = `${URL_GLOBAL}/api/plantillas/`
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

export const editPlantilla = async (token, dataBody, id) =>{
   
    const resolved = {
        data: null,
        error: null
      }
      const url = `${URL_GLOBAL}/api/plantillas/${id}/`
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

export const deletePlantilla = async (token, dataBody) =>{
   
    const resolved = {
        data: null,
        error: null
      }
      const url = `${URL_GLOBAL}/api/plantillas/${dataBody.id}/`
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




export const getAllPlantillas = async (token) => {

  const resolved = {
    data: null,
    error: null
  }
  const url = `${URL_GLOBAL}/api/plantillas-all/`

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
