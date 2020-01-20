import React from 'react';
import { Form, Button } from 'antd';
import { Formik, Field} from 'formik';
import { Link } from 'react-router-dom';

import { validateForLoginForm } from './../modules/validate';
import { FormInputEmail, FormInputPassword } from './../component/input';
import './registr.scss';


const Registration = (props) => {
  return (
    <section className="registration">
      <Formik
        initialValues={{
          name_user: '',
          add_login: '',
          create_pass: '',
          confirm_pass: '',
        }}
        onSubmit={ (values) => {
          console.log(values);
        }} >
        <Form>
        <Field 
            name="name_user"
            placeholders="Your name"
            icon="user"
            validate={ validateForLoginForm }
            component={ FormInputEmail } />
          <Field 
            name="add_login"
            placeholders="Your e-mail"
            icon="mail"
            validate={ validateForLoginForm }
            component={ FormInputEmail } />
          <Field
            name="create_pass"
            placeholders="Create password"
            icon="lock"
            validate={ validateForLoginForm }
            component={ FormInputPassword } />
          <Field
            name="confirm_pass"
            placeholders="Repeat password"
            icon="lock"
            validate={ validateForLoginForm }
            component={ FormInputPassword } />
          <Button
            className="registration__button-registration"
            type="primary"
            disabled={false}
            size="large"
            block > зарегестрироватся </Button>
            <Link 
              to="/"
              className="registration__link-login" > Войти в аккаунт </Link>
        </Form>
      </Formik>
    </section>
  )
}

export default Registration;
