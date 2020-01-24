export function validateForLoginForm(value, name) {
	let error = { typeError: null, status: false }
	switch (name) {
		case 'email_pass': {
			if (!value) {
				error.typeError = true;
				error.status = 'error';
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
				error.typeError = 'Invalid E-mail';
				error.status = true;
			}
			return error;
		}
		case 'password': {
			if (!value) {
				error.typeError = 'Should not be empty';
				error.status = true
			} else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/i.test(value)) {
				error.typeError = 'Invalid password';
				error.status = true;
			}
			return error;
		}
		case 'user_name': {
			if (!value) {
				error.typeError = 'Should not be empty';
				error.status = true
			} else if (!/^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/i.test(value)) {
				error.typeError = 'Invalid name format';
				error.status = true;
			}
			return error;
		}
		default: { return error }
	}
}


