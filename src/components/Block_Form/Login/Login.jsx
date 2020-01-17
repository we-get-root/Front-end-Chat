
import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { Formik, Field } from 'formik';

import { validateEmail, validatePassword } from './modules/validation'
import FormInput from './component/input';
import './Login.scss'


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
        <span className="login__testeses">
          <Field
            // className="login__ityem-email"
            name="email"
            validate={validateEmail}
            component={FormInput}
            types="email"
            placeholder="E-mail"
            iconType="user"
          />
        </span>
        <Field
          // className="login__ityem-password"
          name="pass"
          validate={validatePassword}
          component={FormInput}
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