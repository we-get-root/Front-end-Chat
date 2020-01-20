export function validateForLoginForm(value) {

    let error = { typeError: null, status: false };
    if (!value) {
        error.typeError = 'Should not be empty';
        error.status = true;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error.typeError = 'Invalid E-mail';
        error.status = true;
    }
    return error;
}




function validatePassword(value) {
    debugger
    let error = { typeError: null, status: false };
    if(!value) {
        error.typeError = 'Required';
        error.status = true
    } else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/i.test(value)) {
        error.typeError = 'Не валидный пароль';
        error.status = true;
    }       
    return error;
}    

function validateEmail(value) {
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

