import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
// import { get } from 'lodash';
import * as actions from './actions';
import * as types from '../types';
import api from '../../../services/axios';
import { history } from '../../../services/history';
function* loginRequest({ payload }) {
  try {
    const response = yield call(api.post, '/tokens', payload);
    yield put(actions.loginSuccess({ ...response.data }));
    toast.success('Logado com sucesso');

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    history.push('/');
  } catch (e) {
    toast.error('E-mail ou senha inválido');
    yield put(actions.loginFailure());
  }
}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
