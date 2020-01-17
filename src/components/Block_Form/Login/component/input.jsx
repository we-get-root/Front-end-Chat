import React from 'react';
import { Icon, Input } from 'antd';

const FormInput = ({ field, form: { touched, errors }, types, ...props }) => {
	// debugger
	return (
		<>
			<Input
				type={types}
				placeholder={props.placeholder}
				prefix={<Icon type={props.iconType} style={{ color: 'rgba(0,0,0,.25)' }} />}
				{...field} />
			{touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
		</>
	)
}

export default FormInput;
