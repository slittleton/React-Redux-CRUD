import { combineReducers } from 'redux';
import crudReducer from './crudReducer';
import authReducer from './authReducer';



export default combineReducers ({
  crudReducer: crudReducer,
  authReducer: authReducer
});