// Grab the elements the script will change
const form = document.getElementById("contact-form");
const emailInput = document.getElementById("email");
const emailHint = document.getElementById("email-hint");
const messageInput = document.getElementById("message");
const counter = document.getElementById("char-count");
const feedback = document.getElementById("form-message");
const MAX = 300;

// Live check 1: characters left while typing
messageInput.addEventListener("input", function () {
    const left = MAX - messageInput.value.length;
    counter.textContent = left + " characters left";
    counter.classList.toggle("warning", left < 30);
});

// Live check 2: email valid or not while typing
emailInput.addEventListener("input", function () {
    if (emailInput.value === "") {
        emailHint.textContent = "";
    } else if (emailInput.validity.valid) {
        emailHint.textContent = "Looks good";
        emailHint.className = "hint valid";
    } else {
        emailHint.textContent = "Enter a valid email address";
        emailHint.className = "hint invalid";
    }
});

// On a valid submit: stop the page reloading, show a thank-you message
form.addEventListener("submit", function (event) {
    event.preventDefault();
    feedback.textContent = "Thank you! We will reply soon.";
    form.reset();
    counter.textContent = MAX + " characters left";
    emailHint.textContent = "";
});