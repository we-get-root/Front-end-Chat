import React from 'react';
import { Icon, Input, Form, Button } from 'antd';
import { useField } from 'formik';


export const FormInputEmail = ({ field, form: { touched, errors }, placeholders, icon, ...props }) => {
	return (
		<>
			<Form.Item
				hasFeedback
				validateStatus={errors[field.name] || touched[field.name] ? 'error' ? field.value === '' ? 'error' : errors[field.name].status ? 'error' : 'success' : null : null}
				help={touched[field.name] && errors[field.name] && errors[field.name].typeError} >
				<Input
					placeholder={placeholders}
					allowClear
					prefix={
						<Icon
							type={icon}
							style={{ color: 'rgba(0,0,0,.25)' }} />}
					size="large"
					{...field} />
			</Form.Item>
		</>
	)
}

// <= Distribute the code for checking the login and registration form into different components

export const FormInputPassword = ({ field, form: { touched, errors }, placeholders, icon, expressionFor, switchFor, ...props }) => {
	const type = (typeof expressionFor === 'undefined' ? field.name : expressionFor)
	const [meta] = useField(props)
	const expression = {
		forEmail: (touched[field.name] || errors[field.name] ? field.value === '' ? 'error' : errors[type].status ? 'error' : 'success' : null),
		forConfirmPass: (touched[field.name] || errors[field.name] ? field.value === '' ? 'error' : field.value === meta.value.create_pass ? 'success' : 'error' : null)
	}
	return (
		<>
			<Form.Item
				hasFeedback
				validateStatus={expression[switchFor]} >
				<Input.Password
					placeholder={placeholders}
					allowClear
					prefix={
						<Icon
							type={icon}
							style={{ color: 'rgba(0,0,0,.25)' }} />}
					size="large"
					{...field} />
			</Form.Item>
		</>
	)
}



export const ButtonForm = (props) => {

	const [field, meta, helper] = useField(props)
	
	return (
		<Button
			className="registration__button-registration"
			type="primary"
			disabled={false}
			size="large"
			block > зарегестрироватся </Button>

	)
}