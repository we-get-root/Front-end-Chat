export const DecoratorForm = (props) => {
	const { component, values, touched, errors, handleChange, handleBlur, handleSubmit, isSubmitting } = props; // <= these values are taken from withForm;
	const modules = {
		_isEmptyCheck: function (obj, forInput) {
			// check if the touch was then there is an error;
			return (typeof obj[forInput] === 'undefined' ? false : true) 
		},
		isValidateStatus: function (forInput) {
			const result = {
				touch: modules._isEmptyCheck(touched, forInput),
				error: modules._isEmptyCheck(errors, forInput),
				status: null,
				typeError: null,
			}
			// only if it was touched, we enter the condition, 
			// otherwise we return the default object;
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
	// we get the component that needs to be wrapped by 
	// the decorator through the tag attributes;
	return (
		component({
			value: values,
			touched: touched,
			isValidateStatus: modules.isValidateStatus,
			handleChange: handleChange,
			handleBlur: handleBlur,
			handleSubmit: handleSubmit,
			isSubmitting: isSubmitting,
			...props
		})
	)
}

