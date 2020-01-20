import React from 'react';
import { Route } from 'react-router-dom';

import './app.scss';
import Authorization from './Auth/Auth';
import Registration from './Registr/Registr';

const Auth = (props) => (
  <section className={'auth'}>
    <h1>Вход в аккаунт</h1>
    <p>Введите ваш логин и пароль</p>
    <div className={'auth__block'}>
      <Route exact path="/">
        <Authorization />
      </Route>
      <Route exact path='/registration'>
        <Registration />
      </Route>
    </div>
  </section>
)

export default Auth;

