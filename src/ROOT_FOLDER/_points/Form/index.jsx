import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { WindowError } from './../../_component/WindowError/WindowError';

import './index.scss';


const FormIndex = ({ statusAuth, message, codeError, loading, ...props }) => {

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
      {(codeError !== 0) ? <WindowError message={message} status={statusAuth} /> : null}
    </>
  )
}

const connectToRedux = withRouter(FormIndex);

const mapPropsToState = (state) => ({
  statusAuth: state.authState.statusAuth,
  message: state.authState.message,
  codeError: state.authState.codeError,
  loading: state.authState.loading,
})

export default connect(mapPropsToState)(connectToRedux)


