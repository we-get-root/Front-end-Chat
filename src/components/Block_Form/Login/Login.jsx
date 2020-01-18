
import React from 'react';
import { Form, Button } from 'antd';
import { Formik, Field } from 'formik';

import { validateEmail, validatePassword } from './modules/validation';
import { FormInputEmail, FormInputPassword } from './component/input';
import './Login.scss';


const LoginForm = (props) => (
  <section className="login__input-form">
    <Formik
      initialValues={{
        email: '',
        pass: '',
      }}
      onSubmit={values => {
        console.log(values);
      }} >
      <Form>
        <Field
          name="email"
          validate={validateEmail}
          component={FormInputEmail}
          types="email"
          placeholder="E-mail"
          iconType="user"
        />
        <Field
          name="pass"
          validate={validatePassword}
          component={FormInputPassword}
          types="password"
          placeholder="Password"
          iconType="lock"
        />
        <Button type="primary" block>Primary</Button>
      </Form>
    </Formik>
  </section>
)


export default LoginForm;