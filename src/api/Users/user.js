import axios from 'axios'
import { URL_GLOBAL } from '../../constants/constants';


export const getAllUsers = async (token) => {

  const resolved = {
    data: null,
    error: null
  }
  const url = `${URL_GLOBAL}/api/users`;

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