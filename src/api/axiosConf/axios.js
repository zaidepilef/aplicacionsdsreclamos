import axios from "axios";
import LocalStorageService from "../localStorage/LocalStorageService";
// import { useHistory } from "react-router-dom";
import { URL_GLOBAL } from "../../constants/constants";

// LocalstorageService
const localStorageService = LocalStorageService.getService();

const instance = axios.create({
  baseURL: URL_GLOBAL
});

// let history = useHistory();

// Add a request interceptor
instance.interceptors.request.use(
  config => {
    const token = localStorageService.getAccessToken();
    if (token) {
      config.headers["Authorization"] = `JWT ${token}`;
    }
    config.headers["Content-Type"] = "application/json";
    //   config.headers['access-control-allow-origin'] = '*';

    return config;
  },
  error => {
    Promise.reject(error);
  }
);

//Add a response interceptor

instance.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url === "/api/token/obtain" && originalRequest.url === "/api/permission"
    ) {

      //TODO: revisar un metodo para redirigir al login
      // history.push('/signin');
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorageService.getRefreshToken();
      const token = await instance.post("api/token/refresh", {
        refresh: refreshToken
      });
      localStorageService.setToken(token.data);
      axios.defaults.headers.common[
        "Authorization"
      ] = `JWT ${localStorageService.getAccessToken}`;
      return instance(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default instance;
