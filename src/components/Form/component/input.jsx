import React from 'react';
import { Icon, Input, Form } from 'antd';
import { useField } from 'formik';



export const FormInputEmail = ({ field, form: { touched, errors }, placeholders, icon, ...props }) => { 
	debugger
	return (
		<>
			<Form.Item
			type="email"
				hasFeedback
				validateStatus={ touched[field.name] || errors[field.name] ? 'error' ? errors.email.status ? 'error' : 'success' : null : null  }
				help={ touched[field.name] && errors[field.name] && errors.email.typeError } >
				<Input
					placeholder={ placeholders }
					allowClear
					prefix={ <Icon 
											type={ icon } 
											style={{ color: 'rgba(0,0,0,.25)' }} /> }
					size="large"
					{...field} />
			</Form.Item>
		</>
	)
}

export const FormInputPassword = ({ field, form: { touched, errors }, placeholders, icon, ...props }) => {
	const[f, meta, h] = useField(props)
	return (
		<>
			<Form.Item
			type="password"
				hasFeedback
				validateStatus={ touched[field.name] || errors[field.name] ? field.value === '' ? 'error' : errors.email.status ? 'error' : 'success' : null } >
				<Input.Password
					placeholder={ placeholders } // <= Type comes in props is equal placeholder
					allowClear
					prefix={ <Icon 
											type={ icon }  
											style={{ color: 'rgba(0,0,0,.25)' }} /> }
					size="large"
					{...field} />
			</Form.Item>
		</>
	)
}
	