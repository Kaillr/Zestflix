var passwordInput = document.getElementById('passwordInput');
var toggleButton = document.getElementById('toggleButton');
var getDataButton = document.getElementById('getDataButton');
var usernameInfo = document.getElementById('usernameInfo');

passwordInput.addEventListener('focus', function () {
    toggleButton.textContent = 'Hide';
});

passwordInput.addEventListener('blur', function () {
    toggleButton.textContent = 'Show';
});

toggleButton.addEventListener('click', function (event) {
    event.preventDefault();
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        toggleButton.textContent = 'Show';
    }
});

getDataButton.addEventListener('click', function () {
    event.preventDefault();
    var username = usernameInfo.value;
    var password = passwordInput.value;

    if (username === '' || password === '') {
        alert('Please fill in both fields');
    } else if (username === 'Fucmass' && password === 'suckonmadick') {
        window.location = "browse.html";
    }
    else if (username === 'Kailler' && password === 'morendin') {
        window.location = "browse.html";
    }
    else if (username === 'Akane' && password === 'zestyzaza') {
        window.location = "browse.html";
    }
    else if (username === 'shitosuplayers@gmail.com' && password === 'ferozzogsara') {
        window.location = "browse.html";
    }
    else {
        alert('Incorrect username or password');
    }


});

document.getElementById("LearnMore").addEventListener("click", function () {
    var displayElement = document.getElementById("displayText");
    displayElement.style.display = "block";
    displayElement.textContent = "The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).";
    a
});

document.getElementById("LearnMore").addEventListener("click", function() {
    var learnMoreButton = document.getElementById("LearnMore");
    learnMoreButton.style.display = "none";
  });