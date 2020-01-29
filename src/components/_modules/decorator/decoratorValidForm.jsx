export const DecoratorForm = (props) => {
	const { component, values, touched, errors, handleChange, handleBlur, handleSubmit } = props;
	const modules = {
		_isEmptyCheck: function (obj, forInput) {
			const status = (typeof obj[forInput] === 'undefined' ? false : true)
			return status;
		},
		isValidateStatus: function (forInput) {
			const result = {
				touch: modules._isEmptyCheck(touched, forInput),
				error: modules._isEmptyCheck(errors, forInput),
				status: null,
				typeError: null,
			}
			if (result.touch) {
				if (result.error) {
					result.status = result.error ? 'error' : 'success';
					result.typeError = result.error ? errors[forInput].typeError : null;
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
			isValidateStatus: modules.isValidateStatus,
			handleChange: handleChange,
			handleBlur: handleBlur,
			handleSubmit: handleSubmit,
		})
	)
}

