import React from 'react';
import { Icon, Input, Form, Button } from 'antd';
import { Formik, withFormik } from 'formik';
import { Link } from 'react-router-dom';


import { DecoratorForm } from '../../_modules/decorator/warnInvalidForm';
import { validateForms } from '../../_modules/validate/validateForm';

import store from '../../_state/request';
import { userAuthorization } from '../../_state/request';

import './auth.scss';


const FormAuth = ({ value: { email, password }, touched, isValidateStatus, isSubmitting, ...props }) => {

  const forEmail = isValidateStatus('email')
  const forPassword = isValidateStatus('password')
  return (
    <>
      <section className="login">
        <Formik
          onSubmit={props.handleSubmit}  >
          <Form>
            <Form.Item
              hasFeedback
              validateStatus={forEmail.touch ? forEmail.status : null}
              value={email}
              help={forEmail.error ? forEmail.typeError : null} >
              <Input
                name="email"
                placeholder="E-mail"
                allowClear
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                size="large" />
            </Form.Item>
            <Form.Item
              hasFeedback
              validateStatus={forPassword.touch ? forPassword.status : null}
              value={password}
              help={forPassword.error ? forPassword.typeError : null} >
              <Input.Password
                name="password"
                placeholder="Password"
                allowClear
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                size="large" />
            </Form.Item>
            <Button
              className="login__button-large"
              type="submit"
              disabled={isSubmitting}
              onClick={props.handleSubmit}
              size="large"
              block > войти </Button>
            <Link
              to="/regis"
              className="login__link-registration" > зарегестрироватся </Link>
          </Form>
        </Formik>
      </section>
    </>
  )
}

const Container = (props) => {
  return (<DecoratorForm component={FormAuth} {...props} />)
}

export const Authorization = withFormik({
  mapPropsToValues: () => ({ email: '', password: '', }),

  validate: (value) => (validateForms.checkKeys(value)),

  handleSubmit: (values, { setSubmitting }) => {

    setSubmitting(true)
    store.dispatch(userAuthorization(values)).then(() => {
      setSubmitting(false)
    }).catch(() => setSubmitting(false))

  },
  displayName: 'FormAuth',
})(Container);




