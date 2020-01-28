import React from 'react';
import { withFormik } from 'formik';

import { validateForms } from './../validate/validate';
import FormRegis from './../../_component/Regis/Regis';
import { DecoratorForm } from './../decorator/decoratorValidForm';


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

