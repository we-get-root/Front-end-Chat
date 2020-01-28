export const validateForms = {
	email: function (value) {
		let error = {}
		if (!value) {
			error.typeError = 'Should not be empty';
			error.status = true;
			return error;
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
			error.typeError = 'Invalid E-mail';
			error.status = true;
			return error;
		}
		return error
	},
	password: function (value) {
		let error = {}
		if (!value) {
			error.typeError = 'Should not be empty';
			error.status = true
			return error;
		} else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/i.test(value)) {
			error.typeError = '';
			error.status = true;
			return error;
		}
		return error;
	},
	isEmpty: function (obj) {
		for (let key in obj) { return false }
		return true;
	},

	checkKeys: function (values) {
		const key = Object.keys(values)
		const result = {}
		for (let i = 0; i < key.length; ++i) {
			const empty = this.isEmpty(this[key[i]](values[key[i]]))
			if (!empty) {
				result[key[i]] = this[key[i]](values[key[i]])
			}
		}
		return result
	},
}


// function validateForLoginForm(value, name) {
// 	let error = { typeError: null, status: false }
// 	switch (name) {
// 		case 'email_pass': {
// 			if (!value) {
// 				error.typeError = 'Should not be empty';
// 				error.status = true;
// 			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
// 				error.typeError = 'Invalid E-mail';
// 				error.status = true;
// 			}
// 			return error;
// 		}
// 		case 'password': {
// 			if (!value) {
// 				error.typeError = 'Should not be empty';
// 				error.status = true
// 			} else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/i.test(value)) {
// 				error.typeError = 'Invalid password';
// 				error.status = true;
// 			}
// 			return error;
// 		}
// 		case 'user_name': {
// 			if (!value) {
// 				error.typeError = 'Should not be empty';
// 				error.status = true
// 			} else if (!/^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/i.test(value)) {
// 				error.typeError = 'Invalid name format';
// 				error.status = true;
// 			}
// 			return error;
// 		}
// 		default: { return error }
// 	}
// }
