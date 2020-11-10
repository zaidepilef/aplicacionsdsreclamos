import axios from 'axios'
import { URL_GLOBAL } from '../../constants/constants'

export const getDashboard = async (token) => {
  const url = `${URL_GLOBAL}/api/dashboard`

  const params = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${token}`,
    },
  }

  try {
    const res = await axios.get(url, params)
    return res.data
  } catch (err) {
    return err.message
  }
}
