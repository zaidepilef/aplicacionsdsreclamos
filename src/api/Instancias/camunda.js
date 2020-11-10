import axios from "axios";
import { URL_GLOBAL } from "../../constants/constants";
import { getAccessToken } from "../auth";

export const duplicateInstance = async (instancias, duplicar) => {
  const url = `${URL_GLOBAL}/api/instancia/camunda/duplicar`;

  const token = getAccessToken();
  const data = {
    instancias,
    duplicar_otra : duplicar}
  
  
  const resolved = {
    data: null,
    error: null
  }
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
    resolved.error =  err.message;
  }
  return resolved;
};


export const tranferInstance = async (data) => {
  const url = `${URL_GLOBAL}/api/instancia/camunda/trasladar`;

  const token = getAccessToken();
  
  console.log(data);

  const resolved = {
    data: null,
    error: null
  }
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
    resolved.error =  err.message;
  }
  return resolved;
};