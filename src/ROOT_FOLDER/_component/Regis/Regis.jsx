import React from 'react';
import { Formik, withFormik } from 'formik';
import { Link } from 'react-router-dom';
import { Icon, Input, Form, Button } from 'antd';

import { DecoratorForm } from '../../_modules/decorator/warnInvalidForm';
import { validateForms } from '../../_modules/validate/validateForm';

import './regis.scss';


const FormRegis = ({ value: { user_name, email, password, confirm_pass }, touched, isValidateStatus, ...props }) => {
  const forUserName        = isValidateStatus('user_name')
  const forEmail           = isValidateStatus('email')
  const forPassword        = isValidateStatus('password')
  const forConfirmPassword = isValidateStatus('confirm_password')
  return (
    <section className="login">
      <Formik
        onSubmit={props.handleSubmit} >
        <Form>
          <Form.Item
            hasFeedback
            validateStatus={forUserName.touch ? forUserName.status : null}
            value={user_name}
            help={forUserName.error ? forUserName.typeError : null} >
            <Input
              name="user_name"
              placeholder="Your name"
              allowClear
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              size="large" />
          </Form.Item>
          <Form.Item
            hasFeedback
            validateStatus={forEmail.touch ? forEmail.status : null}
            value={email}
            help={forEmail.error ? forEmail.typeError : null} >
            <Input
              name="email"
              placeholder="Your e-mail"
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
              placeholder="Create password"
              allowClear
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              size="large" />
          </Form.Item>
          <Form.Item
            hasFeedback
            validateStatus={forConfirmPassword.touch ? forConfirmPassword.status : null}
            value={confirm_pass}
            help={forConfirmPassword.error ? forConfirmPassword.typeError : null} >
            <Input.Password
              name="confirm_password"
              placeholder="Repeat password"
              allowClear
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              size="large" />
          </Form.Item>
          <Button
            className="login__button-large"
            type="submit"
            onClick={props.handleSubmit}
            size="large"
            block > зарегестрироватся  </Button>
          <Link
            to="/auth"
            className="login__link-registration" > Войти в аккаун </Link>
        </Form>
      </Formik>
    </section>
  )
}


const Container = (props) => {
  return (<DecoratorForm component={FormRegis} {...props} />)
}

export const Registration = withFormik({
  mapPropsToValues: () => ({user_name: '', email: '', password: '', confirm_password: ''}),

  validate: (value) => (validateForms.checkKeys(value)),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: 'FormRegis',
})(Container);

