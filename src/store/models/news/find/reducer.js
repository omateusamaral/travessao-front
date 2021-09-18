/* eslint-disable indent */
import * as types from '../../types';
const initialState = {
  newsTyped: [],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FIND_SUCCESS: {
      const newState = { ...state };
      newState.newsTyped = action.payload;
      return newState;
    }
    case types.FIND_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }
    case types.FIND_REQUEST: {
      const newState = { ...state };
      return newState;
    }
    default: {
      return state;
    }
  }
}
