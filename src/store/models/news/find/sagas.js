import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../../types';
import api from '../../../../services/axios';
function* findRequest({ payload }) {
  const { newsTyped } = payload;
  try {
    const response = yield call(api.get, `news/${newsTyped}`);
    yield put(actions.findSuccess({ ...response.data }));
  } catch (e) {
    e.response.data.errors.map((err) => toast.error(err));
    yield put(actions.findFailure());
  }
}

export default all([takeLatest(types.FIND_REQUEST, findRequest)]);
