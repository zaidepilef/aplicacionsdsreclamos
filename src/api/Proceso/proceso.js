import axios from "axios";
// import AxiosGeneral from '../axiosConf/axios';
import { URL_GLOBAL } from '../../constants/constants';

export const newDeployCamunda = async (token, body) => {
  
  const url = `${URL_GLOBAL}/api/camunda/deployment`;

  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`
    }
  }
    try {
        const res = await axios.post(url, body, params)
        return res.data

    } catch (err) {
        return err.message
    }
  };

export const getProcess = async (token, query, page) => {

  const resolved = {
    data: null,
    error: null
  };

  const url = `${URL_GLOBAL}/api/process?search=${query}&page=${page}`;

  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`
    }
  };

  try {
    const res = await axios.get(url, params);
    resolved.data = res.data;
  } catch (err) {
    resolved.error = err;
  }

  return resolved;
};

export const updateProcess = async (token, id, data) => {
  const resolved = {
    data: null,
    error: null
  };

  const url = `${URL_GLOBAL}/api/process/${id}/`;

  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`
    }
  };

  try {
    const res = await axios.put(url, data, params);
    resolved.data = res.data;
  } catch (err) {
    resolved.error = err.response.data.message;
  }

  return resolved;
};


export const getAllProcesos = async (token) => {

    const resolved = {
      data: null,
      error: null
    }
    const url = `${URL_GLOBAL}/api/procesos-all/`
  
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
    return resolved;
  };

