import { all } from 'redux-saga/effects';

import auth from './user/auth/sagas';
import register from './user/register/sagas';
import news from './news/find/sagas';

export default function* rootSaga() {
  return yield all([auth, register, news]);
}
