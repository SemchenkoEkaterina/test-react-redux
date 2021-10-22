import React, { useRef, useState, useEffect } from 'react';
import LoginButton from '../../units/LoginButton/LoginButton';
import { useDispatch} from 'react-redux';
import './Login.scss';
import { loginUser } from '../../../store/user/utils';


function Login() {
  const [login, setLogin]         = useState([]);
  const [password, setPassword]   = useState([]);
  const [disabled, setDisabled]   = useState();
  const disabledLast = useRef(true);
  const dispatch = useDispatch();
 

  useEffect(() => {
    const loginValue = (login.length === 0) ? ('') : (login.target.value);
    const passwordValue = (password.length === 0) ? ('') : (password.target.value);
    if (loginValue === 'developer21' && passwordValue === '123456') {
      disabledLast.current = false;
      setDisabled(disabledLast.current);
      
      dispatch(loginUser(login.target.value));
    } else {
      disabledLast.current = true;
      setDisabled(disabledLast.current);
    };
  }, [login, password, disabled, dispatch]);
  
  console.log(login);
  console.log(password);
  console.log(disabled);
  return (
    <div className="login-page">
      <div className="login-page__header">
        <h2 className="login-page__title">Welcome!</h2>
        <span className="login-page__subtitle">Please sign in to your accounts to start using the application</span>
      </div>
      <div className="login-page__body">
        <div className="login-page__body-login">
          <span className="login-page__login">Login: </span>
          <input
            className="login-page__login-input"
            type="text"
            id="login"
            name="login"
            onChange={setLogin}
          />
        </div>
        <div className="login-page__body-password">
          <span className="login-page__password">Password: </span>
          <input
            className="login-page__password-input"
            type="text"
            id="password"
            name="password"
            onChange={setPassword}
          />
        </div>
      <LoginButton disabled={disabled}/>
    </div>
      
    </div>
  );
}

export default Login;
