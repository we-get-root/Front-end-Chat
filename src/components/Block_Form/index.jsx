import React from 'react';

import './app.scss';
import Login from './Login/Login';
// import Registr from './Registr/Registr';

const Auth = (props) => (
  <section className={'auth'}>
      <h1>Вход в аккаунт</h1>
      <p>Введите ваш логин и пароль</p>
      <div className={'auth__block'}>
        <Login />
      </div>
  </section>
)

export default Auth;

