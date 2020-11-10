import {
  HIDE_MESSAGE,
  INIT_URL,
  ON_HIDE_LOADER,
  ON_SHOW_LOADER,
  SHOW_MESSAGE,
  LOGIN_SUCCESS,
  SIGNOUT_USER_SUCCESS,
  REGISTER_SUCCESS,
  USER_LOADED,
  SIGNOUT_USER_FAIL,
  USER_LOADING,
} from "constants/ActionTypes";

const INIT_STATE = {
  loader: false,
  alertMessage: "",
  showMessage: false,
  initURL: "",
  user: null,
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        loader: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loader: false,
        user: action.payload,
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      console.log("USER", action.payload)
      localStorage.setItem("access", action.payload.access);
      localStorage.setItem("refresh", action.payload.refresh);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loader: false,
      };
    case INIT_URL: {
      return {
        ...state,
        initURL: action.payload,
      };
    }
    case SIGNOUT_USER_SUCCESS:
    case SIGNOUT_USER_FAIL:
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return {
        ...state,
        access: null,
        isAuthenticated: false,
        user: null,
        initURL: "/app/index",
        loader: false,
      };
    case SHOW_MESSAGE: {
      return {
        ...state,
        alertMessage: action.payload,
        showMessage: true,
        loader: false,
      };
    }
    case HIDE_MESSAGE: {
      return {
        ...state,
        alertMessage: "",
        showMessage: false,
        loader: false,
      };
    }
    case ON_SHOW_LOADER: {
      return {
        ...state,
        loader: true,
      };
    }
    case ON_HIDE_LOADER: {
      return {
        ...state,
        loader: false,
      };
    }
    default:
      return state;
  }
};
