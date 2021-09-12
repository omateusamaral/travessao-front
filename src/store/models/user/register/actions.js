import * as Types from '../../types';

export function registerCreatedSuccess(payload) {
  return {
    type: Types.REGISTER_CREATED_SUCCESS,
    payload,
  };
}

export function registerFailure(payload) {
  return {
    type: Types.REGISTER_FAILURE,
    payload,
  };
}

export function registerRequest(payload) {
  return {
    type: Types.REGISTER_REQUEST,
    payload,
  };
}
