const passwordInput = document.getElementById('passwordInfo');
const toggleButton = document.getElementById('toggleButton');
const getDataButton = document.getElementById('getDataButton');
const usernameInfo = document.getElementById('usernameInfo');
const signInCode = document.getElementById('signInCode');



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
    else if (username === 'admin' && password === 'passord'){
        window.location = "browse.html"
    }
    else {
        alert('Incorrect username or password');
    }
});

document.getElementById("LearnMore").addEventListener("click", function () {
    var learnMoreButton = document.getElementById("LearnMore");
    learnMoreButton.style.opacity = "0";
});
document.getElementById("LearnMore").addEventListener("click", function () {
    var displayElement = document.getElementById("displayLearnMore");
    displayElement.style.opacity = "1";
});

document.getElementById("signInCode").addEventListener("click", function () {
    var divs = document.querySelectorAll(".password-box");
    for (var i = 0; i < divs.length; i++) {
        var computedStyle = window.getComputedStyle(divs[i]);
        if (computedStyle.display === "none") {
            divs[i].style.display = "block"; // Make it visible
            document.getElementById("signInCode").innerText = "Use a sign-in code"; // Change button text
            document.getElementById("displaySignInCode").style.display = "none"; // Hide the text
        } else {
            divs[i].style.display = "none"; // Hide it
            document.getElementById("signInCode").innerText = "Use Password"; // Change button text
            document.getElementById("displaySignInCode").style.display = "block"; // Show the text
        }
    }
});

const inputs = document.querySelectorAll('.signIn input');

inputs.forEach(input => {
    input.addEventListener('focus', function () {
        const label = this.nextElementSibling;
        label.classList.add('active');
    });

    input.addEventListener('blur', function () {
        const label = this.nextElementSibling;
        if (!this.value.trim()) {
            label.classList.remove('active');
        }
    });

    // Check if inputs have initial values on page load
    if (input.value.trim()) {
        const label = input.nextElementSibling;
        label.classList.add('active');
    }
});

const openBtn = document.getElementById("openCookie");
const closeBtn = document.getElementById("closeCookie");
const cookie = document.getElementById("cookie");

openBtn.addEventListener("click", () => {
  cookie.classList.add("open");
})

closeBtn.addEventListener("click", () => {
  cookie.classList.remove("open");
})




