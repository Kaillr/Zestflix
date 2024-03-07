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
    var learnMoreButton = document.getElementById("LearnMore");
    learnMoreButton.style.display = "none";
});
document.getElementById("LearnMore").addEventListener("click", function () {
    var displayElement = document.getElementById("displayText");
    displayElement.style.display = "block";
});