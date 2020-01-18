import React from 'react';
import { Icon, Input, Form } from 'antd';


export const FormInputEmail = ({ field, form: { touched, errors }, types, ...props }) => {
	return (
		<>
			<Form.Item
				type="email"
				hasFeedback
				validateStatus={touched[field.name] && errors[field.name] && errors.email.status ? 'error' : touched[field.name] ? 'success' : null}
				help={ touched[field.name] && errors[field.name] && errors.email.typeError }
			>
				<Input
					placeholder="E-mail"
					id="error2"
					prefix={ <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} /> }
					size="large"
					{...field} />
			</Form.Item>
		</>
	)
}


export const FormInputPassword = ({ field, form: { touched, errors }, types, ...props }) => {
	return (
		<>
			<Input
				type={types}
				style={{ marginBottom: '20px' }}
				placeholder={props.placeholder}
				prefix={<Icon type={props.iconType} style={{ color: 'rgba(0,0,0,.25)' }} />}
				size="large"
				{...field} />
			{touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
		</>
	)
}