import React from 'react';
import { Form, Button } from 'antd';
import { Formik, Field} from 'formik';
import { Link } from 'react-router-dom';

import { validateForLoginForm } from './../modules/validate';
import { FormInputEmail, FormInputPassword, ButtonForm } from './../component/input';
import './registr.scss';


const Registration = (props) => {
  return (
    <section className="registration">
      <Formik
        initialValues={{
          user_name: '',
          add_login: '',
          create_pass: '',
          confirm_pass: '',
        }}
        onSubmit={ (values) => {
          console.log(values);
        }} >
        <Form>
        <Field 
            name="user_name"
            placeholders="Your name"
            icon="user"
            validate={ (value) => validateForLoginForm(value, 'user_name') }
            component={ FormInputEmail } />
          <Field 
            name="add_login"
            placeholders="Your e-mail"
            icon="mail"
            validate={ (value) => validateForLoginForm(value, 'email_pass') }
            component={ FormInputEmail } />
          <Field
            name="create_pass"
            placeholders="Create password"
            icon="lock"
            switchFor="forEmail"
            validate={ (value) => validateForLoginForm(value, 'password') }
            component={ FormInputPassword } />
          <Field
            name="confirm_pass"
            placeholders="Repeat password"
            icon="lock"
            expressionFor="confirm_pass"
            switchFor="forConfirmPass"
            validate={ (value) => validateForLoginForm(value, 'password') }
            component={ FormInputPassword } />
          <ButtonForm />
            <Link 
              to="/"
              className="registration__link-login" > Войти в аккаунт </Link>
        </Form>
      </Formik>
    </section>
  )
}

export default Registration;
