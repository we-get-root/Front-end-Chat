import React from 'react';
import { Form, Button } from 'antd';
import { Formik, Field, useField} from 'formik';
import { Link } from 'react-router-dom';

import { validateForLoginForm } from './../modules/validate';
import { FormInputEmail, FormInputPassword } from './../component/input';
import './auth.scss';


const Authorization = (props) => {
  return (
    <section className="login">
      <Formik
        initialValues={{
          email: '',
          pass: '',
        }}
        onSubmit={ (values) => {
          console.log(values);
        }} >
        <Form>
          <Field 
            name="email"
            placeholders="E-Mail"
            icon="user"
            validate={ (values) =>  validateForLoginForm(values, 'email_pass') }
            component={ FormInputEmail } />
          <Field
            name="pass"
            placeholders="Password"
            icon="lock"
            expressionFor="email"
            switchFor="forEmail"
            validate={ (values) => validateForLoginForm(values, 'email_pass') }
            component={ FormInputPassword } />
          <Button
            className="login__button-large"
            type="primary"
            disabled={false}
            size="large"
            block > войти </Button>
            <Link 
              to="/registration"
              className="login__link-registration" > зарегестрироватся </Link>
        </Form>
      </Formik>
    </section>
  )
}


export default Authorization;