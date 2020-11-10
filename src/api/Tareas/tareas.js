import axios from "axios";

import { getAccessToken } from "../auth";
import { URL_GLOBAL } from "constants/constants";

// OBTENER INSTANCIAS DEL USUARIO
export const getTaskInstance = async token => {
  const url = `${URL_GLOBAL}/api/camunda/process-instance/user`;

  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`
    }
  };

  try {
    const res = await axios.get(url, params);
    return res.data;
  } catch (err) {
    return err.message;
  }
};

// SUBIR PDF FIRMA
export const uploadPDF = async (token, pdf, id_instancia, idPlantilla) => {
  const url = `${URL_GLOBAL}/api/ecm/upload/file`;

  const resolved = {
    data: null,
    error: null
  };

  const formData = new FormData();
  formData.append("instancia", id_instancia);
  formData.append("repositorio", "dspace");
  formData.append("id_plantilla", idPlantilla);
  formData.append("archivo", pdf);

  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`
    }
  };

  try {
    const res = await axios.post(url, formData, params);
    resolved.data = res.data;
  } catch (err) {
    resolved.error = err.response.data;
  }

  return resolved;
};

// FIRMAS
export const tablaPlantillasAPI = async () => {
  const url = `${URL_GLOBAL}/api/ecm/upload/file`;

  const token = getAccessToken();

  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`
    }
  };

  try {
    const res = await axios.get(url, params);

    return res.data;
  } catch (err) {
    return console.log(err);
  }
};

export const signatureApi = async (formulario, arrayId) => {
  const url = `${URL_GLOBAL}/api/firmamasiva/documentos`;

  const token = getAccessToken();

  const resolved = {
    data: null,
    error: null
  };

  const formData = new FormData();
  formData.append("otp", formulario.otp);
  formData.append("rut", formulario.rut);
  formData.append("purpose", formulario.purpose);
  formData.append("archivo", arrayId);

  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`
    }
  };

  try {
    const res = await axios.post(url, formData, params);
    resolved.data = res.data;
  } catch (err) {
    resolved.error = err.response;
  }

  return resolved;
};

// CARPETA DIGITAL
export const getDigitalFoldier = async dataBody => {
  const url = `${URL_GLOBAL}/api/ecm/file`;

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
    resolved.error = err.response;
  }

  return resolved;
};

export const deleteFieldDigitalFoldierAPI = async uuid => {
  const token = getAccessToken();

  const dataBody = {
    uuid
  };

  const resolved = {
    data: null,
    error: null
  };

  const url = `${URL_GLOBAL}/api/ecm/file`;

  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`
    }
  };

  params.data = dataBody;

  try {
    const res = await axios.delete(url, params);
    resolved.data = res.data;
  } catch (err) {
    resolved.error = err.response;
  }

  return resolved;
};

//Se genera consulta para traer todas las tareas para el mantendor de vía de tramitación
export const getAllTareas = async token => {
  const resolved = {
    data: null,
    error: null
  };

  const url = `${URL_GLOBAL}/api/tarea`;

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
    resolved.error = err.response;
  }
  return resolved;
};

// ANALIZAR ADMISIBILIDAD
export const viaTramitacionAPI = async task => {
  const token = getAccessToken();

  const resolved = {
    data: null,
    error: null
  };

  const url = `${URL_GLOBAL}/api/via_tramitacion?tarea=${task}`;

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
    resolved.error = err.response;
  }
  return resolved;
};

export const getTareasFilter = async (token, proceso) => {
  const resolved = {
    data: null,
    error: null
  };

  const url = `${URL_GLOBAL}/api/tarea?proceso=${proceso}`;

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
    resolved.error = err.response;
  }
  return resolved;
};
