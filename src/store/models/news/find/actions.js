import * as Types from '../../types';

export function findRequest(payload) {
  return {
    type: Types.FIND_REQUEST,
    payload,
  };
}

export function findSuccess(payload) {
  return {
    type: Types.FIND_SUCCESS,
    payload,
  };
}

export function findFailure(payload) {
  return {
    type: Types.FIND_FAILURE,
    payload,
  };
}
