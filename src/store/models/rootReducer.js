import { combineReducers } from 'redux';
import auth from './user/auth/reducer';
import register from './user/register/reducer';

export default combineReducers({
  auth,
  register,
});
