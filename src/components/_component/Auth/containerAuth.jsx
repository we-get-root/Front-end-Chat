import React from 'react';
import { withFormik } from 'formik';

import { DecoratorForm } from './../../_modules/decorator/decoratorValidForm'
import { validateForms } from './../../_modules/validate/validate'
import FormAuth from './Auth';


const Container = (props) => {
  return (<DecoratorForm component={FormAuth} {...props} />)
}

export const Authorization = withFormik({
  mapPropsToValues: () => ({email: '', password: '',}),

  validate: (value) => (validateForms.checkKeys(value)),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: 'AuthForm',
})(Container);
