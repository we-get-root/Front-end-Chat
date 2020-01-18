export function validatePassword(value) {
    let error;
    // debugger
    if(!value) {
        error = 'Required';
    } else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/i.test(value)) {
        error = 'Не валидный пароль';
    }
    return error;
}

export function validateEmail(value) {
    let error = { typeError: null, status: false };

    if (!value) {
        error.typeError = 'Необходимо заполнить!';
        error.status = true;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error.typeError = 'Невалидный E-mail';
        error.status = true;
    }
    return error;
}
