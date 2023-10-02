import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

export default function (state = initialState, { type } = {}) {
  switch (type) {
    case types.LOGIN_REQUEST: {
      console.log('REDUCER', type);
      return state;
    }

    default: {
      return state;
    }
  }
}
