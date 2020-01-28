export const DecoratorForm = (props) => {
	const { component, values, touched, errors, handleChange, handleBlur, handleSubmit } = props;
	const modulForInternalProcessing = {
		_isEmptyCheck: function (obj, forInput) {
			let status = (typeof obj[forInput] === 'undefined' ? false : true)
			return status;
		},
		isValidateStatus: function (forInput) {
			const result = {
				touch: modulForInternalProcessing._isEmptyCheck(touched, forInput),
				error: modulForInternalProcessing._isEmptyCheck(errors, forInput),
				status: null,
				typeError: null,
			}
			if (result.touch) {
				if (result.error) {
					const check = (typeof errors[forInput] === 'undefined' ? true : false)
					result.status = !check ? 'error' : 'success';
					result.typeError = !check ? errors[forInput].typeError : null
				} else {
					result.status = 'success';
				}
				return result;
			} else {
				return result;
			}
		},
	}
	return (
		component({
			value: values,
			touched: touched,
			isValidateStatus: modulForInternalProcessing.isValidateStatus,
			handleChange: handleChange,
			handleBlur: handleBlur,
			handleSubmit: handleSubmit,
		})
	)
}

