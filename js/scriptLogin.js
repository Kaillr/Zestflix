document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('passwordInfo');
    const toggleButton = document.getElementById('toggleButton');
    const getDataButton = document.getElementById('getDataButton');
    const usernameInfo = document.getElementById('usernameInfo');

    // Toggle Password Visibility
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

    // Login Form Submission
    getDataButton.addEventListener('click', function (event) {
        event.preventDefault();
        const username = usernameInfo.value;
        const password = passwordInput.value;

        if (username === '' || password === '') {
            alert('Please fill in both fields');
        } else if (localStorage.getItem(username) === password) {
            window.location = 'browse.html';
        } else {
            alert('Incorrect username or password');
        }
    });
});

const getDataButton = document.getElementById('getDataButton');
const signInCode = document.getElementById('signInCode');

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