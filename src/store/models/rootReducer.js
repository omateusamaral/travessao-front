import { combineReducers } from 'redux';
import auth from './user/auth/reducer';
import register from './user/register/reducer';
import news from './news/find/reducer';

export default combineReducers({
  auth,
  register,
  news,
});
