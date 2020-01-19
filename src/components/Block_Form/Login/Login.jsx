import React from 'react';
import { Form, Button } from 'antd';
import { Formik, Field} from 'formik';
import { Link } from 'react-router-dom';

import { validateForLoginForm } from './modules/validation';
import { FormInputEmail, FormInputPassword } from './component/input';
import './Login.scss';


const LoginForm = (props) => {
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
            validate={ validateForLoginForm }
            component={ FormInputEmail }
          />
          <Field
            name="pass"
            validate={ validateForLoginForm }
            component={ FormInputPassword }
          />
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


export default LoginForm;