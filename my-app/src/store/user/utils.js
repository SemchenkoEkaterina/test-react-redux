import { loginUserAction, logoutUserAction } from '../user/actions/actions';

export const loginUser = (login) => (dispatch) => {

  dispatch(loginUserAction({
    login: login,
  }));
};

export const logoutUser = () => (dispatch) => {
  dispatch(logoutUserAction({
    login: '',
  }));
};
