/* eslint-disable indent */
import * as types from '../../types';
const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.REGISTER_CREATED_SUCCESS: {
      const newState = { ...state };
      return newState;
    }
    case types.REGISTER_FAILURE: {
      const newState = { ...initialState };

      return newState;
    }
    case types.REGISTER_REQUEST: {
      const newState = { ...state };
      return newState;
    }
    default: {
      return state;
    }
  }
}
