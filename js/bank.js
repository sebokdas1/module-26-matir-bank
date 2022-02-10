document.getElementById('login-button').addEventListener('click', function () {
    const emailField = document.getElementById('login-email').value;
    const passwordField = document.getElementById('login-password').value;
    if (emailField == 'admin@phero.com' && passwordField == 'admin') {
        window.location.href = "matir-bank.html"
    } else {
        alert('Your Email or password is invalid')
    }
})

