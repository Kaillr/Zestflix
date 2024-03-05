var passwordInput = document.getElementById('passwordInput');
var toggleButton = document.getElementById('toggleButton');

passwordInput.addEventListener('focus', function () {
    toggleButton.textContent = 'Hide';
});

passwordInput.addEventListener('blur', function () {
    toggleButton.textContent = 'Show';
});

toggleButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default behavior of the button click
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        toggleButton.textContent = 'Show';
    }
});