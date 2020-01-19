import React from 'react';
import { Icon, Input, Form } from 'antd';
import { useField } from 'formik';


export const FormInputEmail = ({ field, form: { touched, errors }, ...props }) => {
	return (
		<>
			<Form.Item
			type="email"
				hasFeedback
				validateStatus={ touched[field.name] && errors[field.name] && errors.email.status ? 'error' : touched[field.name] ? 'success' : null }
				help={ touched[field.name] && errors[field.name] && errors.email.typeError } >
				<Input
					placeholder="E-mail"
					allowClear
					prefix={ <Icon 
											type="user" 
											style={{ color: 'rgba(0,0,0,.25)' }} /> }
					size="large"
					{...field} />
			</Form.Item>
		</>
	)
}

export const FormInputPassword = ({ field, form: { touched }, ...props }) => {
	const [f, meta, h] = useField(props);
	return (
		<>
			<Form.Item
			type="password"
				hasFeedback
				validateStatus={ touched[field.name] ? field.value === '' ? 'error' : meta.value.email === '' ? 'error' : 'success' : null } >
				<Input.Password
					placeholder="Password" 
					allowClear
					prefix={ <Icon 
											type="lock"  
											style={{ color: 'rgba(0,0,0,.25)' }} /> }
					size="large"
					{...field} />
			</Form.Item>
		</>
	)
}
	