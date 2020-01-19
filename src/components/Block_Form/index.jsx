import React from 'react';
import { Route } from 'react-router-dom';

import './app.scss';
import Login from './Login/Login';

const Auth = (props) => (
  <section className={'auth'}>
    <h1>Вход в аккаунт</h1>
    <p>Введите ваш логин и пароль</p>
    <div className={'auth__block'}>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path='/registration'>
        <h1>hello  world</h1>
      </Route>
    </div>
  </section>
)

export default Auth;

