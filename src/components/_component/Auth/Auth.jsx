import React from 'react';
import { Icon, Input, Form, Button } from 'antd';
import { Formik } from 'formik';
import { Link } from 'react-router-dom';

import './auth.scss';


const FormAuth = ({ value: { email, password }, touched, isValidateStatus, ...props }) => {
  const forEmail = isValidateStatus('email')
  const forPassword = isValidateStatus('password')
  return (
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
            onClick={props.handleSubmit}
            size="large"
            block > войти </Button>
          <Link
            to="/regis"
            className="login__link-registration" > зарегестрироватся </Link>
        </Form>
      </Formik>
    </section>
  )
}

export default FormAuth;