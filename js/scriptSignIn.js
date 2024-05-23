document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signupForm');
    const signupUsername = document.getElementById('signupUsername');
    const signupPassword = document.getElementById('signupPassword');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = signupUsername.value;
        const password = signupPassword.value;

        if (username && password) {
            localStorage.setItem(username, password);
            alert('Signup successful!');
            signupUsername.value = '';
            signupPassword.value = '';
        } else {
            alert('Please fill in both fields');
        }
    });
});