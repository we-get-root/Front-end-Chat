export function validatePassword(value) {
    let error;
    if(!value) {
        error = 'Required';
    } else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/i.test(value)) {
        error = 'Не валидный пароль'
    }
    return error;
}

export function validateEmail(value) {
    let error;
    if (!value) {
        error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Невалидный E-mail';
    }
    return error;
}

// export default validateEmail;