// const submit= document.querySelector("form-btn");
// const errorMsg = document.querySelector("error-msg");
// const iconError = document.querySelector("icon-error");

// const mail = document.getElementById("email").value;
// const regex2 = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

// function validate(mail){
//    const regex = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm

//    if (regex2.test(mail)){
//        alert("Valid Email")
//        return true
//    }else{
//        alert ("Please provide a valid email")
//        return false;
//    }
// }

// function validate(mail){
//     if (regex2.test(mail)){
//         errorMsg.innerHTML = "You're subscribed";
//         iconError.style.visibility = "hidden";

//     }else{
//         iconError.style.visibility ="visible";
//         errorMsg.innerHTML= "Please provide a valid email";
//     }
// }

const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const errorInfo = document.querySelector('.error-msg');
const subscribeForm = document.querySelector('.form');
const submitBtn = document.querySelector('.form-btn');
const email = document.querySelector('.form-input');

const checkForm = e => {
    e.preventDefault();
    if (re.test(email.value)) {
        removeClass()
        errorInfo.textContent = 'You have been subscribed';
        subscribeForm.classList.add('success');
    } else {
        removeClass()
        errorInfo.textContent = 'Please provide a valid email';
        subscribeForm.classList.add('error');
    }
};

const removeClass = () => {
    subscribeForm.classList.remove('error');
    subscribeForm.classList.remove('success');
}

submitBtn.addEventListener('click', checkForm);