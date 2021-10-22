import { LOGIN_USER, LOGOUT_USER } from '../actions/actionTypes';
import initialState from '../../initialState';

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        login: action.payload.login,
      };
    case LOGOUT_USER:
      return {
        ...state,
        login: action.payload.login,
      };
    default: return state;
  }
};

export default userReducer;
