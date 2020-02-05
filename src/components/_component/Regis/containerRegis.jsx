import React from 'react';
import { withFormik } from 'formik';

import { DecoratorForm } from './../../_modules/decorator/decoratorValidForm';
import { validateForms } from './../../_modules/validate/validate';
import FormRegis from './Regis';


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
  displayName: 'RegisForm',
})(Container);

