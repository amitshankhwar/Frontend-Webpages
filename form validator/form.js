//eversion jshint6

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


function showError(input, message){

    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerHTML=message;

}


function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


form.addEventListener('submit', function(e) {
        e.preventDefault();
        if(username.value === ''){
            showError(username,'username is required');
        }
        else if(username.value.length<4 || username.value.length>15 ){
            showError(username, 'username is of atleast 3 character and max 15');
        }
        else{
            showSuccess(username);
        }
});

function isvalidate(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


form.addEventListener('submit', function(e) {
    e.preventDefault();
    if(email.value === ''){
        showError(email,'email is required');
    }
    else if(!isvalidate(email.value)){
        showError(email,'Enter a valid email Id');
    }
    else{
    
        showSuccess(email);
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if(password.value === ''){
        showError(password,'password is required');
    }
    else{
        showSuccess(password);
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if(password2.value === ''){
        showError(password2,'password is required');
    }
    else if(password2.value!=password.value){
        showError(password2,'Enter the same password ');
    }
    else{
        showSuccess(password2);
    }
});