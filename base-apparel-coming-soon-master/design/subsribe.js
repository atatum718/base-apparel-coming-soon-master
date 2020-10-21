const submit= document.querySelector("form-btn");
const errorMsg = document.querySelector("error-msg");
const iconError = document.querySelector("icon-error");

const mail = document.getElementById("email").value;
const regex2 = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/

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

function validate(mail){
    if (regex2.test(mail)){
        errorMsg.innerHTML = "You're subscribed";
        iconError.style.visibility = "hidden";

    }else{
        iconError.style.visibility ="visible";
        errorMsg.innerHTML= "Please provide a valid email";
    }
}