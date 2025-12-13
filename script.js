// console.log('lets start js');
const form = document.getElementById("loginform")

const text = document.querySelector(".text")
const email = document.querySelector(".email")
const password = document.querySelector(".password")
const password2 = document.querySelector(".password2")

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const isUsernameValid = checkRequired(text);

    const isEmailValid = checkRequired(email) && checkEmail(email);

    const isPassValid = checkRequired(password) && checkLength(password, 6);

    const isPass2Valid = checkRequired(password2) && checkPasswordsMatch(password, password2);

    if( isUsernameValid && isEmailValid && isPassValid && isPass2Valid){
        console.log('Form Submitted');
    }

});

function showError(input){
    input.style.borderColor = "red";
}

function showSuccess(input){
    input.style.borderColor = "green";
}

function checkRequired(input) {
    if(input.value.trim() === "") {
        showError(input);
        return false;
    }else{
        showSuccess(input);
        return true;
    }
}

function checkEmail(input){
    const emailpattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

    if(!emailpattern.test(input.value.trim())){
        showError(input);
        return false;
    }
    return true;
}

function checkLength(input, min){
    if(input.value.trim().length < min){

        showError(input);
        return false;
    }
    return true;
}

function checkPasswordsMatch(pass, pass2){
    if(pass.value !== pass2.value){
        showError(pass2);
        return false;
    }
    showSuccess(pass2);
    return true;
}