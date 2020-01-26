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


export const FormInputPassword = ({ field, form: { touched, errors }, placeholders, icon, expressionFor, switchFor, ...props }) => {

	const exp = (typeof expressionFor === 'undefined' ? field.name : expressionFor)
	const [,meta,] = useField(props)

	const expression = {
		forEmail: (touched[field.name] || errors[field.name] ? field.value === '' ? 'error' : errors[exp].status ? 'error' : 'success' : null),
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

	const init = { status: true }
	const [,meta,] = useField(props)
	const keysMeta = Object.keys(meta.error)
	const nameMeta = Object.keys(meta.value)

	if (keysMeta.length === nameMeta.length) {
		init.status = false;
		let result = []
		for (let i = 0; i < keysMeta.length; ++i) {
			result.push(meta.error[keysMeta[i]].status)
		}
		const res = result.reduce((sum, num) => sum + num)

		if (res === 0) init.status = true;
	}
	// debugger
	return (
		<>
			<Button
				className="registration__button-registration"
				type="primary"
				disabled={!init.status}
				onClick={() => alert(keysMeta)}
				size="large"
				block >{props.children}</Button>
		</>
	)
}

const __ButtonFormNot = (props) => {

	const init = { status: true }
	const [f, meta, h] = useField(props)
	const keysMeta = Object.keys(meta.error)
	const nameMeta = Object.keys(meta.value)

	//	<= My first cycle =_=
	if (keysMeta.length === 4) {
		for (let f = 0; f < keysMeta.length; ++f) {
			const cycleResult = {
				_resultI: null,
				_resultJ: null,
			}
			for (let i = 0; i < keysMeta.length; ++i) {
				cycleResult._resultI = meta.error[keysMeta[i]].status;
				++i;
			}
			for (let j = 1; j < keysMeta.length; ++j) {
				cycleResult._resultJ = meta.error[keysMeta[j]].status;
				++j;
			}
			const result = (cycleResult._resultI + cycleResult._resultJ)
			result === 0 ? init.status = true : init.status = false;
		}
	}

	return (
		<>
			<Button
				className="registration__button-registration"
				type="primary"
				disabled={!init.status}
				onClick={() => alert(keysMeta)}
				size="large"
				block > зарегестрироватся </Button>
		</>
	)
}