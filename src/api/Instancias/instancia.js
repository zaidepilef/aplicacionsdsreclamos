import axios from "axios";
import { URL_GLOBAL } from "../../constants/constants";
import { getAccessToken } from "../auth";

export const getInstanciasApi = async query => {
  const url = `${URL_GLOBAL}/api/instancias/${query}`;

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
    return err.message;
  }
};

export const getInstanciasFilterApi = async (query, page = 1) => {

  console.log("WTF", query, "XD", page)
  const url = `${URL_GLOBAL}/api/instancias/?page=${page}&${query}`;

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
    return err.message;
  }
};

export const getInstanciaApi = async (token, id) => {
  const url = `${URL_GLOBAL}/api/instancia/${id}/`;

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

// export const getInstanciaOriginalApi = async (token, id) => {
//   const url = `${URL_GLOBAL}/api/instancia/${id}/original`;

//   const resolved = {
//     data: null,
//     error: null
//   };

//   const params = {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `JWT ${token}`
//     }
//   };

//   try {
//     const res = await axios.get(url, params);
//     resolved.data = res.data;
//   } catch (err) {
//     resolved.error = err.message;
//   }
// };





export const fetchDataSelectAPI = async (id) => {

  const token = getAccessToken();

  const resolved = {
    data: null,
    error: null
  };

  const url = `${URL_GLOBAL}/api/instancia/datos/${id}/`;

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

export const fetchRegionesAPI = async (value) => {

  const token = getAccessToken();

  const resolved = {
    data: null,
    error: null
  };

  let url = `${URL_GLOBAL}/api/regiones`

  if(value){
    url = `${url}/${value}/comunas`;
  }else{
    url = `${url}`;
  }
  
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

export const fetchPrestadoresAPI = async (value) => {

  const token = getAccessToken();

  const resolved = {
    data: null,
    error: null
  };

  const url = `${URL_GLOBAL}/api/region/comuna/prestadores/${value}`


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





export const saveInstanceApi = async (token, id, dataBody) => {
  const resolved = {
    data: null,
    error: null
  };

  const url = `${URL_GLOBAL}/api/instancia/validate/${id}/`;

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
    resolved.error = err;
  }

  return resolved;
};

export const completeInstanceApi = async (token, id, dataBody) => {
  const resolved = {
    data: null,
    error: null
  };

  const url = `${URL_GLOBAL}/api/instancia/complete/${id}/`;

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
    // resolved.error = err.response.data.message
    resolved.error = err.response.data.message;
  }

  return resolved;
};

// Elaborar solicitud => Llenar el select de las plantillas disponibles
export const getPlantillasInstancia = async (token, id) => {
  const url = `${URL_GLOBAL}/api/instancia/plantilla/${id}/`;

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

  return resolved;
};

// Elaborar Solicitud => Tabla de plantillas
export const instancePlantillasAPI = async (token, id) => {
  const url = `${URL_GLOBAL}/api/plantilla/etapa/${id}/`;

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

  return resolved;
};

export const claimInstanceApi = async claimId => {
  const token = getAccessToken();

  const resolved = {
    data: null,
    error: null
  };

  let claimParse = claimId.toString();

  const claimObject = {
    id: claimParse
  };

  const url = `${URL_GLOBAL}/api/instancia/claim`;

  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`
    }
  };

  try {
    const res = await axios.post(url, claimObject, params);
    resolved.data = res.data;
  } catch (err) {
    resolved.error = err.response.data.message
  }

  return resolved;
};

export const asignateInstanceApi = async (id_instancia, username) => {
  const token = getAccessToken();

  const resolved = {
    data: null,
    error: null
  };

  const dataForm = {
    id_instancia,
    username
  };

  const url = `${URL_GLOBAL}/api/instancia/asignar`;

  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`
    }
  };

  try {
    const res = await axios.post(url, dataForm, params);
    resolved.data = res.data;
  } catch (err) {
    resolved.error = err.response.data;
  }

  return resolved;
};

export const viewDocumentApi = async (token, url_image) => {
  const resolved = {
    data: null,
    error: null
  };

  const url_data = {
    url: url_image
  };

  const url = `${URL_GLOBAL}/api/ecm/view`;

  const params = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`
    }
  };

  try {
    const res = await axios.post(url, url_data, params);
    resolved.data = res.data;
  } catch (err) {
    // resolved.error = err.response.data.message
    resolved.error = err;
  }
  return resolved;
};

// Despacha Documentación Electrónica
export const DespachaDocumentacionElectronicaAPI = async data => {
  const url = `${URL_GLOBAL}/api/despachar/documentacion`;

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
    const res = await axios.post(url, data, params);
    resolved.data = res.data;
  } catch (err) {
    resolved.error = err.response.data;
  }

  return resolved;
};

// CAMUNDA
export const reasignarInstanciaCamunda = async (data) => {

  const url = `${URL_GLOBAL}/api/instancia/camunda/asignar`;  
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
    const res = await axios.post(url, data, params);
    resolved.data = res.data;
  } catch (err) {
    resolved.error = err.response.data;
  }

  return resolved;
}

export const derivarInstanciaCamunda = async (data) => {

  const url = `${URL_GLOBAL}/api/instancia/camunda/derivar`;
  
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
    const res = await axios.post(url, data, params);
    resolved.data = res.data;
  } catch (err) {
    resolved.error = err.response.data;
  }

  return resolved;
}
