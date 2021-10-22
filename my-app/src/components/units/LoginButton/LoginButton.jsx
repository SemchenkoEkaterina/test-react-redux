import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './LoginButton.scss';

const LoginButton = ({disabled}) => (
  <div className="login">
    <Link className="navbar-items__links link" to='/profile'>
      <button className="login__button" disabled={disabled} >
      Sign in
    </button>
  </Link>
  </div>
);

LoginButton.propTypes = {
  disabled: PropTypes.bool,
};

export default LoginButton;
