import React from 'react';
import { withFormik, Formik, Field, useField } from 'formik';
import { Icon, Input, Form, Button } from 'antd';
import { Link } from 'react-router-dom';

// import { FormInputEmail, FormInputPassword } from './../_component/input';


const MyForm = props => {
  const { values, touched, errors, status, handleChange, handleBlur, handleSubmit, } = props;
  const errEmpty = (typeof errors.item_1 === 'undefined' ? true : errors)
  
  const key = Object.keys(errors)
  // c111onsole.log(status)
  // const err = 
  return (
    <section className="login">
      <Formik
        onSubmit={handleSubmit}  >
        <Form>
          <Form.Item
            hasFeedback
            validateStatus={touched.email ? errors[key[1]].status ? 'error' : 'success' : null}
            value={values.name}
          // help={touched[field.name] && errors[field.name] && errors[field.name].typeError} 
          >
            <Input
              name="email"
              placeholder="E-mail"
              allowClear
              onChange={handleChange}
              onBlur={handleBlur}
              prefix={
                <Icon
                  style={{ color: 'rgba(0,0,0,.25)' }} />}
              size="large" />
          </Form.Item>
          <Form.Item
            hasFeedback
            validateStatus={'error'}
            value={values.name}
          // help={touched[field.name] && errors[field.name] && errors[field.name].typeError} 
          >
            <Input
              name="password"
              placeholder="E-mail"
              allowClear
              onChange={handleChange}
              onBlur={handleBlur}
              prefix={
                <Icon
                  style={{ color: 'rgba(0,0,0,.25)' }} />}
              size="large" />
          </Form.Item>
          <Button
            className="login__button-large"
            type="submit"
            disabled={false}
            onClick={handleSubmit}
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

export const MyEnhancedForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: function () { return { email: '', password: '', } },

  validate: function (value) {

    const error = validateForms.checkKeys(value)
    const err = Object.keys(error)
    const result = []
    for (let i = 0, m = 1; i < err.length && m < err.length; ++i, ++m) {
      result.push(error[err[i]].status + error[err[m]].status)
      ++i;
      ++m;
    }
    const [_null] = result;

    if (_null === 0) { this.mapPropsToStatus(false) }
    else { this.mapPropsToStatus(true) }
    return error
  },
  mapPropsToStatus: function (status) {
    // console.log(status)
    return status ? true : false;
  },

  handleSubmit: function (values, { setSubmitting }) {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'AuthForm',
})(MyForm);


const validateForms = {
  email: function (value) {
    let error = {}
    if (!value) {
      error.typeError = 'Should not be empty';
      error.status = true;
      return error;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error.typeError = 'Invalid E-mail';
      error.status = true;
      return error;
    }
    return error
  },
  password: function (value) {
    let error = {}
    if (!value) {
      error.typeError = 'Should not be empty';
      error.status = true
      return error;
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/i.test(value)) {
      error.typeError = 'Invalid password';
      error.status = true;
      return error;
    }
    return error;
  },
  isEmpty: function (obj) {
    for (let key in obj) { return false }
    return true;
  },

  checkKeys: function (values) {
    const key = Object.keys(values)
    const result = {}
    for (let i = 0; i < key.length; ++i) {
      const empty = this.isEmpty(this[key[i]](values[key[i]]))
      if (!empty) {
        result[`item_${i}`] = this[key[i]](values[key[i]])
      }
    }
    return result
  },
}









export function validateForLoginForm(value, name) {
  let error = { typeError: null, status: false }
  switch (name) {
    case 'email_pass': {
      if (!value) {
        error.typeError = 'Should not be empty';
        error.status = true;
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error.typeError = 'Invalid E-mail';
        error.status = true;
      }
      return error;
    }
    case 'password': {
      if (!value) {
        error.typeError = 'Should not be empty';
        error.status = true
      } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/i.test(value)) {
        error.typeError = 'Invalid password';
        error.status = true;
      }
      return error;
    }
    case 'user_name': {
      if (!value) {
        error.typeError = 'Should not be empty';
        error.status = true
      } else if (!/^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/i.test(value)) {
        error.typeError = 'Invalid name format';
        error.status = true;
      }
      return error;
    }
    default: { return error }
  }
}