import React from 'react';
import { Route, withRouter, Link } from 'react-router-dom';

import { Authorization } from './_modules/container/containerAuth';
import { Registration } from './_modules/container/containerRegis';
import './app.scss';


const Auth = (props) => {

  const whatForm = props.location.pathname !== '/registration' ?
    { tagH: 'Войти в аккаунт', tagP: 'Введите ваш логин и пароль' } :
    { tagH: 'Регистрация', tagP: 'Введите ваши данные' }

  return (
    <>
      <section className={'auth'}>
        <h1>{whatForm.tagH}</h1>
        <p>{whatForm.tagP}</p>
        <div className={'auth__block'}>
          <Route exact path="/">
            <Authorization />
          </Route>
          <Route exact path='/registration'>
            <Registration />
          </Route>
        </div>
        <Link to='/hi'>hi</Link>
      </section>
      <suction>
        <Route exact path="/hi">
        <h1>hi</h1>

        </Route>
      </suction>
    </>
  )

}
const BlockForm = withRouter(Auth)

export default BlockForm;

