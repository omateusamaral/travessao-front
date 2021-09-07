/* eslint-disable indent */
import * as types from '../types';
import api from '../../../services/axios';
const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;
      newState.isLoading = false;
      return newState;
    }
    case types.LOGIN_FAILURE: {
      delete api.defaults.headers.Authorization;
      const newState = { ...initialState };

      return newState;
    }
    case types.LOGIN_REQUEST: {
      const newState = { ...state };
      newState.isLoading = true;
      return newState;
    }
    default: {
      return state;
    }
  }
}
