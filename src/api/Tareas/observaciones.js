import axios from "axios";
import { URL_GLOBAL } from "constants/constants";
import { getAccessToken } from "../auth";

// OBSERVACIONES
export const getObservations = async (id) => {
  const url = `${URL_GLOBAL}/api/instancia/${id}/observacion`;

  const token = getAccessToken();

  const resolved = {
    data: null,
    error: null
  };

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
    resolved.error = err.message;
  }

  return resolved
};

export const newObservation = async (id, dataBody) => {
  const url = `${URL_GLOBAL}/api/instancia/${id}/observacion`;

  const token = getAccessToken();

  const resolved = {
    data: null,
    error: null
  };

  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`
    }
  };

  try {
    const res = await axios.post(url, dataBody, params);
    resolved.data = res.data;
  } catch (err) {
    resolved.error = err.message;
  }

  return resolved
};

// CARPETA DIGITAL
export const getDigitalFoldier = async (token, dataBody) => {
  const url = `${URL_GLOBAL}/api/ecm/file`;

  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`
    }
  };

  try {
    const res = await axios.post(url, dataBody, params);
    return res.data;
  } catch (err) {
    return err.response;
  }
};
