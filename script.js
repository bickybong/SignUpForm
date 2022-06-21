const first = document.getElementById("firstName");
const email = document.getElementById("user_email");
const pw = document.getElementById("user_password");
const last = document.getElementById("lastName");
const tel = document.getElementById("tel");
const confirmd = document.getElementById("confirm_password");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I'm expecting an e-mail address with @!");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
});

pw.addEventListener("input", function (event) {
    if (pw.validity.patternMismatch) {
        pw.setCustomValidity("Passwords needs at least 1 lowercase, 1 uppercase letter and 1 number and 8 characters!");
        pw.reportValidity();
    } else {
        pw.setCustomValidity("");
    }
});

tel.addEventListener("input", function (event) {
    if (tel.validity.patternMismatch) {
        tel.setCustomValidity("I'm expecting a 8 digit phone number!");
        tel.reportValidity();
    } else {
        tel.setCustomValidity("");
    }
});

confirmd.addEventListener('input', function(event){
    if (confirmd.value !== pw.value) {
        confirmd.setCustomValidity("I need to match the password!");
        confirmd.reportValidity();
    } else {
        confirmd.setCustomValidity("");
    }
})