import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../../types';
import api from '../../../../services/axios';
import { history } from '../../../../services/history';
function* registerRequest({ payload }) {
  const { username, email, password } = payload;
  try {
    yield call(api.post, '/users', {
      username,
      email,
      password,
    });
    toast.success('Conta criada com sucesso!');
    yield put(actions.registerCreatedSuccess({ username, email, password }));
    history.push('/login');
  } catch (e) {
    e.response.data.errors.map((err) => toast.error(err));
    yield put(actions.registerFailure());
  }
}

export default all([takeLatest(types.REGISTER_REQUEST, registerRequest)]);
