import React from 'react';
import { withRouter } from 'react-router-dom';

import './index.scss';


const FormIndex = (props) => {
  const whatForm = props.location.pathname !== '/regis' ?
    { tagH: 'Войти в аккаунт', tagP: 'Введите ваш логин и пароль' } :
    { tagH: 'Регистрация', tagP: 'Введите ваши данные' }
  return (
    <>
      <section className={'auth'}>
        <h1>{whatForm.tagH}</h1>
        <p>{whatForm.tagP}</p>
        <div className={'auth__block'}>
          {props.children}
        </div>
      </section>
    </>
  )
}



export default withRouter(FormIndex);


