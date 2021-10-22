import React from 'react';
import { useSelector } from 'react-redux';

import './Profile.scss';

function Profile() {
  
  const login = useSelector((state) => state.user.login);
  return (
    <div className="profile">
      <h1>
        {login}
      </h1>
    </div>
  );
}

export default Profile;
