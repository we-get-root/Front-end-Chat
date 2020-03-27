export const validateForms = {
	email: function (value) {
		const error = {}
		if (!value) {
			error.typeError = 'Should not be empty';
			error.status = false;
			return error;
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
			error.typeError = 'Invalid E-mail';
			error.status = false;
			return error;
		}
		return error;
	},
	password: function (value) {
		const error = {}
		if (!value) {
			error.typeError = 'Should not be empty!';
			error.status = false;
			return error;
		} else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/i.test(value)) {
			error.typeError = 'Invalid password';
			error.status = false;
			return error;
		}
		return error;
	},
	user_name: function (value) {
		const error = {}
		if (!value) {
			error.typeError = 'Should not be empty!';
			error.status = false;
		} else if (!/^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/i.test(value)) {
			error.typeError = 'Invalid name format';
			error.status = false;
		}
		return error;
	},
	confirm_password: function (value) {
		const error = {}
		if (!value) {
			error.typeError = 'Should not be empty!';
			error.status = false;
		} else if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/i.test(value)) {
			if (this._values.confirm_password === this._values.password) {
				return error;
			} else {
				error.typeError = 'Password doesn\'t match';
				error.status = false;
			}
		} else {
			error.typeError = 'Invalid password';
			error.status = false;
		}
		return error;
	},

	_values: {},
	_isEmpty: function (obj) {
		for (let key in obj) { return false }
		return true;
	},

	checkKeys: function (values) {
		this._values = { ...values }
		const key = Object.keys(values)
		const result = {}
		for (let i = 0; i < key.length; ++i) {
			const empty = this._isEmpty(this[key[i]](values[key[i]]))
			if (!empty) result[key[i]] = this[key[i]](values[key[i]])
		}
		return result;
	},
}

