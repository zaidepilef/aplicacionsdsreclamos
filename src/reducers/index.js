import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'

//TEMPLATE
import Settings from './Settings';
import Auth from './Auth/Auth';
import Common from "./Common";



export default (history) => combineReducers({
  router: connectRouter(history),
  settings: Settings,
  common: Common,
  auth: Auth
});

